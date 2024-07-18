const ee = require("@google/earthengine");
const { GoogleAuth } = require("google-auth-library");
const path = require("path");
const fs = require("fs");
const { datasets } = require("./datasets"); // Import datasets

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    dataset: datasetId,
    bands,
    dateRange,
    measurement,
    orbitPass,
  } = req.body;

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
        async () => {
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

          let processedImage;

          // Define helper functions
          function applyScaleFactors(image) {
            const ST =
              datasetId.includes("5") || datasetId.includes("7")
                ? "ST_B6"
                : "ST_B10";
            const opticalBands = image
              .select("SR_B.")
              .multiply(0.0000275)
              .add(-0.2);
            const thermalBand = image
              .select(ST)
              .multiply(0.00341802)
              .add(149.0); // Correct thermal band
            return image
              .addBands(opticalBands, null, true)
              .addBands(thermalBand, null, true);
          }

          function maskL8srClouds(image) {
            const cloudShadowBitMask = 1 << 3;
            const cloudsBitMask = 1 << 5;
            const qa = image.select("QA_PIXEL");
            const mask = qa
              .bitwiseAnd(cloudShadowBitMask)
              .eq(0)
              .and(qa.bitwiseAnd(cloudsBitMask).eq(0));
            return image.updateMask(mask);
          }

          function maskS2clouds(image) {
            const qa = image.select("QA60");
            const cloudBitMask = 1 << 10;
            const cirrusBitMask = 1 << 11;
            const mask = qa
              .bitwiseAnd(cloudBitMask)
              .eq(0)
              .and(qa.bitwiseAnd(cirrusBitMask).eq(0));
            return image.updateMask(mask).divide(10000);
          }

          function getProcessedImage(imageCollection) {
            switch (measurement) {
              case "mean":
                return imageCollection.mean();
              case "max":
                return imageCollection.max();
              case "min":
                return imageCollection.min();
              case "median":
                return imageCollection.median();
              default:
                return imageCollection.mean();
            }
          }

          function generateMapUrl(processedImage, visParams) {
            processedImage.getMap(visParams, function (mapId, error) {
              if (error) {
                console.error("Error getting mapId:", error);
              }
              if (!mapId) {
                console.error("mapId is undefined");
                return res.status(500).json({ message: "mapId is undefined" });
              }
              const tileUrlTemplate = `https://earthengine.googleapis.com/v1/${mapId.mapid}/tiles/{z}/{x}/{y}`;
              console.log("Tile URL Template:", tileUrlTemplate);
              res.status(200).json({ mapUrl: tileUrlTemplate });
            });
          }

          function findBandByDescription(dataset, description) {
            for (const band of dataset.bands) {
              if (band.description === description) {
                return band.id;
              }
            }
            return null;
          }

          // Processing logic
          if (datasetId.includes("LANDSAT") && !datasetId.includes("TOA")) {
            console.log("This is Landsat complicated region");
            const imageCollection = ee
              .ImageCollection(datasetId)
              .filterDate(dateRange.start, dateRange.end)
              .map(maskL8srClouds)
              .map(applyScaleFactors);
            processedImage = getProcessedImage(imageCollection);
            const visParams = {
              bands: bands,
              min: 0.0,
              max: 0.3,
            };
            generateMapUrl(processedImage, visParams);
          } else if (
            datasetId.includes("LANDSAT") &&
            datasetId.includes("TOA")
          ) {
            console.log("This is TOA Landsat region");
            if (bands.includes("NDVI")) {
              console.log("this is NDVI");
              const imageCollection = ee
                .ImageCollection(datasetId)
                .filterDate(dateRange.start, dateRange.end)
                .filter(ee.Filter.lt("CLOUD_COVER", 20));
              processedImage = getProcessedImage(imageCollection);
              var nir = processedImage.select(
                findBandByDescription(dataset, "NIR")
              );
              var red = processedImage.select(
                findBandByDescription(dataset, "Red")
              );
              console.log("dataset in NDVI", dataset);
              var ndvi = nir.subtract(red).divide(nir.add(red)).rename("NDVI");
              var visParamsNDVI = {
                min: -0.5,
                max: 1,
                palette: ["blue", "yellow", "green"],
              };
              generateMapUrl(ndvi, visParamsNDVI);
            }
            const imageCollection = ee
              .ImageCollection(datasetId)
              .filterDate(dateRange.start, dateRange.end);
            processedImage = getProcessedImage(imageCollection);
            const visParams = {
              bands: bands,
              min: 0.0,
              max: 0.4,
              gamma: 1.2,
            };
            generateMapUrl(processedImage, visParams);
          } else if (dataset.type === "image") {
            console.log("You're in image region");
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
                return res.status(500).json({ message: "mapId is undefined" });
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
            if (bands.includes("NDVI")) {
              console.log("this is NDVI");
              const imageCollection = ee
                .ImageCollection(datasetId)
                .filterDate(dateRange.start, dateRange.end);
              processedImage = getProcessedImage(imageCollection);
              var nir = processedImage.select(
                findBandByDescription(dataset, "NIR")
              );
              var red = processedImage.select(
                findBandByDescription(dataset, "Red")
              );
              // console.log("dataset in NDVI", dataset);
              var ndvi = nir.subtract(red).divide(nir.add(red)).rename("NDVI");
              var visParamsNDVI = {
                min: -0.2,
                max: 1,
                palette: ["blue", "yellow", "green"],
              };
              generateMapUrl(ndvi, visParamsNDVI);
            }
            const imageCollection = ee
              .ImageCollection(datasetId)
              .filterDate(dateRange.start, dateRange.end)
              .filter(ee.Filter.lt("CLOUDY_PIXEL_PERCENTAGE", 20))
              .map(maskS2clouds);
            processedImage = getProcessedImage(imageCollection);
            const visParams = {
              bands: bands,
              min: 0.0,
              max: 0.3,
            };
            generateMapUrl(processedImage, visParams);
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
                const edge = image.lt(-30.0);
                const maskedImage = image.mask().and(edge.not());
                return image.updateMask(maskedImage);
              });
            processedImage = getProcessedImage(imageCollection);
            const visParams = {
              min: -25,
              max: 5,
            };
            generateMapUrl(processedImage, visParams);
          } else if (datasetId.includes("OLCI")) {
            console.log("In Sentinel-3 OLCI region");
            const imageCollection = ee
              .ImageCollection(datasetId)
              .filterDate(dateRange.start, dateRange.end)
              .select(bands);
            processedImage = getProcessedImage(imageCollection).multiply(
              ee.Image([0.00876539, 0.0123538, 0.0115198])
            );
            const visParams = {
              min: 0,
              max: 6,
              gamma: 1.5,
            };
            generateMapUrl(processedImage, visParams);
          } else if (datasetId.includes("COPERNICUS/CORINE/V20/100m")) {
            console.log("COPERNICUS CORINE region");
            let year = new Date(dateRange.start).getFullYear();
            let corineDataset;

            if (year >= 1989 && year <= 1998) {
              corineDataset = "COPERNICUS/CORINE/V20/100m/1990";
            } else if (year >= 1999 && year <= 2001) {
              corineDataset = "COPERNICUS/CORINE/V20/100m/2000";
            } else if (year >= 2005 && year <= 2007) {
              corineDataset = "COPERNICUS/CORINE/V20/100m/2006";
            } else if (year >= 2011 && year <= 2012) {
              corineDataset = "COPERNICUS/CORINE/V20/100m/2012";
            } else if (year >= 2017 && year <= 2018) {
              corineDataset = "COPERNICUS/CORINE/V20/100m/2018";
            } else {
              return res
                .status(400)
                .json({ message: "Invalid date range for CORINE dataset" });
            }

            const dataset = ee.Image(corineDataset);
            const landCover = dataset.select("landcover");
            generateMapUrl(landCover, {});
          } else if (datasetId.includes("ESA/WorldCover/v200")) {
            console.log("in ESA WorldCover region");
            const imageCollection = ee.ImageCollection(datasetId).first();
            const visParams = {
              bands: ["Map"],
            };
            generateMapUrl(imageCollection, visParams);
          } else if (
            datasetId.includes("USGS/NLCD_RELEASES/2023_REL/RCMAP/V6/COVER")
          ) {
            console.log("in RCMAP V6 region");
            const imageCollection = ee
              .ImageCollection(datasetId)
              .select(bands[0])
              .filterDate(dateRange.start, dateRange.end);
            const visParams = {
              // Map 0..100.
              palette: [
                "000000",
                "f9e8b7",
                "f7e3ac",
                "f0dfa3",
                "eedf9c",
                "eada91",
                "e8d687",
                "e0d281",
                "ddd077",
                "d6cc6d",
                "d3c667",
                "d0c55e",
                "cfc555",
                "c6bd4f",
                "c4ba46",
                "bdb83a",
                "bbb534",
                "b7b02c",
                "b0ad1f",
                "adac17",
                "aaaa0a",
                "a3a700",
                "9fa700",
                "9aa700",
                "92a700",
                "8fa700",
                "87a700",
                "85a700",
                "82aa00",
                "7aaa00",
                "77aa00",
                "70aa00",
                "6caa00",
                "67aa00",
                "5fa700",
                "57a700",
                "52a700",
                "4fa700",
                "4aa700",
                "42a700",
                "3ca700",
                "37a700",
                "37a300",
                "36a000",
                "369f00",
                "349d00",
                "339900",
                "339900",
                "2f9200",
                "2d9100",
                "2d8f00",
                "2c8a00",
                "2c8800",
                "2c8500",
                "2c8400",
                "2b8200",
                "297d00",
                "297a00",
                "297900",
                "277700",
                "247400",
                "247000",
                "29700f",
                "2c6d1c",
                "2d6d24",
                "336d2d",
                "366c39",
                "376c44",
                "396a4a",
                "396a55",
                "3a6a5f",
                "3a696a",
                "396774",
                "3a6782",
                "39668a",
                "376292",
                "34629f",
                "2f62ac",
                "2c5fb7",
                "245ec4",
                "1e5ed0",
                "115cdd",
                "005ae0",
                "0057dd",
                "0152d6",
                "0151d0",
                "014fcc",
                "014ac4",
                "0147bd",
                "0144b8",
                "0142b0",
                "0141ac",
                "013da7",
                "013aa0",
                "01399d",
                "013693",
                "013491",
                "012f8a",
                "012d85",
                "012c82",
                "01297a",
              ],
            };
            // Create a mask to add transparency to non-oil palm plantation class pixels
            generateMapUrl(imageCollection, visParams);
          } else if (datasetId.includes("GlobalOilPalm")) {
            console.log("in GlobalOilPalm region");
            const imageCollection = ee
              .ImageCollection(datasetId)
              .select(bands[0]);
            var mosaic = imageCollection.mosaic();
            const visParams = {
              min: 1,
              max: 3,
              palette: ["ff0000", "ef00ff", "696969"],
            };
            // Create a mask to add transparency to non-oil palm plantation class pixels
            var mask = mosaic.neq(3);
            mask = mask.where(mask.eq(0), 0.6);
            generateMapUrl(mosaic.updateMask(mask), visParams);
          } else {
            console.log("This is the normie region");
            const imageCollection = ee
              .ImageCollection(datasetId)
              .filterDate(dateRange.start, dateRange.end)
              .select(bands[0]);
            imageCollection.size().getInfo(function (size) {
              console.log("Image Collection Size:", size);
            });
            processedImage = getProcessedImage(imageCollection);
            const globalBoundingGeometry = ee.Geometry.Polygon(
              [
                [
                  [-180, -90],
                  [180, -90],
                  [180, 90],
                  [-180, 90],
                  [-180, -90],
                ],
              ],
              null,
              false
            );
            const firstImage = imageCollection.first();
            const boundingGeometry = firstImage.geometry().bounds();
            console.log("bounding geom", boundingGeometry);
            boundingGeometry.evaluate(function (clientBoundingGeometry) {
              if (!clientBoundingGeometry) {
                console.error("Bounding Geometry is null or undefined");
                const stats = processedImage.reduceRegion({
                  reducer: ee.Reducer.minMax(),
                  geometry: globalBoundingGeometry,
                  scale: scale,
                  maxPixels: 1e9,
                });
                stats.evaluate(function (statsDict) {
                  if (!statsDict) {
                    console.error("stats dict is null or undefined");
                    return res
                      .status(500)
                      .json({ message: "stats dict is null or undefined" });
                  }
                  console.log(
                    "States dictionary",
                    JSON.stringify(statsDict, null, 2)
                  );
                  const min = statsDict[`${bands[0]}_min`];
                  const max = statsDict[`${bands[0]}_max`];
                  console.log("min:", min);
                  console.log("max", max);
                  const visParams = {
                    min: min,
                    max: max,
                    bands: bands,
                    palette: ["blue", "cyan", "green", "yellow", "red"],
                  };
                  generateMapUrl(processedImage, visParams);
                });
              } else {
              console.log(
                "Bounding Geometry:",
                JSON.stringify(clientBoundingGeometry, null, 2)
              );

              const stats = processedImage.reduceRegion({
                reducer: ee.Reducer.minMax(),
                geometry: ee.Geometry(clientBoundingGeometry),
                scale: scale,
                maxPixels: 1e9,
              });
              stats.evaluate(function (statsDict) {
                if (!statsDict) {
                  console.error("stats dict is null or undefined");
                  return res
                    .status(500)
                    .json({ message: "stats dict is null or undefined" });
                }
                console.log(
                  "States dictionary",
                  JSON.stringify(statsDict, null, 2)
                );
                const min = statsDict[`${bands[0]}_min`];
                const max = statsDict[`${bands[0]}_max`];
                console.log("min:", min);
                console.log("max", max);
                const visParams = {
                  min: min,
                  max: max,
                  bands: bands,
                  palette: ["blue", "cyan", "green", "yellow", "red"],
                };
                generateMapUrl(processedImage, visParams);
              });
            }
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
}
