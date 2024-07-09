const ee = require('@google/earthengine');
const { GoogleAuth } = require('google-auth-library');
const path = require('path');
const fs = require('fs');
const { datasets } = require('./datasets'); // Import datasets

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { dataset: datasetId, bands, dateRange, measurement } = req.body;

        // Print the request body
        console.log('Request Body:', req.body);

        // Load service account key
        const keyFilePath = path.join(process.cwd(), 'service-account-key.json');
        const key = JSON.parse(fs.readFileSync(keyFilePath, 'utf8'));

        // Authenticate with Google
        const auth = new GoogleAuth({
            credentials: key,
            scopes: ['https://www.googleapis.com/auth/earthengine.readonly'],
        });

        const client = await auth.getClient();

        // Configure Earth Engine with authenticated client
        ee.data.authenticateViaPrivateKey(key, () => {
            // Initialize Earth Engine
            ee.initialize(null, null, () => {
                console.log('Earth Engine initialized');

                // Find the dataset and band information
                const dataset = datasets.find(d => d.id === datasetId);
                if (!dataset) {
                    return res.status(404).json({ message: 'Dataset not found' });
                }

                const bandInfo = dataset.bands.find(b => b.id === bands[0]); // Assume using the first selected band for scale
                if (!bandInfo) {
                    return res.status(404).json({ message: 'Band not found in the dataset' });
                }

                const scale = parseInt(bandInfo.pixel_size, 10);

                // Print the scale
                console.log('Scale:', scale);

                console.log('bands[0]', bands[0])
                // Load dataset and apply processing
                const imageCollection = ee.ImageCollection(datasetId)
                    .filterDate(dateRange.start, dateRange.end)
                    .select(bands[0]);

                let processedImage;
                switch (measurement) {
                    case 'mean':
                        processedImage = imageCollection.mean();
                        break;
                    case 'max':
                        processedImage = imageCollection.max();
                        break;
                    case 'min':
                        processedImage = imageCollection.min();
                        break;
                    case 'median':
                        processedImage = imageCollection.median();
                        break;
                    default:
                        processedImage = imageCollection.mean();
                }

                // Get the bounding geometry of the dataset
                const boundingGeometry = processedImage.geometry().bounds();

                // Force evaluation of the bounding geometry
                boundingGeometry.evaluate(function(clientBoundingGeometry) {
                    // Compute the absolute min and max values of the image within the bounding geometry
                    const stats = processedImage.reduceRegion({
                        reducer: ee.Reducer.minMax(),
                        geometry: ee.Geometry(clientBoundingGeometry),
                        scale: scale,
                        maxPixels: 1e9 // Adjusted to a more reasonable value
                    });
                    console.log('stats', stats)
                    console.log('stats.dict')

                    // Evaluate stats and get URL for the processed image
                    stats.evaluate(function(statsDict) {
                        const min = statsDict[`${bands[0]}_min`];
                        const max = statsDict[`${bands[0]}_max`];

                        // Print the min and max values
                        console.log('Min:', min);
                        console.log('Max:', max);

                        const visParams = {
                            min: min,
                            max: max,
                            palette: ['blue', 'cyan', 'green', 'yellow', 'red']
                        };

                        processedImage.getMap(visParams, function(mapId) {
                            // Use ee.data.getTileUrl to generate the tile URL template
                            const tileUrlTemplate = `https://earthengine.googleapis.com/v1/${mapId.mapid}/tiles/{z}/{x}/{y}`;
                            console.log('Tile URL Template:', tileUrlTemplate); // Print the tile URL template for debugging
                            res.status(200).json({ mapUrl: tileUrlTemplate });
                        });
                    });
                });
            }, (error) => {
                console.error('Failed to initialize Earth Engine:', error);
                res.status(500).json({ message: 'Failed to initialize Earth Engine' });
            });
        }, (error) => {
            console.error('Failed to authenticate:', error);
            res.status(500).json({ message: 'Failed to authenticate' });
        });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
