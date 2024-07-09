
import { error } from "console";

const ee = require("@google/earthengine");
const { GoogleAuth } = require("google-auth-library");
const path = require("path");
const fs = require("fs");
const { datasets } = require("./datasets"); // Import datasets

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { dataset: datasetId, bands, dateRange, measurement, orbitPass} = req.body;

    // Print the request body
    console.log("Request Body:", req.body);

    // Load service account key
    const keyFilePath = path.join(process.cwd(), "service-account-key.json");
    const key = JSON.parse(fs.readFileSync(keyFilePath, "utf8"));

    // Authenticate with Google
    const auth = new GoogleAuth({
      credentials: key,
      scopes: ["https://www.googleapis.com/auth/earthengine.readonly"],
    });

    const client = await auth.getClient();

    // Configure Earth Engine with authenticated client
    ee.data.authenticateViaPrivateKey(
      key,
      () => {
        // Initialize Earth Engine
        ee.initialize(
          null,
          null,
          () => {
            console.log("Earth Engine initialized");

            // Find the dataset and band information
            const dataset = datasets.find((d) => d.id === datasetId);
            if (!dataset) {
              return res.status(404).json({ message: "Dataset not found" });
            }

            const bandInfo = dataset.bands.find((b) => b.id === bands[0]); // Assume using the first selected band for scale
            if (!bandInfo) {
              return res
                .status(404)
                .json({ message: "Band not found in the dataset" });
            }

            const scale = parseInt(bandInfo.pixel_size, 10);

            // Print the scale
            console.log("Scale:", scale);

            // Define the function to apply scaling factors for Landsat
            function applyScaleFactors(image) {
              let ST;
              if (datasetId.includes("5") || datasetId.includes("7")) {
                ST = "ST_B6";
              } else {
                ST = "ST_B10";
              }
              console.log("ST", ST);
              var opticalBands = image
                .select("SR_B.")
                .multiply(0.0000275)
                .add(-0.2);
              var thermalBand = image
                .select(ST)
                .multiply(0.00341802)
                .add(149.0); // Correct thermal band
              return image
                .addBands(opticalBands, null, true)
                .addBands(thermalBand, null, true);
            }

            // Define the function to mask clouds and cloud shadows for Landsat
            function maskL8srClouds(image) {
              // Bits 3 and 5 are cloud shadow and cloud, respectively.
              var cloudShadowBitMask = 1 << 3;
              var cloudsBitMask = 1 << 5;
              // Get the pixel QA band.
              var qa = image.select("QA_PIXEL");
              // Both flags should be set to zero, indicating clear conditions.
              var mask = qa
                .bitwiseAnd(cloudShadowBitMask)
                .eq(0)
                .and(qa.bitwiseAnd(cloudsBitMask).eq(0));
              return image.updateMask(mask);
            }

            let processedImage;

            if (datasetId.includes("LANDSAT") && !datasetId.includes("TOA")) {
              // Load and process Landsat data
              let imageCollection = ee
                .ImageCollection(datasetId)
                .filterDate(dateRange.start, dateRange.end)
                .map(maskL8srClouds) // Apply cloud masking
                .map(applyScaleFactors); // Apply scaling factors

              // Select bands for visualization from req.body.bands
              console.log("this is landsat complicated region");
              console.log("bands:", bands);
              const visParams = {
                bands: bands,
                min: 0.0,
                max: 0.3,
              };

              switch (measurement) {
                case "mean":
                  processedImage = imageCollection.mean();
                  break;
                case "max":
                  processedImage = imageCollection.max();
                  break;
                case "min":
                  processedImage = imageCollection.min();
                  break;
                case "median":
                  processedImage = imageCollection.median();
                  break;
                default:
                  processedImage = imageCollection.mean();
              }
              processedImage.getMap(visParams, function (mapId, error) {
                if (error) {
                  console.error("Error getting mapId:", error);
                  return res
                    .status(500)
                    .json({ message: "Error getting mapId", error });
                }
                if (!mapId) {
                  console.error("mapId is undefined");
                  return res
                    .status(500)
                    .json({ message: "mapId is undefined" });
                }
                // Use ee.data.getTileUrl to generate the tile URL template
                const tileUrlTemplate = `https://earthengine.googleapis.com/v1/${mapId.mapid}/tiles/{z}/{x}/{y}`;
                console.log("Tile URL Template:", tileUrlTemplate); // Print the tile URL template for debugging
                res.status(200).json({ mapUrl: tileUrlTemplate });
              });
            } else if (
              datasetId.includes("LANDSAT") &&
              datasetId.includes("TOA")
            ) {
              let imageCollection = ee
                .ImageCollection(datasetId)
                .filterDate(dateRange.start, dateRange.end);

              // Select bands for visualization from req.body.bands
              console.log("this is TOA landsat region");
              console.log("bands:", bands);
              const visParams = {
                bands: bands,
                min: 0.0,
                max: 0.4,
              };

              switch (measurement) {
                case "mean":
                  processedImage = imageCollection.mean();
                  break;
                case "max":
                  processedImage = imageCollection.max();
                  break;
                case "min":
                  processedImage = imageCollection.min();
                  break;
                case "median":
                  processedImage = imageCollection.median();
                  break;
                default:
                  processedImage = imageCollection.mean();
              }
              processedImage.getMap(visParams, function (mapId, error) {
                if (error) {
                  console.error("Error getting mapId:", error);
                  return res
                    .status(500)
                    .json({ message: "Error getting mapId", error });
                }
                if (!mapId) {
                  console.error("mapId is undefined");
                  return res
                    .status(500)
                    .json({ message: "mapId is undefined" });
                }
                // Use ee.data.getTileUrl to generate the tile URL template
                const tileUrlTemplate = `https://earthengine.googleapis.com/v1/${mapId.mapid}/tiles/{z}/{x}/{y}`;
                console.log("Tile URL Template:", tileUrlTemplate); // Print the tile URL template for debugging
                res.status(200).json({ mapUrl: tileUrlTemplate });
              });
            } else if (dataset.type === "image") {
              console.log("youre in image region");
              const image = ee.Image(datasetId).select(bands[0]);
              image.getMap({}, function (mapId, error) {
                if (error) {
                  console.error("Error getting mapId:", error);
                  return res
                    .status(500)
                    .json({ message: "Error getting mapId", error });
                }
                if (!mapId) {
                  console.error("mapId is undefined");
                  return res
                    .status(500)
                    .json({ message: "mapId is undefined" });
                }

                const tileUrlTemplate = `https://earthengine.googleapis.com/v1/${mapId.mapid}/tiles/{z}/{x}/{y}`;
                console.log("Tile URL Template:", tileUrlTemplate);
                res.status(200).json({ mapUrl: tileUrlTemplate });
              });
            } else if (
              datasetId.includes("S2_HARMONIZED") ||
              datasetId.includes("S2_SR_HARMONIZED")
            ) {
              console.log("S2_harmonized region");
              // /**
              //  * Function to mask clouds using the Sentinel-2 QA band
              //  * @param {ee.Image} image Sentinel-2 image
              //  * @return {ee.Image} cloud masked Sentinel-2 image
              //  */
              function maskS2clouds(image) {
                var qa = image.select("QA60");

                // Bits 10 and 11 are clouds and cirrus, respectively.
                var cloudBitMask = 1 << 10;
                var cirrusBitMask = 1 << 11;

                // Both flags should be set to zero, indicating clear conditions.
                var mask = qa
                  .bitwiseAnd(cloudBitMask)
                  .eq(0)
                  .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

                return image.updateMask(mask).divide(10000);
              }
              const imageCollection = ee
                .ImageCollection(datasetId)
                .filterDate(dateRange.start, dateRange.end)
                .filter(ee.Filter.lt("CLOUDY_PIXEL_PERCENTAGE", 20))
                .map(maskS2clouds);
              switch (measurement) {
                case "mean":
                  processedImage = imageCollection.mean();
                  break;
                case "max":
                  processedImage = imageCollection.max();
                  break;
                case "min":
                  processedImage = imageCollection.min();
                  break;
                case "median":
                  processedImage = imageCollection.median();
                  break;
                default:
                  processedImage = imageCollection.mean();
              }
              var visParams = {
                min: 0.0,
                max: 0.3,
                bands: bands,
              };
              processedImage.getMap(visParams, function (mapId) {
                // Use ee.data.getTileUrl to generate the tile URL template
                const tileUrlTemplate = `https://earthengine.googleapis.com/v1/${mapId.mapid}/tiles/{z}/{x}/{y}`;
                console.log("Tile URL Template:", tileUrlTemplate); // Print the tile URL template for debugging
                res.status(200).json({ mapUrl: tileUrlTemplate });
              });
            } else if (datasetId.includes("S1_GRD")) {
              console.log("Sentinel-1 region");
              const imageCollection = ee
                .ImageCollection(datasetId)
                .filterDate(dateRange.start, dateRange.end)
                .filter(
                  ee.Filter.listContains(
                    "transmitterReceiverPolarisation",
                    bands[0]
                  )
                )
                .filter(ee.Filter.eq("instrumentMode", "IW"))
                .select(bands[0])
                .filter(ee.Filter.eq("orbitProperties_pass", orbitPass))
                .map(function (image) {
                  var edge = image.lt(-30.0);
                  var maskedImage = image.mask().and(edge.not());
                  return image.updateMask(maskedImage);
                });
                              switch (measurement) {
                case "mean":
                  processedImage = imageCollection.mean();
                  break;
                case "max":
                  processedImage = imageCollection.max();
                  break;
                case "min":
                  processedImage = imageCollection.min();
                  break;
                case "median":
                  processedImage = imageCollection.median();
                  break;
                default:
                  processedImage = imageCollection.mean();
              }
              var visParams = {
                min: -25,
                max: 5,
              };
              processedImage.getMap(visParams, function (mapId) {
                // Use ee.data.getTileUrl to generate the tile URL template
                const tileUrlTemplate = `https://earthengine.googleapis.com/v1/${mapId.mapid}/tiles/{z}/{x}/{y}`;
                console.log("Tile URL Template:", tileUrlTemplate); // Print the tile URL template for debugging
                res.status(200).json({ mapUrl: tileUrlTemplate });
              });
            } else if (datasetId.includes("OLCI")) {
              console.log("in sentinel 3 OLCI region");
              const imageCollection = ee
                .ImageCollection(datasetId)
                .filterDate(dateRange.start, dateRange.end)
                .select(bands);

              switch (measurement) {
                case "mean":
                  processedImage = imageCollection
                    .mean()
                    .multiply(ee.Image([0.00876539, 0.0123538, 0.0115198]));
                  break;
                case "max":
                  processedImage = imageCollection
                    .max()
                    .multiply(ee.Image([0.00876539, 0.0123538, 0.0115198]));
                  break;
                case "min":
                  processedImage = imageCollection
                    .min()
                    .multiply(ee.Image([0.00876539, 0.0123538, 0.0115198]));
                  break;
                case "median":
                  processedImage = imageCollection
                    .median()
                    .multiply(ee.Image([0.00876539, 0.0123538, 0.0115198]));
                  break;
                default:
                  processedImage = imageCollection
                    .mean()
                    .multiply(ee.Image([0.00876539, 0.0123538, 0.0115198]));
              }
              var visParams = {
                min: 0,
                max: 6,
                gamma: 1.5,
              };
              processedImage.getMap(visParams, function (mapId) {
                // Use ee.data.getTileUrl to generate the tile URL template
                const tileUrlTemplate = `https://earthengine.googleapis.com/v1/${mapId.mapid}/tiles/{z}/{x}/{y}`;
                console.log("Tile URL Template:", tileUrlTemplate); // Print the tile URL template for debugging
                res.status(200).json({ mapUrl: tileUrlTemplate });
              });
            } else {
              console.log("this is the normie region");
              // Load dataset and apply processing for non-Landsat data
              const imageCollection = ee
                .ImageCollection(datasetId)
                .filterDate(dateRange.start, dateRange.end)
                .select(bands[0]);

              switch (measurement) {
                case "mean":
                  processedImage = imageCollection.mean();
                  break;
                case "max":
                  processedImage = imageCollection.max();
                  break;
                case "min":
                  processedImage = imageCollection.min();
                  break;
                case "median":
                  processedImage = imageCollection.median();
                  break;
                default:
                  processedImage = imageCollection.mean();
              }

              // Get the bounding geometry of the dataset
              const boundingGeometry = processedImage.geometry().bounds();

              // Force evaluation of the bounding geometry
              boundingGeometry.evaluate(function (clientBoundingGeometry) {
                // Compute the absolute min and max values of the image within the bounding geometry
                const stats = processedImage.reduceRegion({
                  reducer: ee.Reducer.minMax(),
                  geometry: ee.Geometry(clientBoundingGeometry),
                  scale: scale,
                  maxPixels: 1e9, // Adjusted to a more reasonable value
                });

                // Evaluate stats and get URL for the processed image
                stats.evaluate(function (statsDict) {
                  const min = statsDict[`${bands[0]}_min`];
                  const max = statsDict[`${bands[0]}_max`];

                  // Print the min and max values
                  console.log("Min:", min);
                  console.log("Max:", max);

                  const visParams = {
                    min: min,
                    max: max,
                    palette: ["blue", "cyan", "green", "yellow", "red"],
                  };

                  processedImage.getMap(visParams, function (mapId) {
                    // Use ee.data.getTileUrl to generate the tile URL template
                    const tileUrlTemplate = `https://earthengine.googleapis.com/v1/${mapId.mapid}/tiles/{z}/{x}/{y}`;
                    console.log("Tile URL Template:", tileUrlTemplate); // Print the tile URL template for debugging
                    res.status(200).json({ mapUrl: tileUrlTemplate });
                  });
                });
              });
            }
          },
          (error) => {
            console.error("Failed to initialize Earth Engine:", error);
            res
              .status(500)
              .json({ message: "Failed to initialize Earth Engine" });
          }
        );
      },
      (error) => {
        console.error("Failed to authenticate:", error);
        res.status(500).json({ message: "Failed to authenticate" });
      }
    );
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
