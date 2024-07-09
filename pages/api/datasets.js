import { describe } from "node:test";

  const datasets = [
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/UCSB-CHG_CHIRPS_DAILY#terms-of-use",
      end_date: "2024-05-31",
      endyear: "2024",
      id: "UCSB-CHG/CHIRPS/DAILY",
      provider: "UCSB/CHG",
      start_date: "1981-01-01",
      startyear: "1981",
      tags: "chg, climate, geophysical, precipitation, ucsb, weather",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/UCSB-CHG/UCSB-CHG_CHIRPS_DAILY_sample.png",
      title:
        "CHIRPS Daily: Climate Hazards Group InfraRed Precipitation With Station Data (Version 2.0 Final)",
      type: "image_collection",
      bands: [
        {
          id: "precipitation",
          pixel_size: 5566,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/UCSB-CHG_CHIRPS_PENTAD#terms-of-use",
      end_date: "2024-05-26",
      endyear: "2024",
      id: "UCSB-CHG/CHIRPS/PENTAD",
      provider: "UCSB/CHG",
      start_date: "1981-01-01",
      startyear: "1981",
      tags: "chg, climate, geophysical, precipitation, ucsb, weather",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/UCSB-CHG/UCSB-CHG_CHIRPS_PENTAD_sample.png",
      title:
        "CHIRPS Pentad: Climate Hazards Group InfraRed Precipitation With Station Data (Version 2.0 Final)",
      type: "image_collection",
      bands: [
        {
          id: "precipitation",
          pixel_size: 5566,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/NOAA_CFSV2_FOR6H#terms-of-use",
      end_date: "2024-06-29",
      endyear: "2024",
      id: "NOAA/CFSV2/FOR6H",
      provider: "NOAA NWS National Centers for Environmental Prediction (NCEP)",
      start_date: "1979-01-01",
      startyear: "1979",
      tags: "climate, daylight, flux, forecast, geophysical, ncep, noaa, nws, precipitation, radiation, snow, temperature, vapor, water, weather",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/NOAA/NOAA_CFSV2_FOR6H_sample.png",
      title: "CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products",
      type: "image_collection",
      bands: [
        {
          id: "Downward_Long-Wave_Radp_Flux_surface_6_Hour_Average",
          pixel_size: 34771,
        },
        {
          id: "Downward_Short-Wave_Radiation_Flux_surface_6_Hour_Average",
          pixel_size: 34771,
        },
        {
          id: "Geopotential_height_surface",
          pixel_size: 34771,
        },
        {
          id: "Latent_heat_net_flux_surface_6_Hour_Average",
          pixel_size: 34771,
        },
        {
          id: "Maximum_specific_humidity_at_2m_height_above_ground_6_Hour_Interval",
          pixel_size: 34771,
        },
        {
          id: "Maximum_temperature_height_above_ground_6_Hour_Interval",
          pixel_size: 34771,
        },
        {
          id: "Minimum_specific_humidity_at_2m_height_above_ground_6_Hour_Interval",
          pixel_size: 34771,
        },
        {
          id: "Minimum_temperature_height_above_ground_6_Hour_Interval",
          pixel_size: 34771,
        },
        {
          id: "Potential_Evaporation_Rate_surface_6_Hour_Average",
          pixel_size: 34771,
        },
        {
          id: "Precipitation_rate_surface_6_Hour_Average",
          pixel_size: 34771,
        },
        {
          id: "Pressure_surface",
          pixel_size: 34771,
        },
        {
          id: "Sensible_heat_net_flux_surface_6_Hour_Average",
          pixel_size: 34771,
        },
        {
          id: "Specific_humidity_height_above_ground",
          pixel_size: 34771,
        },
        {
          id: "Temperature_height_above_ground",
          pixel_size: 34771,
        },
        {
          id: "u-component_of_wind_height_above_ground",
          pixel_size: 34771,
        },
        {
          id: "Upward_Long-Wave_Radp_Flux_surface_6_Hour_Average",
          pixel_size: 34771,
        },
        {
          id: "Upward_Short-Wave_Radiation_Flux_surface_6_Hour_Average",
          pixel_size: 34771,
        },
        {
          id: "v-component_of_wind_height_above_ground",
          pixel_size: 34771,
        },
        {
          id: "Volumetric_Soil_Moisture_Content_depth_below_surface_layer_5_cm",
          pixel_size: 34771,
        },
        {
          id: "Volumetric_Soil_Moisture_Content_depth_below_surface_layer_25_cm",
          pixel_size: 34771,
        },
        {
          id: "Volumetric_Soil_Moisture_Content_depth_below_surface_layer_70_cm",
          pixel_size: 34771,
        },
        {
          id: "Volumetric_Soil_Moisture_Content_depth_below_surface_layer_150_cm",
          pixel_size: 34771,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/NASA_ORNL_DAYMET_V4#terms-of-use",
      end_date: "2023-12-31",
      endyear: "2023",
      id: "NASA/ORNL/DAYMET_V4",
      provider: "NASA ORNL DAAC at Oak Ridge National Laboratory",
      start_date: "1980-01-01",
      startyear: "1980",
      tags: "climate, daily, daylight, daymet, flux, geophysical, nasa, ornl, precipitation, radiation, snow, temperature, vapor, water, weather",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/NASA/NASA_ORNL_DAYMET_V4_sample.png",
      title: "Daymet V4: Daily Surface Weather and Climatological Summaries",
      type: "image_collection",
      bands: [
        {
          id: "dayl",
          pixel_size: 1000,
        },
        {
          id: "prcp",
          pixel_size: 1000,
        },
        {
          id: "srad",
          pixel_size: 1000,
        },
        {
          id: "swe",
          pixel_size: 1000,
        },
        {
          id: "tmax",
          pixel_size: 1000,
        },
        {
          id: "tmin",
          pixel_size: 1000,
        },
        {
          id: "vp",
          pixel_size: 1000,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/ECMWF_ERA5_DAILY#terms-of-use",
      end_date: "2020-07-09",
      endyear: "2020",
      id: "ECMWF/ERA5/DAILY",
      provider: "ECMWF / Copernicus Climate Change Service",
      start_date: "1979-01-02",
      startyear: "1979",
      tags: "climate, copernicus, dewpoint, ecmwf, era5, precipitation, pressure, reanalysis, surface, temperature, wind",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/ECMWF/ECMWF_ERA5_DAILY_sample.png",
      title:
        "ERA5 Daily Aggregates - Latest Climate Reanalysis Produced by ECMWF / Copernicus Climate Change Service",
      type: "image_collection",
      bands: [
        {
          id: "mean_2m_air_temperature",
          pixel_size: 27830,
        },
        {
          id: "minimum_2m_air_temperature",
          pixel_size: 27830,
        },
        {
          id: "maximum_2m_air_temperature",
          pixel_size: 27830,
        },
        {
          id: "dewpoint_2m_temperature",
          pixel_size: 27830,
        },
        {
          id: "total_precipitation",
          pixel_size: 27830,
        },
        {
          id: "surface_pressure",
          pixel_size: 27830,
        },
        {
          id: "mean_sea_level_pressure",
          pixel_size: 27830,
        },
        {
          id: "u_component_of_wind_10m",
          pixel_size: 27830,
        },
        {
          id: "v_component_of_wind_10m",
          pixel_size: 27830,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/NASA_FLDAS_NOAH01_C_GL_M_V001#terms-of-use",
      end_date: "2024-04-01",
      endyear: "2024",
      id: "NASA/FLDAS/NOAH01/C/GL/M/V001",
      provider: "NASA GES DISC at NASA Goddard Space Flight Center",
      start_date: "1982-01-01",
      startyear: "1982",
      tags: "climate, evapotranspiration, famine, fldas, humidity, ldas, monthly, nasa, runoff, snow, soil_moisture, soil_temperature, temperature, wind",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/NASA/NASA_FLDAS_NOAH01_C_GL_M_V001_sample.png",
      title:
        "FLDAS: Famine Early Warning Systems Network (FEWS NET) Land Data Assimilation System",
      type: "image_collection",
      bands: [
        {
          id: "Evap_tavg",
          pixel_size: 11132,
        },
        {
          id: "LWdown_f_tavg",
          pixel_size: 11132,
        },
        {
          id: "Lwnet_tavg",
          pixel_size: 11132,
        },
        {
          id: "Psurf_f_tavg",
          pixel_size: 11132,
        },
        {
          id: "Qair_f_tavg",
          pixel_size: 11132,
        },
        {
          id: "Qg_tavg",
          pixel_size: 11132,
        },
        {
          id: "Qh_tavg",
          pixel_size: 11132,
        },
        {
          id: "Qle_tavg",
          pixel_size: 11132,
        },
        {
          id: "Qs_tavg",
          pixel_size: 11132,
        },
        {
          id: "Qsb_tavg",
          pixel_size: 11132,
        },
        {
          id: "RadT_tavg",
          pixel_size: 11132,
        },
        {
          id: "Rainf_f_tavg",
          pixel_size: 11132,
        },
        {
          id: "SnowCover_inst",
          pixel_size: 11132,
        },
        {
          id: "SnowDepth_inst",
          pixel_size: 11132,
        },
        {
          id: "Snowf_tavg",
          pixel_size: 11132,
        },
        {
          id: "SoilMoi00_10cm_tavg",
          pixel_size: 11132,
        },
        {
          id: "SoilMoi10_40cm_tavg",
          pixel_size: 11132,
        },
        {
          id: "SoilMoi40_100cm_tavg",
          pixel_size: 11132,
        },
        {
          id: "SoilMoi100_200cm_tavg",
          pixel_size: 11132,
        },
        {
          id: "SoilTemp00_10cm_tavg",
          pixel_size: 11132,
        },
        {
          id: "SoilTemp10_40cm_tavg",
          pixel_size: 11132,
        },
        {
          id: "SoilTemp40_100cm_tavg",
          pixel_size: 11132,
        },
        {
          id: "SoilTemp100_200cm_tavg",
          pixel_size: 11132,
        },
        {
          id: "SWdown_f_tavg",
          pixel_size: 11132,
        },
        {
          id: "SWE_inst",
          pixel_size: 11132,
        },
        {
          id: "Swnet_tavg",
          pixel_size: 11132,
        },
        {
          id: "Tair_f_tavg",
          pixel_size: 11132,
        },
        {
          id: "Wind_f_tavg",
          pixel_size: 11132,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/NASA_GLDAS_V021_NOAH_G025_T3H#terms-of-use",
      end_date: "2024-06-19",
      endyear: "2024",
      id: "NASA/GLDAS/V021/NOAH/G025/T3H",
      provider: "NASA GES DISC at NASA Goddard Space Flight Center",
      start_date: "2000-01-01",
      startyear: "2000",
      tags: "3_hourly, climate, evaporation, forcing, geophysical, gldas, humidity, ldas, nasa, precipitation, pressure, radiation, soil, soil_moisture, surface, temperature, wind",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/NASA/NASA_GLDAS_V021_NOAH_G025_T3H_sample.png",
      title: "GLDAS-2.1: Global Land Data Assimilation System",
      type: "image_collection",
      bands: [
        {
          id: "Albedo_inst",
          pixel_size: 27830,
        },
        {
          id: "AvgSurfT_inst",
          pixel_size: 27830,
        },
        {
          id: "CanopInt_inst",
          pixel_size: 27830,
        },
        {
          id: "ECanop_tavg",
          pixel_size: 27830,
        },
        {
          id: "ESoil_tavg",
          pixel_size: 27830,
        },
        {
          id: "Evap_tavg",
          pixel_size: 27830,
        },
        {
          id: "LWdown_f_tavg",
          pixel_size: 27830,
        },
        {
          id: "Lwnet_tavg",
          pixel_size: 27830,
        },
        {
          id: "PotEvap_tavg",
          pixel_size: 27830,
        },
        {
          id: "Psurf_f_inst",
          pixel_size: 27830,
        },
        {
          id: "Qair_f_inst",
          pixel_size: 27830,
        },
        {
          id: "Qg_tavg",
          pixel_size: 27830,
        },
        {
          id: "Qh_tavg",
          pixel_size: 27830,
        },
        {
          id: "Qle_tavg",
          pixel_size: 27830,
        },
        {
          id: "Qs_acc",
          pixel_size: 27830,
        },
        {
          id: "Qsb_acc",
          pixel_size: 27830,
        },
        {
          id: "Qsm_acc",
          pixel_size: 27830,
        },
        {
          id: "Rainf_f_tavg",
          pixel_size: 27830,
        },
        {
          id: "Rainf_tavg",
          pixel_size: 27830,
        },
        {
          id: "RootMoist_inst",
          pixel_size: 27830,
        },
        {
          id: "SWE_inst",
          pixel_size: 27830,
        },
        {
          id: "SWdown_f_tavg",
          pixel_size: 27830,
        },
        {
          id: "SnowDepth_inst",
          pixel_size: 27830,
        },
        {
          id: "Snowf_tavg",
          pixel_size: 27830,
        },
        {
          id: "SoilMoi0_10cm_inst",
          pixel_size: 27830,
        },
        {
          id: "SoilMoi100_200cm_inst",
          pixel_size: 27830,
        },
        {
          id: "SoilMoi10_40cm_inst",
          pixel_size: 27830,
        },
        {
          id: "SoilMoi40_100cm_inst",
          pixel_size: 27830,
        },
        {
          id: "SoilTMP0_10cm_inst",
          pixel_size: 27830,
        },
        {
          id: "SoilTMP100_200cm_inst",
          pixel_size: 27830,
        },
        {
          id: "SoilTMP10_40cm_inst",
          pixel_size: 27830,
        },
        {
          id: "SoilTMP40_100cm_inst",
          pixel_size: 27830,
        },
        {
          id: "Swnet_tavg",
          pixel_size: 27830,
        },
        {
          id: "Tair_f_inst",
          pixel_size: 27830,
        },
        {
          id: "Tveg_tavg",
          pixel_size: 27830,
        },
        {
          id: "Wind_f_inst",
          pixel_size: 27830,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/IDAHO_EPSCOR_GRIDMET#terms-of-use",
      end_date: "2024-06-27",
      endyear: "2024",
      id: "IDAHO_EPSCOR/GRIDMET",
      provider: "University of California Merced",
      start_date: "1979-01-01",
      startyear: "1979",
      tags: "climate, fireburning, gridmet, humidity, merced, metdata, nfdrs, precipitation, radiation, temperature, wind",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/IDAHO_EPSCOR/IDAHO_EPSCOR_GRIDMET_sample.png",
      title:
        "GRIDMET: University of Idaho Gridded Surface Meteorological Dataset",
      type: "image_collection",
      bands: [
        {
          id: "pr",
          pixel_size: 4638,
        },
        {
          id: "rmax",
          pixel_size: 4638,
        },
        {
          id: "rmin",
          pixel_size: 4638,
        },
        {
          id: "sph",
          pixel_size: 4638,
        },
        {
          id: "srad",
          "`pixel_size": 4638,
        },
        {
          id: "th",
          pixel_size: 4638,
        },
        {
          id: "tmmn",
          pixel_size: 4638,
        },
        {
          id: "tmmx",
          pixel_size: 4638,
        },
        {
          id: "vs",
          pixel_size: 4638,
        },
        {
          id: "erc",
          pixel_size: 4638,
        },
        {
          id: "eto",
          pixel_size: 4638,
        },
        {
          id: "bi",
          pixel_size: 4638,
        },
        {
          id: "fm100",
          pixel_size: 4638,
        },
        {
          id: "fm1000",
          pixel_size: 4638,
        },
        {
          id: "etr",
          pixel_size: 4638,
        },
        {
          id: "vpd",
          pixel_size: 4638,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/GRIDMET_DROUGHT#terms-of-use",
      end_date: "2024-06-23",
      endyear: "2024",
      id: "GRIDMET/DROUGHT",
      provider: "University of California Merced",
      start_date: "1980-01-05",
      startyear: "1980",
      tags: "climate, climatic_water_balance, conus, crop, drought, eddi, evapotranspiration, geophysical, gridmet, merced, metdata, palmer, pdsi, precipitation, spei, spi",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/GRIDMET/GRIDMET_DROUGHT_sample.png",
      title: "GRIDMET DROUGHT: CONUS Drought Indices",
      type: "image_collection",
      bands: [
        {
          id: "pdsi",
          pixel_size: 4638,
        },
        {
          id: "z",
          pixel_size: 4638,
        },
        {
          id: "eddi14d",
          pixel_size: 4638,
        },
        {
          id: "eddi30d",
          pixel_size: 4638,
        },
        {
          id: "eddi90d",
          pixel_size: 4638,
        },
        {
          id: "eddi180d",
          pixel_size: 4638,
        },
        {
          id: "eddi270d",
          pixel_size: 4638,
        },
        {
          id: "eddi1y",
          pixel_size: 4638,
        },
        {
          id: "eddi2y",
          pixel_size: 4638,
        },
        {
          id: "eddi5y",
          pixel_size: 4638,
        },
        {
          id: "spi14d",
          pixel_size: 4638,
        },
        {
          id: "spi30d",
          pixel_size: 4638,
        },
        {
          id: "spi90d",
          pixel_size: 4638,
        },
        {
          id: "spi180d",
          pixel_size: 4638,
        },
        {
          id: "spi270d",
          pixel_size: 4638,
        },
        {
          id: "spi1y",
          pixel_size: 4638,
        },
        {
          id: "spi2y",
          pixel_size: 4638,
        },
        {
          id: "spi5y",
          pixel_size: 4638,
        },
        {
          id: "spei14d",
          pixel_size: 4638,
        },
        {
          id: "spei30d",
          pixel_size: 4638,
        },
        {
          id: "spei90d",
          pixel_size: 4638,
        },
        {
          id: "spei180d",
          pixel_size: 4638,
        },
        {
          id: "spei270d",
          pixel_size: 4638,
        },
        {
          id: "spei1y",
          pixel_size: 4638,
        },
        {
          id: "spei2y",
          pixel_size: 4638,
        },
        {
          id: "spei5y",
          pixel_size: 4638,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LT05_C02_T1_TOA#terms-of-use",
      end_date: "2011-11-08",
      endyear: "2011",
      id: "LANDSAT/LT05/C02/T1_TOA",
      provider: "USGS/Google",
      start_date: "1984-04-19",
      startyear: "1984",
      tags: "global, landsat, toa, usgs",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/LANDSAT/LANDSAT_LT05_C02_T1_TOA_sample.png",
      title: "USGS Landsat 5 TM Collection 2 Tier 1 TOA Reflectance",
      type: "image_collection",
      bands: [
        {
          id: "NDVI"
        },
        {
          id: "B1",
          pixel_size: 30,
        },
        {
          id: "B2",
          pixel_size: 30,
        },
        {
          id: "B3",
          description: "Red",
          pixel_size: 30,
        },
        {
          id: "B4",
          description: "NIR",
          pixel_size: 30,
        },
        {
          id: "B5",
          pixel_size: 30,
        },
        {
          id: "B6",
          pixel_size: 30,
        },
        {
          id: "B7",
          pixel_size: 30,
        },
        {
          id: "QA_PIXEL",
          pixel_size: 30,
        },
        {
          id: "QA_RADSAT",
          pixel_size: 30,
        },
        {
          id: "SAA",
          pixel_size: 30,
        },
        {
          id: "SZA",
          pixel_size: 30,
        },
        {
          id: "VAA",
          pixel_size: 30,
        },
        {
          id: "VZA",
          pixel_size: 30,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LE07_C02_T1_TOA#terms-of-use",
      end_date: "2024-01-19",
      endyear: "2024",
      id: "LANDSAT/LE07/C02/T1_TOA",
      provider: "USGS/Google",
      start_date: "1999-05-28",
      startyear: "1999",
      tags: "c2, global, landsat, toa, usgs",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/LANDSAT/LANDSAT_LE07_C02_T1_TOA_sample.png",
      title: "USGS Landsat 7 Collection 2 Tier 1 TOA Reflectance",
      type: "image_collection",
      bands: [
        {
          id: "NDVI"
        },
        {
          id: "B1",
          pixel_size: 30,
        },
        {
          id: "B2",
          pixel_size: 30,
        },
        {
          id: "B3",
          pixel_size: 30,
          description: "Red",
        },
        {
          id: "B4",
          pixel_size: 30,
          description: "NIR",
        },
        {
          id: "B5",
          pixel_size: 30,
        },
        {
          id: "B6_VCID_1",
          pixel_size: 30,
        },
        {
          id: "B6_VCID_2",
          pixel_size: 30,
        },
        {
          id: "B7",
          pixel_size: 30,
        },
        {
          id: "B8",
          pixel_size: 15,
        },
        {
          id: "QA_PIXEL",
          pixel_size: 30,
        },
        {
          id: "QA_RADSAT",
          pixel_size: 30,
        },
        {
          id: "saa",
          pixel_size: 30,
        },
        {
          id: "sza",
          pixel_size: 30,
        },
        {
          id: "vaa",
          pixel_size: 30,
        },
        {
          id: "vza",
          pixel_size: 30,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC08_C02_T1_TOA#terms-of-use",
      end_date: "2024-07-01",
      endyear: "2024",
      id: "LANDSAT/LC08/C02/T1_TOA",
      provider: "USGS/Google",
      start_date: "2013-03-18",
      startyear: "2013",
      tags: "c2, global, l8, landsat, lc8, toa, usgs",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/LANDSAT/LANDSAT_LC08_C02_T1_TOA_sample.png",
      title:
        "USGS Landsat 8 Collection 2 Tier 1 TOA Reflectance",
      type: "image_collection",
      bands: [
        {
          id: "NDVI"
        },
        {
          id: "B1",
          pixel_size: 30,
        },
        {
          id: "B2",
          pixel_size: 30,
        },
        {
          id: "B3",
          pixel_size: 30,
        },
        {
          id: "B4",
          pixel_size: 30,
          description: "Red",
        },
        {
          id: "B5",
          pixel_size: 30,
          description: "NIR",
        },
        {
          id: "B6",
          pixel_size: 30,
        },
        {
          id: "B7",
          pixel_size: 30,
        },
        {
          id: "B8",
          pixel_size: 15,
        },
        {
          id: "B9",
          pixel_size: 30,
        },
        {
          id: "B10",
          pixel_size: 30,
        },
        {
          id: "B11",
          pixel_size: 30,
        },
        {
          id: "QA_PIXEL",
          pixel_size: 30,
        },
        {
          id: "QA_RADSAT",
          pixel_size: 30,
        },
        {
          id: "SAA",
          pixel_size: 30,
        },
        {
          id: "SZA",
          pixel_size: 30,
        },
        {
          id: "VAA",
          pixel_size: 30,
        },
        {
          id: "VZA",
          pixel_size: 30,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC09_C02_T1_TOA#terms-of-use",
      end_date: "2024-06-28",
      endyear: "2024",
      id: "LANDSAT/LC09/C02/T1_TOA",
      provider: "USGS/Google",
      start_date: "2021-10-31",
      startyear: "2021",
      tags: "c2, global, landsat, toa, usgs",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/LANDSAT/LANDSAT_LC09_C02_T1_TOA_sample.png",
      title: "USGS Landsat 9 Collection 2 Tier 1 TOA Reflectance",
      type: "image_collection",
      bands: [
        {
          id: "NDVI"
        },
        {
          id: "B1",
          pixel_size: 30,
        },
        {
          id: "B2",
          pixel_size: 30,
        },
        {
          id: "B3",
          pixel_size: 30,
        },
        {
          id: "B4",
          pixel_size: 30,
                    description: "Red"
        },
        {
          id: "B5",
          pixel_size: 30,
                    description: "NIR"
        },
        {
          id: "B6",
          pixel_size: 30,
        },
        {
          id: "B7",
          pixel_size: 30,
        },
        {
          id: "B8",
          pixel_size: 15,
        },
        {
          id: "B9",
          pixel_size: 30,
        },
        {
          id: "B10",
          pixel_size: 30,
        },
        {
          id: "B11",
          pixel_size: 30,
        },
        {
          id: "QA_PIXEL",
          pixel_size: 30,
        },
        {
          id: "QA_RADSAT",
          pixel_size: 30,
        },
        {
          id: "SAA",
          pixel_size: 30,
        },
        {
          id: "SZA",
          pixel_size: 30,
        },
        {
          id: "VAA",
          pixel_size: 30,
        },
        {
          id: "VZA",
          pixel_size: 30,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LT05_C02_T1_L2#terms-of-use",
      end_date: "2012-05-05",
      endyear: "2012",
      id: "LANDSAT/LT05/C02/T1_L2",
      provider: "USGS",
      start_date: "1984-03-16",
      startyear: "1984",
      tags: "cfmask, cloud, fmask, global, landsat, lasrc, lst, lt05, reflectance, sr, tm, usgs",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/LANDSAT/LANDSAT_LT05_C02_T1_L2_sample.png",
      title: "USGS Landsat 5 Level 2, Collection 2, Tier 1",
      type: "image_collection",
      bands: [
        {
          id: "SR_B1",
          pixel_size: 30,
        },
        {
          id: "SR_B2",
          pixel_size: 30,
        },
        {
          id: "SR_B3",
          pixel_size: 30,
        },
        {
          id: "SR_B4",
          pixel_size: 30,
        },
        {
          id: "SR_B5",
          pixel_size: 30,
        },
        {
          id: "SR_B7",
          pixel_size: 30,
        },
        {
          id: "SR_ATMOS_OPACITY",
          pixel_size: 30,
        },
        {
          id: "SR_CLOUD_QA",
          pixel_size: 30,
        },
        {
          id: "ST_B6",
          pixel_size: 30,
        },
        {
          id: "ST_ATRAN",
          pixel_size: 30,
        },
        {
          id: "ST_CDIST",
          pixel_size: 30,
        },
        {
          id: "ST_DRAD",
          pixel_size: 30,
        },
        {
          id: "ST_EMIS",
          pixel_size: 30,
        },
        {
          id: "ST_EMSD",
          pixel_size: 30,
        },
        {
          id: "ST_QA",
          pixel_size: 30,
        },
        {
          id: "ST_TRAD",
          pixel_size: 30,
        },
        {
          id: "ST_URAD",
          pixel_size: 30,
        },
        {
          id: "QA_PIXEL",
          pixel_size: 30,
        },
        {
          id: "QA_RADSAT",
          pixel_size: 30,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LE07_C02_T1_L2#terms-of-use",
      end_date: "2024-01-19",
      endyear: "2024",
      id: "LANDSAT/LE07/C02/T1_L2",
      provider: "USGS",
      start_date: "1999-05-28",
      startyear: "1999",
      tags: "cfmask, cloud, etm, fmask, global, landsat, lasrc, le07, lst, reflectance, sr, usgs",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/LANDSAT/LANDSAT_LE07_C02_T1_L2_sample.png",
      title: "USGS Landsat 7 Level 2, Collection 2, Tier 1",
      type: "image_collection",
      bands: [
        {
          id: "SR_B1",
          pixel_size: 30,
        },
        {
          id: "SR_B2",
          pixel_size: 30,
        },
        {
          id: "SR_B3",
          pixel_size: 30,
        },
        {
          id: "SR_B4",
          pixel_size: 30,
        },
        {
          id: "SR_B5",
          pixel_size: 30,
        },
        {
          id: "SR_B7",
          pixel_size: 30,
        },
        {
          id: "SR_ATMOS_OPACITY",
          pixel_size: 30,
        },
        {
          id: "SR_CLOUD_QA",
          pixel_size: 30,
        },
        {
          id: "ST_B6",
          pixel_size: 30,
        },
        {
          id: "ST_ATRAN",
          pixel_size: 30,
        },
        {
          id: "ST_CDIST",
          pixel_size: 30,
        },
        {
          id: "ST_DRAD",
          pixel_size: 30,
        },
        {
          id: "ST_EMIS",
          pixel_size: 30,
        },
        {
          id: "ST_EMSD",
          pixel_size: 30,
        },
        {
          id: "ST_QA",
          pixel_size: 30,
        },
        {
          id: "ST_TRAD",
          pixel_size: 30,
        },
        {
          id: "ST_URAD",
          pixel_size: 30,
        },
        {
          id: "QA_PIXEL",
          pixel_size: 30,
        },
        {
          id: "QA_RADSAT",
          pixel_size: 30,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC08_C02_T1_L2#terms-of-use",
      end_date: "2024-06-15",
      endyear: "2024",
      id: "LANDSAT/LC08/C02/T1_L2",
      provider: "USGS",
      start_date: "2013-03-18",
      startyear: "2013",
      tags: "cfmask, cloud, fmask, global, l8sr, landsat, lasrc, lc08, lst, reflectance, sr, usgs",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/LANDSAT/LANDSAT_LC08_C02_T1_L2_sample.png",
      title: "USGS Landsat 8 Level 2, Collection 2, Tier 1",
      type: "image_collection",
      bands: [
        {
          id: "SR_B1",
          pixel_size: 30,
        },
        {
          id: "SR_B2",
          pixel_size: 30,
        },
        {
          id: "SR_B3",
          pixel_size: 30,
        },
        {
          id: "SR_B4",
          pixel_size: 30,
        },
        {
          id: "SR_B5",
          pixel_size: 30,
        },
        {
          id: "SR_B6",
          pixel_size: 30,
        },
        {
          id: "SR_B7",
          pixel_size: 30,
        },
        {
          id: "SR_QA_AEROSOL",
          pixel_size: 30,
        },
        {
          id: "ST_B10",
          pixel_size: 30,
        },
        {
          id: "ST_ATRAN",
          pixel_size: 30,
        },
        {
          id: "ST_CDIST",
          pixel_size: 30,
        },
        {
          id: "ST_DRAD",
          pixel_size: 30,
        },
        {
          id: "ST_EMIS",
          pixel_size: 30,
        },
        {
          id: "ST_EMSD",
          pixel_size: 30,
        },
        {
          id: "ST_QA",
          pixel_size: 30,
        },
        {
          id: "ST_TRAD",
          pixel_size: 30,
        },
        {
          id: "ST_URAD",
          pixel_size: 30,
        },
        {
          id: "QA_PIXEL",
          pixel_size: 30,
        },
        {
          id: "QA_RADSAT",
          pixel_size: 30,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC09_C02_T1_L2#terms-of-use",
      end_date: "2024-06-28",
      endyear: "2024",
      id: "LANDSAT/LC09/C02/T1_L2",
      provider: "USGS",
      start_date: "2021-10-31",
      startyear: "2021",
      tags: "cfmask, cloud, fmask, global, l9sr, landsat, lasrc, lc09, lst, reflectance, sr, usgs",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/LANDSAT/LANDSAT_LC09_C02_T1_L2_sample.png",
      title: "USGS Landsat 9 Level 2, Collection 2, Tier 1",
      type: "image_collection",
      bands: [
        {
          id: "SR_B1",
          pixel_size: 30,
        },
        {
          id: "SR_B2",
          pixel_size: 30,
        },
        {
          id: "SR_B3",
          pixel_size: 30,
        },
        {
          id: "SR_B4",
          pixel_size: 30,
        },
        {
          id: "SR_B5",
          pixel_size: 30,
        },
        {
          id: "SR_B6",
          pixel_size: 30,
        },
        {
          id: "SR_B7",
          pixel_size: 30,
        },
        {
          id: "SR_QA_AEROSOL",
          pixel_size: 30,
        },
        {
          id: "ST_B10",
          pixel_size: 30,
        },
        {
          id: "ST_ATRAN",
          pixel_size: 30,
        },
        {
          id: "ST_CDIST",
          pixel_size: 30,
        },
        {
          id: "ST_DRAD",
          pixel_size: 30,
        },
        {
          id: "ST_EMIS",
          pixel_size: 30,
        },
        {
          id: "ST_EMSD",
          pixel_size: 30,
        },
        {
          id: "ST_QA",
          pixel_size: 30,
        },
        {
          id: "ST_TRAD",
          pixel_size: 30,
        },
        {
          id: "ST_URAD",
          pixel_size: 30,
        },
        {
          id: "QA_PIXEL",
          pixel_size: 30,
        },
        {
          id: "QA_RADSAT",
          pixel_size: 30,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD16A2#terms-of-use",
      end_date: "2023-02-02",
      endyear: "2023",
      id: "MODIS/006/MOD16A2",
      provider: "NASA LP DAAC at the USGS EROS Center",
      start_date: "2001-01-01",
      startyear: "2001",
      tags: "8_day, evapotranspiration, global, mod16a2, modis, nasa",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/MODIS/MODIS_006_MOD16A2_sample.png",
      title:
        "MOD16A2.006: Terra Net Evapotranspiration 8-Day Global 500m [deprecated]",
      type: "image_collection",
      bands: [
        {
          id: "ET",
          pixel_size: 463,
        },
        {
          id: "LE",
          pixel_size: 463,
        },
        {
          id: "PET",
          pixel_size: 463,
        },
        {
          id: "PLE",
          pixel_size: 463,
        },
        {
          id: "ET_QC",
          pixel_size: 463,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD64A1#terms-of-use",
      end_date: "2022-12-01",
      endyear: "2022",
      id: "MODIS/006/MCD64A1",
      provider: "NASA LP DAAC at the USGS EROS Center",
      start_date: "2000-11-01",
      startyear: "2000",
      tags: "burn, fire, geophysical, global, mcd64a1, modis, monthly, nasa, usgs",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/MODIS/MODIS_006_MCD64A1_sample.png",
      title: "MCD64A1.006 MODIS Burned Area Monthly Global 500m [deprecated]",
      type: "image_collection",
      bands: [
        {
          id: "BurnDate",
          pixel_size: 463,
        },
        {
          id: "Uncertainty",
          pixel_size: 463,
        },
        {
          id: "QA",
          pixel_size: 463,
        },
        {
          id: "FirstDay",
          pixel_size: 463,
        },
        {
          id: "LastDay",
          pixel_size: 463,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A4#terms-of-use",
      end_date: "2023-02-10",
      endyear: "2023",
      id: "MODIS/006/MCD43A4",
      provider: "NASA LP DAAC at the USGS EROS Center",
      start_date: "2000-02-24",
      startyear: "2000",
      tags: "albedo, brdf, daily, global, modis, nasa, reflectance, usgs",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/MODIS/MODIS_006_MCD43A4_sample.png",
      title:
        "MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated]",
      type: "image_collection",
      bands: [
        {
          id: "Nadir_Reflectance_Band1",
          pixel_size: 463,
        },
        {
          id: "Nadir_Reflectance_Band2",
          pixel_size: 463,
        },
        {
          id: "Nadir_Reflectance_Band3",
          pixel_size: 463,
        },
        {
          id: "Nadir_Reflectance_Band4",
          pixel_size: 463,
        },
        {
          id: "Nadir_Reflectance_Band5",
          pixel_size: 463,
        },
        {
          id: "Nadir_Reflectance_Band6",
          pixel_size: 463,
        },
        {
          id: "Nadir_Reflectance_Band7",
          pixel_size: 463,
        },
        {
          id: "BRDF_Albedo_Band_Mandatory_Quality_Band1",
          pixel_size: 463,
        },
        {
          id: "BRDF_Albedo_Band_Mandatory_Quality_Band2",
          pixel_size: 463,
        },
        {
          id: "BRDF_Albedo_Band_Mandatory_Quality_Band3",
          pixel_size: 463,
        },
        {
          id: "BRDF_Albedo_Band_Mandatory_Quality_Band4",
          pixel_size: 463,
        },
        {
          id: "BRDF_Albedo_Band_Mandatory_Quality_Band5",
          pixel_size: 463,
        },
        {
          id: "BRDF_Albedo_Band_Mandatory_Quality_Band6",
          pixel_size: 463,
        },
        {
          id: "BRDF_Albedo_Band_Mandatory_Quality_Band7",
          pixel_size: 463,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD11A2#terms-of-use",
      end_date: "2023-02-18",
      endyear: "2023",
      id: "MODIS/006/MYD11A2",
      provider: "NASA LP DAAC at the USGS EROS Center",
      start_date: "2002-07-04",
      startyear: "2002",
      tags: "8_day, aqua, emissivity, global, lst, modis, myd11a2, nasa, surface_temperature, usgs",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/MODIS/MODIS_006_MYD11A2_sample.png",
      title:
        "MYD11A2.006 Aqua Land Surface Temperature and Emissivity 8-Day Global 1km [deprecated]",
      type: "image_collection",
      bands: [
        {
          id: "LST_Day_1km",
          pixel_size: 927,
        },
        {
          id: "QC_Day",
          pixel_size: 927,
        },
        {
          id: "Day_view_time",
          pixel_size: 927,
        },
        {
          id: "Day_view_angl",
          pixel_size: 927,
        },
        {
          id: "LST_Night_1km",
          pixel_size: 927,
        },
        {
          id: "QC_Night",
          pixel_size: 927,
        },
        {
          id: "Night_view_time",
          pixel_size: 927,
        },
        {
          id: "Night_view_angl",
          pixel_size: 927,
        },
        {
          id: "Emis_31",
          pixel_size: 927,
        },
        {
          id: "Emis_32",
          pixel_size: 927,
        },
        {
          id: "Clear_sky_days",
          pixel_size: 927,
        },
        {
          id: "Clear_sky_nights",
          pixel_size: 927,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD11A2#terms-of-use",
      end_date: "2022-11-09",
      endyear: "2022",
      id: "MODIS/006/MOD11A2",
      provider: "NASA LP DAAC at the USGS EROS Center",
      start_date: "2000-02-18",
      startyear: "2000",
      tags: "8_day, emissivity, global, lst, mod11a2, modis, nasa, surface_temperature, terra, usgs",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/MODIS/MODIS_006_MOD11A2_sample.png",
      title:
        "MOD11A2.006 Terra Land Surface Temperature and Emissivity 8-Day Global 1km [deprecated]",
      type: "image_collection",
      bands: [
        {
          id: "LST_Day_1km",
          pixel_size: 927,
        },
        {
          id: "QC_Day",
          pixel_size: 927,
        },
        {
          id: "Day_view_time",
          pixel_size: 927,
        },
        {
          id: "Day_view_angl",
          pixel_size: 927,
        },
        {
          id: "LST_Night_1km",
          pixel_size: 927,
        },
        {
          id: "QC_Night",
          pixel_size: 927,
        },
        {
          id: "Night_view_time",
          pixel_size: 927,
        },
        {
          id: "Night_view_angl",
          pixel_size: 927,
        },
        {
          id: "Emis_31",
          pixel_size: 927,
        },
        {
          id: "Emis_32",
          pixel_size: 927,
        },
        {
          id: "Clear_sky_days",
          pixel_size: 927,
        },
        {
          id: "Clear_sky_nights",
          pixel_size: 927,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/NCEP_RE_sea_level_pressure#terms-of-use",
      end_date: "2024-06-26",
      endyear: "2024",
      id: "NCEP_RE/sea_level_pressure",
      provider: "NCEP",
      start_date: "1948-01-01",
      startyear: "1948",
      tags: "atmosphere, climate, geophysical, ncep, noaa, pressure, reanalysis",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/NCEP_RE/NCEP_RE_sea_level_pressure_sample.png",
      title: "NCEP/NCAR Reanalysis Data, Sea-Level Pressure",
      type: "image_collection",
      bands: [
        {
          id: "slp",
          pixel_size: 278299,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/NOAA_PERSIANN-CDR#terms-of-use",
      end_date: "2023-12-31",
      endyear: "2023",
      id: "NOAA/PERSIANN-CDR",
      provider: "NOAA NCDC",
      start_date: "1983-01-01",
      startyear: "1983",
      tags: "cdr, climate, geophysical, ncdc, noaa, persiann, precipitation, weather",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/NOAA/NOAA_PERSIANN-CDR_sample.png",
      title:
        "PERSIANN-CDR: Precipitation Estimation From Remotely Sensed Information Using Artificial Neural Networks-Climate Data Record",
      type: "image_collection",
      bands: [
        {
          id: "precipitation",
          pixel_size: 27830,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_OISST_V2_1#terms-of-use",
      end_date: "2024-06-27",
      endyear: "2024",
      id: "NOAA/CDR/OISST/V2_1",
      provider: "NOAA",
      start_date: "1981-09-01",
      startyear: "1981",
      tags: "avhrr, cdr, daily, ice, noaa, ocean, oisst, real_time, sst, temperature",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/NOAA/NOAA_CDR_OISST_V2_1_sample.png",
      title:
        "NOAA CDR OISST v02r01: Optimum Interpolation Sea Surface Temperature",
      type: "image_collection",
      bands: [
        {
          id: "sst",
          pixel_size: 27830,
        },
        {
          id: "anom",
          pixel_size: 27830,
        },
        {
          id: "ice",
          pixel_size: 27830,
        },
        {
          id: "err",
          pixel_size: 27830,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/CAS_IGSNRR_PML_V2#terms-of-use",
      end_date: "2017-12-27",
      endyear: "2017",
      id: "CAS/IGSNRR/PML/V2",
      provider: "PML_V2",
      start_date: "2002-07-04",
      startyear: "2002",
      tags: "cas, evapotranspiration, gpp, gross_primary_product, igsnrr, pml",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/CAS/CAS_IGSNRR_PML_V2_sample.png",
      title:
        "PML_V2 0.1.4: Coupled Evapotranspiration and Gross Primary Product (GPP) [deprecated]",
      type: "image_collection",
      bands: [
        {
          id: "GPP",
          pixel_size: 463,
        },
        {
          id: "Ec",
          pixel_size: 463,
        },
        {
          id: "Es",
          pixel_size: 463,
        },
        {
          id: "Ei",
          pixel_size: 463,
        },
        {
          id: "ET_water",
          pixel_size: 463,
        },
        {
          id: "qc",
          pixel_size: 463,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/OREGONSTATE_PRISM_AN81d#terms-of-use",
      end_date: "2024-06-27",
      endyear: "2024",
      id: "OREGONSTATE/PRISM/AN81d",
      provider: "PRISM / OREGONSTATE",
      start_date: "1981-01-01",
      startyear: "1981",
      tags: "climate, daily, geophysical, oregonstate, precipitation, pressure, prism, temperature, vapor, weather",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/OREGONSTATE/OREGONSTATE_PRISM_AN81d_sample.png",
      title: "PRISM Daily Spatial Climate Dataset AN81d",
      type: "image_collection",
      bands: [
        {
          id: "ppt",
          pixel_size: 4638,
        },
        {
          id: "tmean",
          pixel_size: 4638,
        },
        {
          id: "tmin",
          pixel_size: 4638,
        },
        {
          id: "tmax",
          pixel_size: 4638,
        },
        {
          id: "tdmean",
          pixel_size: 4638,
        },
        {
          id: "vpdmin",
          pixel_size: 4638,
        },
        {
          id: "vpdmax",
          pixel_size: 4638,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/OREGONSTATE_PRISM_AN81m#terms-of-use",
      end_date: "2024-05-01",
      endyear: "2024",
      id: "OREGONSTATE/PRISM/AN81m",
      provider: "PRISM / OREGONSTATE",
      start_date: "1895-01-01",
      startyear: "1895",
      tags: "climate, geophysical, monthly, oregonstate, precipitation, pressure, prism, temperature, vapor, weather",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/OREGONSTATE/OREGONSTATE_PRISM_AN81m_sample.png",
      title: "PRISM Monthly Spatial Climate Dataset AN81m",
      type: "image_collection",
      bands: [
        {
          id: "ppt",
          pixel_size: 4638,
        },
        {
          id: "tmean",
          pixel_size: 4638,
        },
        {
          id: "tmin",
          pixel_size: 4638,
        },
        {
          id: "tmax",
          pixel_size: 4638,
        },
        {
          id: "tdmean",
          pixel_size: 4638,
        },
        {
          id: "vpdmin",
          pixel_size: 4638,
        },
        {
          id: "vpdmax",
          pixel_size: 4638,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/USGS_NLCD_RELEASES_2023_REL_RCMAP_V6_COVER#terms-of-use",
      end_date: "2023-12-31",
      endyear: "2023",
      id: "USGS/NLCD_RELEASES/2023_REL/RCMAP/V6/COVER",
      provider: "United States Geological Survey and Bureau of Land Management",
      start_date: "1985-01-01",
      startyear: "1985",
      tags: "climate_change, disturbance, landsat_derived, nlcd, rangeland, trends",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/USGS/USGS_NLCD_RELEASES_2023_REL_RCMAP_V6_COVER_sample.png",
      title: "RCMAP Rangeland Component Timeseries (1985-2023), v06",
      type: "image_collection",
      bands: [
        {
          id: "rangeland_annual_herbaceous",
          pixel_size: 30,
        },
        {
          id: "rangeland_bare_ground",
          pixel_size: 30,
        },
        {
          id: "rangeland_non_sagebrush_shrub",
          pixel_size: 30,
        },
        {
          id: "rangeland_herbaceous",
          pixel_size: 30,
        },
        {
          id: "rangeland_litter",
          pixel_size: 30,
        },
        {
          id: "rangeland_sagebrush",
          pixel_size: 30,
        },
        {
          id: "rangeland_shrub",
          pixel_size: 30,
        },
        {
          id: "rangeland_shrub_height",
          pixel_size: 30,
        },
        {
          id: "rangeland_perennial_herbacous",
          pixel_size: 30,
        },
        {
          id: "rangeland_tree",
          pixel_size: 30,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S1_GRD#terms-of-use",
      end_date: "2024-07-04",
      endyear: "2024",
      id: "COPERNICUS/S1_GRD",
      provider: "European Union/ESA/Copernicus",
      start_date: "2014-10-03",
      startyear: "2014",
      tags: "backscatter, copernicus, esa, eu, polarization, radar, sar, sentinel",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/COPERNICUS/COPERNICUS_S1_GRD_sample.png",
      title:
        "Sentinel-1 SAR GRD: C-band Synthetic Aperture Radar Ground Range Detected, log scaling",
      type: "image_collection",
      bands: [
        {
          id: "HH",
          pixel_size: 10,
        },
        {
          id: "HV",
          pixel_size: 10,
        },
        {
          id: "VV",
          pixel_size: 10,
        },
        {
          id: "VH",
          pixel_size: 10,
        },
        {
          id: "angle",
          pixel_size: 2000,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S3_OLCI#terms-of-use",
      end_date: "2024-07-03",
      endyear: "2024",
      id: "COPERNICUS/S3/OLCI",
      provider: "European Union/ESA/Copernicus",
      start_date: "2016-10-18",
      startyear: "2016",
      tags: "copernicus, esa, eu, olci, radiance, sentinel, toa",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/COPERNICUS/COPERNICUS_S3_OLCI_sample.png",
      title:
        "Sentinel-3 OLCI EFR: Ocean and Land Color Instrument Earth Observation Full Resolution",
      type: "image_collection",
      bands: [
        {
          id: "Oa01_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa02_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa03_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa04_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa05_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa06_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa07_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa08_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa09_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa10_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa11_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa12_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa13_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa14_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa15_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa16_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa17_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa18_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa19_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa20_radiance",
          pixel_size: 313,
        },
        {
          id: "Oa21_radiance",
          pixel_size: 313,
        },
        {
          id: "quality_flags",
          pixel_size: 313,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_HARMONIZED#terms-of-use",
      end_date: "2024-07-08",
      endyear: "2024",
      id: "COPERNICUS/S2_HARMONIZED",
      provider: "European Union/ESA/Copernicus",
      start_date: "2015-06-27",
      startyear: "2015",
      tags: "copernicus, esa, eu, msi, radiance, sentinel",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/COPERNICUS/COPERNICUS_S2_HARMONIZED_sample.png",
      title: "Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-1C",
      type: "image_collection",
      bands: [
        {
          id: "NDVI"
        },
        {
          id: "B1",
          pixel_size: 60,
        },
        {
          id: "B2",
          pixel_size: 10,
        },
        {
          id: "B3",
          pixel_size: 10,
        },
        {
          id: "B4",
          pixel_size: 10,
                    description: "Red"
        },
        {
          id: "B5",
          pixel_size: 20,
        },
        {
          id: "B6",
          pixel_size: 20,
        },
        {
          id: "B7",
          pixel_size: 20,
        },
        {
          id: "B8",
          pixel_size: 10,
                    description: "NIR"
        },
        {
          id: "B8A",
          pixel_size: 20,
        },
        {
          id: "B9",
          pixel_size: 60,
        },
        {
          id: "B10",
          pixel_size: 60,
        },
        {
          id: "B11",
          pixel_size: 20,
        },
        {
          id: "B12",
          pixel_size: 20,
        },
        {
          id: "QA10",
          pixel_size: 10,
        },
        {
          id: "QA20",
          pixel_size: 20,
        },
        {
          id: "QA60",
          pixel_size: 60,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_SR_HARMONIZED#terms-of-use",
      end_date: "2024-07-08",
      endyear: "2024",
      id: "COPERNICUS/S2_SR_HARMONIZED",
      provider: "European Union/ESA/Copernicus",
      start_date: "2017-03-28",
      startyear: "2017",
      tags: "copernicus, esa, eu, msi, reflectance, sentinel, sr",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/COPERNICUS/COPERNICUS_S2_SR_HARMONIZED_sample.png",
      title: "Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-2A",
      type: "image_collection",
      bands: [
        {
          id: "NDVI"
        },
        {
          id: "B1",
          pixel_size: 60,
        },
        {
          id: "B2",
          pixel_size: 10,
        },
        {
          id: "B3",
          pixel_size: 10,
        },
        {
          id: "B4",
          pixel_size: 10,
                    description: "Red"
        },
        {
          id: "B5",
          pixel_size: 20,
        },
        {
          id: "B6",
          pixel_size: 20,
        },
        {
          id: "B7",
          pixel_size: 20,
        },
        {
          id: "B8",
          pixel_size: 10,
                    description: "NIR"
        },
        {
          id: "B8A",
          pixel_size: 20,
        },
        {
          id: "B9",
          pixel_size: 60,
        },
        {
          id: "B11",
          pixel_size: 20,
        },
        {
          id: "B12",
          pixel_size: 20,
        },
        {
          id: "AOT",
          pixel_size: 10,
        },
        {
          id: "WVP",
          pixel_size: 10,
        },
        {
          id: "SCL",
          pixel_size: 20,
        },
        {
          id: "TCI_R",
          pixel_size: 10,
        },
        {
          id: "TCI_G",
          pixel_size: 10,
        },
        {
          id: "TCI_B",
          pixel_size: 10,
        },
        {
          id: "MSK_CLDPRB",
          pixel_size: 1,
        },
        {
          id: "MSK_SNWPRB",
          pixel_size: 1,
        },
        {
          id: "QA10",
          pixel_size: 10,
        },
        {
          id: "QA20",
          pixel_size: 20,
        },
        {
          id: "QA60",
          pixel_size: 60,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_OFFL_L3_CH4#terms-of-use",
      end_date: "2024-06-28",
      endyear: "2024",
      id: "COPERNICUS/S5P/OFFL/L3_CH4",
      provider: "European Union/ESA/Copernicus",
      start_date: "2019-02-08",
      startyear: "2019",
      tags: "climate, copernicus, esa, eu, knmi, methane, s5p, sentinel, sron, tropomi",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/COPERNICUS/COPERNICUS_S5P_OFFL_L3_CH4_sample.png",
      title: "Sentinel-5P OFFL CH4: Offline Methane",
      type: "image_collection",
      bands: [
        {
          id: "CH4_column_volume_mixing_ratio_dry_air",
          pixel_size: 1113,
        },
        {
          id: "aerosol_height",
          pixel_size: 1113,
        },
        {
          id: "aerosol_optical_depth",
          pixel_size: 1113,
        },
        {
          id: "sensor_azimuth_angle",
          pixel_size: 1113,
        },
        {
          id: "sensor_zenith_angle",
          pixel_size: 1113,
        },
        {
          id: "solar_azimuth_angle",
          pixel_size: 1113,
        },
        {
          id: "solar_zenith_angle",
          pixel_size: 1113,
        },
        {
          id: "CH4_column_volume_mixing_ratio_dry_air_bias_corrected",
          pixel_size: 1113,
        },
        {
          id: "CH4_column_volume_mixing_ratio_dry_air_uncertainty",
          pixel_size: 1113,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/IDAHO_EPSCOR_TERRACLIMATE#terms-of-use",
      end_date: "2023-12-01",
      endyear: "2023",
      id: "IDAHO_EPSCOR/TERRACLIMATE",
      provider: "University of California Merced",
      start_date: "1958-01-01",
      startyear: "1958",
      tags: "climate, drought, evapotranspiration, geophysical, global, merced, monthly, palmer, pdsi, precipitation, runoff, temperature, vapor, wind",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/IDAHO_EPSCOR/IDAHO_EPSCOR_TERRACLIMATE_sample.png",
      title:
        "TerraClimate:  Monthly Climate and Climatic Water Balance for Global Terrestrial Surfaces, University of Idaho",
      type: "image_collection",
      region: "global",
      bands: [
        {
          id: "aet",
          pixel_size: 4638,
        },
        {
          id: "def",
          pixel_size: 4638,
        },
        {
          id: "pdsi",
          pixel_size: 4638,
        },
        {
          id: "pet",
          pixel_size: 4638,
        },
        {
          id: "pr",
          pixel_size: 4638,
        },
        {
          id: "ro",
          pixel_size: 4638,
        },
        {
          id: "soil",
          pixel_size: 4638,
        },
        {
          id: "srad",
          pixel_size: 4638,
        },
        {
          id: "swe",
          pixel_size: 4638,
        },
        {
          id: "tmmn",
          pixel_size: 4638,
        },
        {
          id: "tmmx",
          pixel_size: 4638,
        },
        {
          id: "vap",
          pixel_size: 4638,
        },
        {
          id: "vpd",
          pixel_size: 4638,
        },
        {
          id: "vs",
          pixel_size: 4638,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/TRMM_3B42#terms-of-use",
      end_date: "2019-12-31",
      endyear: "2019",
      id: "TRMM/3B42",
      provider: "NASA GES DISC at NASA Goddard Space Flight Center",
      start_date: "1998-01-01",
      startyear: "1998",
      tags: "3_hourly, climate, geophysical, jaxa, nasa, precipitation, rainfall, trmm, weather",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/TRMM/TRMM_3B42_sample.png",
      title: "TRMM 3B42: 3-Hourly Precipitation Estimates",
      type: "image_collection",
      bands: [
        {
          id: "precipitation",
          pixel_size: 27830,
        },
        {
          id: "relativeError",
          pixel_size: 27830,
        },
        {
          id: "satPrecipitationSource",
          pixel_size: 27830,
        },
        {
          id: "HQprecipitation",
          pixel_size: 27830,
        },
        {
          id: "IRprecipitation",
          pixel_size: 27830,
        },
        {
          id: "satObservationTime",
          pixel_size: 27830,
        },
      ],
    },
    {
      asset_url:
        "https://developers.google.com/earth-engine/datasets/catalog/USGS_NLCD_RELEASES_2021_REL_TCC_v2021-4#terms-of-use",
      end_date: "2021-09-30",
      endyear: "2021",
      id: "USGS/NLCD_RELEASES/2021_REL/TCC/v2021-4",
      provider:
        "USDA Forest Service (USFS) Geospatial Technology and Applications Center (GTAC)",
      start_date: "2008-06-01",
      startyear: "2008",
      tags: "forest, gtac, landsat_derived, redcastle_resources, sentinel, sentinel2_derived, time_series, usda, usfs, usgs",
      thumbnail_url:
        "https://developers.google.com/earth-engine/datasets/images/USGS/USGS_NLCD_RELEASES_2021_REL_TCC_v2021-4_sample.png",
      title: "USFS Tree Canopy Cover v2021-4 (CONUS and OCONUS)",
      type: "image_collection",
      bands: [
        {
          id: "Science_Percent_Tree_Canopy_Cover",
          pixel_size: 30,
        },
        {
          id: "Science_Percent_Tree_Canopy_Cover_Standard_Error",
          pixel_size: 30,
        },
        {
          id: "NLCD_Percent_Tree_Canopy_Cover",
          pixel_size: 30,
        },
        {
          id: "data_mask",
          pixel_size: 30,
        },
      ],
    },
    {
      end_date: "present",
      endyear: "present",
      id: "projects/climate-engine-pro/assets/public/acis-nrcc-nn/daily",
      provider: "Applied Climate Information System (ACIS)",
      start_date: "1951-01-01",
      startyear: "1951",
      tags: "daily precipitation, climate data, ACIS, NRCC, NN",
      thumbnail_url: "https://www.rcc-acis.org/assets/img/ACIS-Maps-sm.png",
      title: "ACIS NRCC NN Daily Precipitation",
      type: "image_collection",
      bands: [
        {
          id: "tmax",
          pixel_size: 5000,
        },
        {
          id: "tmin",
          pixel_size: 5000,
        },
        {
          id: "precip",
          pixel_size: 5000,
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2015-12-31",
      endyear: "2015",
      id: "projects/climate-engine-pro/assets/ce-anusplin-daily",
      provider: "Agriculture and Agri-Food Canada",
      start_date: "1950-01-01",
      startyear: "1950",
      tags: "daily climate data, ANUSPLIN, Canada, precipitation, temperature",
      thumbnail_url:
        "https://d33v4339jhl8k0.cloudfront.net/docs/assets/637d3085483e942ba866b26e/images/641b6e1d50f28e43c4c5c81a/file-87U6XzSmw4.png",
      title: "ANUSPLIN Gridded Climate Dataset for Canada (Daily)",
      type: "image_collection",
      bands: [
        {
          id: "maxt",
          pixel_size: 10000,
        },
        {
          id: "mint",
          pixel_size: 10000,
        },
        {
          id: "pcp",
          pixel_size: 10000,
        },
      ],
    },
    {
      end_date: "2015-12-31",
      endyear: "2015",
      id: "projects/climate-engine-pro/assets/cfe-anusplin-monthly",
      provider: "Agriculture and Agri-Food Canada",
      start_date: "1950-01-01",
      startyear: "1950",
      tags: "monthly climate data, ANUSPLIN, Canada, precipitation, temperature",
      thumbnail_url:
        "https://d33v4339jhl8k0.cloudfront.net/docs/assets/637d3085483e942ba866b26e/images/641b6e1d50f28e43c4c5c81a/file-87U6XzSmw4.png",
      title: "ANUSPLIN Gridded Climate Dataset for Canada (Monthly)",
      type: "image_collection",
      bands: [
        {
          id: "maxt",
          pixel_size: 10000,
        },
        {
          id: "mint",
          pixel_size: 10000,
        },
        {
          id: "pcp",
          pixel_size: 10000,
        },
      ],
    },
    {
      end_date: "2024-06-01",
      endyear: "2024",
      id: "projects/climate-engine-pro/assets/ce-aafc-cdo-monthly",
      provider: "Agriculture and Agri-Food Canada",
      start_date: "2021-06-01",
      startyear: "2021",
      tags: "monthly drought outlook, Canada, AAFC, climate data",
      thumbnail_url: "",
      title: "Canadian Drought Outlook (Monthly)",
      type: "image_collection",
      bands: [
        {
          id: "drought_outlook_class",
          pixel_size: 800,
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "present",
      endyear: "present",
      id: "projects/climate-engine-pro/assets/ce-cems-fire-daily",
      provider: "Copernicus Emergency Management Service (CEMS)",
      start_date: "2016-01-01",
      startyear: "2016",
      tags: "daily fire danger indices, CEMS, wildfire risk, climate data",
      thumbnail_url:
        "https://d33v4339jhl8k0.cloudfront.net/docs/assets/637d3085483e942ba866b26e/images/641bbbe14627a93f4d0e7776/file-aVS4hgpS6t.png",
      title: "CEMS Fire Danger Indices (Daily)",
      type: "image_collection",
      bands: [
        {
          id: "build_up_index",
          pixel_size: 1000,
        },
        {
          id: "burning_index",
          pixel_size: 1000,
        },
        {
          id: "drought_code",
          pixel_size: 1000,
        },
        {
          id: "drought_factor",
          pixel_size: 1000,
        },
        {
          id: "duff_moisture_code",
          pixel_size: 1000,
        },
        {
          id: "energy_release_component",
          pixel_size: 1000,
        },
        {
          id: "fine_fuel_moisture_code",
          pixel_size: 1000,
        },
        {
          id: "fire_daily_severity_rating",
          pixel_size: 1000,
        },
        {
          id: "fire_danger_index",
          pixel_size: 1000,
        },
        {
          id: "fire_weather_index",
          pixel_size: 1000,
        },
        {
          id: "ignition_component",
          pixel_size: 1000,
        },
        {
          id: "initial_fire_spread_index",
          pixel_size: 1000,
        },
        {
          id: "keetch-byram_drought_index",
          pixel_size: 1000,
        },
        {
          id: "spread_component",
          pixel_size: 1000,
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-21",
      endyear: "2024",
      id: "projects/climate-engine-pro/assets/ce-chirps-prelim-pentad",
      provider: "University of California, Santa Barbara (UCSB)",
      start_date: "2015-01-01",
      startyear: "2015",
      tags: "CHIRPS, precipitation, climate data, UCSB, CHIRPS-Prelim",
      thumbnail_url:
        "https://d33v4339jhl8k0.cloudfront.net/docs/assets/637d3085483e942ba866b26e/images/641b66ff9a0fe82b2d574d87/file-eX7NJf5dIJ.png",
      title:
        "Climate Hazards Group InfraRed Precipitation with Station Data-Prelim (CHIRPS-Prelim Pentad)",
      type: "image_collection",
      bands: [
        {
          id: "precipitation",
          pixel_size: 4800,
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2022-09-29",
      endyear: "2022",
      id: "projects/openet/assets/meteorology/conus404/daily",
      provider:
        "U.S. Geological Survey (USGS) and National Center for Atmospheric Research (NCAR)",
      start_date: "1980-10-01",
      startyear: "1980",
      tags: "CONUS404, hydroclimate, meteorology, USGS, NCAR, reanalysis, climate data",
      thumbnail_url:
        "https://d33v4339jhl8k0.cloudfront.net/docs/assets/637d3085483e942ba866b26e/images/64b8463278d5c33f49241358/file-Ot8B3qLISs.png",
      title: "CONUS404 Daily Hydroclimate Reanalysis",
      type: "image_collection",
      bands: [
        {
          id: "T2_MIN",
          pixel_size: 4000,
        },
        {
          id: "T2_MAX",
          pixel_size: 4000,
        },
        {
          id: "TD2",
          pixel_size: 4000,
        },
        {
          id: "WIND10",
          pixel_size: 4000,
        },
        {
          id: "PSFC",
          pixel_size: 4000,
        },
        {
          id: "ACSWDNB",
          pixel_size: 4000,
        },
        {
          id: "PREC_ACC_NC",
          pixel_size: 4000,
        },
        {
          id: "ETO_ASCE",
          pixel_size: 4000,
        },
        {
          id: "ETR_ASCE",
          pixel_size: 4000,
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-24",
      endyear: "2024",
      id: "projects/climate-engine-pro/assets/ce-ag-era5/daily",
      provider: "",
      start_date: "1979-01-01",
      startyear: "1979",
      tags: "",
      thumbnail_url: "",
      title: "AgERA5 (ECMWF) ",
      type: "image_collection",
      bands: [
        {
          id: "Wind_Speed_10m_Mean",
          pixel_size: "9600",
        },
        {
          id: "Dew_Point_Temperature_2m_Mean",
          pixel_size: "9600",
        },
        {
          id: "Relative_Humidity_2m_06h",
          pixel_size: "9600",
        },
        {
          id: "Relative_Humidity_2m_15h",
          pixel_size: "9600",
        },
        {
          id: "Temperature_Air_2m_Max_24h",
          pixel_size: "9600",
        },
        {
          id: "Temperature_Air_2m_Mean_24h",
          pixel_size: "9600",
        },
        {
          id: "Temperature_Air_2m_Min_24h",
          pixel_size: "9600",
        },
        {
          id: "Temperature_Air_2m_Max_Day_Time",
          pixel_size: "9600",
        },
        {
          id: "Temperature_Air_2m_Mean_Day_Time",
          pixel_size: "9600",
        },
        {
          id: "Temperature_Air_2m_Mean_Night_Time",
          pixel_size: "9600",
        },
        {
          id: "Temperature_Air_2m_Min_Night_Time",
          pixel_size: "9600",
        },
        {
          id: "Cloud_Cover_Mean",
          pixel_size: "9600",
        },
        {
          id: "Precipitation_Rain_Duration_Fraction",
          pixel_size: "9600",
        },
        {
          id: "Precipitation_Flux",
          pixel_size: "9600",
        },
        {
          id: "Snow_Thickness_Mean",
          pixel_size: "9600",
        },
        {
          id: "Snow_Thickness_LWE_Mean",
          pixel_size: "9600",
        },
        {
          id: "Solar_Radiation_Flux",
          pixel_size: "9600",
        },
        {
          id: "Precipitation_Solid_Duration_Fraction",
          pixel_size: "9600",
        },
        {
          id: "Vapour_Pressure_Mean",
          pixel_size: "9600",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-29",
      endyear: "2024",
      id: "projects/climate-engine-pro/assets/ce-era5-heat",
      provider: "",
      start_date: "1940-01-01",
      startyear: "1940",
      tags: "",
      thumbnail_url: "",
      title: "ERA5 Heat",
      type: "image_collection",
      bands: [
        {
          id: "mrt_mean",
          pixel_size: "27750",
        },
        {
          id: "mrt_max",
          pixel_size: "27750",
        },
        {
          id: "mrt_min",
          pixel_size: "27750",
        },
        {
          id: "mrt_median",
          pixel_size: "27750",
        },
        {
          id: "utci_mean",
          pixel_size: "27750",
        },
        {
          id: "utci_max",
          pixel_size: "27750",
        },
        {
          id: "utci_min",
          pixel_size: "27750",
        },
        {
          id: "utci_median",
          pixel_size: "27750",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-07-01",
      endyear: "2024",
      id: "projects/climate-engine/esi/4wk",
      provider: "",
      start_date: "2001-01-08",
      startyear: "2001",
      tags: "",
      thumbnail_url: "",
      title: "NOAA Evaporative Stress Index 4week",
      type: "image_collection",
      bands: [
        {
          id: "ESI",
          pixel_size: "4000",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-07-01",
      endyear: "2024",
      id: "projects/climate-engine/esi/12wk",
      provider: "",
      start_date: "2001-01-08",
      startyear: "2001",
      tags: "",
      thumbnail_url: "",
      title: "NOAA Evaporative Stress Index 12Week",
      type: "image_collection",
      bands: [
        {
          id: "ESI",
          pixel_size: "4000",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "7 days",
      endyear: "",
      id: "projects/climate-engine/fret/forecast/eto",
      provider: "",
      start_date: "present",
      startyear: "",
      tags: "",
      thumbnail_url: "",
      title: "FRET",
      type: "image_collection",
      bands: [
        {
          id: "ETo",
        },
      ],
    },
    {
      end_date: "15 days",
      endyear: "",
      id: "projects/climate-engine-pro/assets/ce-geps2w-forecast",
      provider: "Canadian Meteorological Centre",
      start_date: "present",
      startyear: "",
      tags: "",
      thumbnail_url:
        "https://d33v4339jhl8k0.cloudfront.net/docs/assets/637d3085483e942ba866b26e/images/641bbea650f28e43c4c5c857/file-Ggi9no6iV1.png",
      title: "GEPS 2weeks",
      type: "image_collection",
      bands: [],
    },
    {
      end_date: "31 days",
      endyear: "",
      id: "projects/climate-engine-pro/assets/ce-geps4w-forecast",
      provider: "Canadian Meteorological Centre",
      start_date: "present",
      startyear: "",
      tags: "",
      thumbnail_url:
        "https://d33v4339jhl8k0.cloudfront.net/docs/assets/637d3085483e942ba866b26e/images/641bbea650f28e43c4c5c857/file-Ggi9no6iV1.png",
      title: "GEPS 4weeks",
      type: "image_collection",
      bands: [],
    },
    {
      end_date: "2024-07-01",
      endyear: "2024",
      id: "projects/climate-engine-pro/assets/ce-hrdpa-daily",
      provider: "",
      start_date: "2018-03-01",
      startyear: "2018",
      tags: "",
      thumbnail_url: "",
      title: "High Resolution Deterministic Precipitation Analysis (HRDPA)",
      type: "image_collection",
      bands: [
        {
          id: "precip",
          pixel_size: "2500",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-01",
      endyear: "2024",
      id: "projects/climate-engine-pro/assets/ce-gpm-imerg-daily",
      provider: "",
      start_date: "2000-06-01",
      startyear: "2000",
      tags: "",
      thumbnail_url: "",
      title: "Global Precipitation Measurement (GPM)",
      type: "image_collection",
      bands: [
        {
          id: "HQprecipitation",
          pixel_size: "11000",
        },
        {
          id: "IRprecipitation",
          pixel_size: "11000",
        },
        {
          id: "precipitationCal",
          pixel_size: "11000",
        },
        {
          id: "precipitationUncal",
          pixel_size: "11000",
        },
        {
          id: "randomError",
          pixel_size: "11000",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-30",
      endyear: "2024",
      id: "projects/climate-engine-pro/assets/ce-hrdps-daily",
      provider: "",
      start_date: "2015-04-23",
      startyear: "2015",
      tags: "",
      thumbnail_url: "",
      title: "High Resolution Deterministic Prediction System (HRDPS)",
      type: "image_collection",
      bands: [
        {
          id: "Tavg",
          pixel_size: "",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "present",
      endyear: "present",
      id: "projects/earthengine-legacy/assets/projects/climate-engine/merra2/daily",
      provider: "",
      start_date: "1980-04-02",
      startyear: "1980",
      tags: "",
      thumbnail_url: "",
      title:
        "Modern-Era Retrospective analysis for Research and Applications, Version 2 (MERRA2)",
      type: "image_collection",
      bands: [
        {
          id: "T2MMIN",
          pixel_size: "50000",
        },
        {
          id: "T2MMAX",
          pixel_size: "50000",
        },
        {
          id: "PRECTOTCORR",
          pixel_size: "50000",
        },
        {
          id: "WIND2M",
          pixel_size: "50000",
        },
        {
          id: "ETo_ASCE",
          pixel_size: "50000",
        },
        {
          id: "ETr_ASCE",
          pixel_size: "50000",
        },
        {
          id: "QV2M",
          pixel_size: "50000",
        },
        {
          id: "PS",
          pixel_size: "50000",
        },
        {
          id: "SWGDN",
          pixel_size: "50000",
        },
        {
          id: "SWGDNCLR",
          pixel_size: "50000",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-05-23",
      endyear: "2024",
      id: "projects/climate-engine-pro/assets/ce-merra2_fwi-daily",
      provider: "",
      start_date: "1980-04-01",
      startyear: "1980",
      tags: "",
      thumbnail_url: "",
      title: "MERRA2 FWI Daily",
      type: "image_collection",
      bands: [
        {
          id: "FWI",
          pixel_size: "50000",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-09",
      endyear: "2024",
      id: "MODIS/061/MOD13Q1",
      provider: "",
      start_date: "2000-02-18",
      startyear: "2000",
      tags: "",
      thumbnail_url: "",
      title: "MOD13Q1.061 Terra Vegetation Indices 16-Day Global 250m",
      type: "image_collection",
      bands: [
        {
          id: "NDVI",
          pixel_size: "250",
        },
        {
          id: "EVI",
          pixel_size: "250",
        },
        {
          id: "DetailedQA",
          pixel_size: "250",
        },
        {
          id: "sur_refl_b01",
          pixel_size: "250",
        },
        {
          id: "sur_refl_b02",
          pixel_size: "250",
        },
        {
          id: "sur_refl_b03",
          pixel_size: "250",
        },
        {
          id: "sur_refl_b07",
          pixel_size: "250",
        },
        {
          id: "ViewZenith",
          pixel_size: "250",
        },
        {
          id: "SolarZenith",
          pixel_size: "250",
        },
        {
          id: "RelativeAzimuth",
          pixel_size: "250",
        },
        {
          id: "DayOfYear",
          pixel_size: "250",
        },
        {
          id: "SummaryQA",
          pixel_size: "250",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-01",
      endyear: "2024",
      id: "MODIS/061/MYD13Q1",
      provider: "",
      start_date: "2002-07-04",
      startyear: "2002",
      tags: "",
      thumbnail_url: "",
      title: "MYD13Q1.061 Aqua Vegetation Indices 16-Day Global 250m",
      type: "image_collection",
      bands: [
        {
          id: "NDVI",
          pixel_size: "250",
        },
        {
          id: "EVI",
          pixel_size: "250",
        },
        {
          id: "DetailedQA",
          pixel_size: "250",
        },
        {
          id: "sur_refl_b01",
          pixel_size: "250",
        },
        {
          id: "sur_refl_b02",
          pixel_size: "250",
        },
        {
          id: "sur_refl_b03",
          pixel_size: "250",
        },
        {
          id: "sur_refl_b07",
          pixel_size: "250",
        },
        {
          id: "ViewZenith",
          pixel_size: "250",
        },
        {
          id: "SolarZenith",
          pixel_size: "250",
        },
        {
          id: "RelativeAzimuth",
          pixel_size: "250",
        },
        {
          id: "DayOfYear",
          pixel_size: "250",
        },
        {
          id: "SummaryQA",
          pixel_size: "250",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-09",
      endyear: "2024",
      id: "MODIS/061/MOD13A1",
      provider: "",
      start_date: "2000-02-18",
      startyear: "2000",
      tags: "",
      thumbnail_url: "",
      title: "MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m",
      type: "image_collection",
      bands: [
        {
          id: "NDVI",
          pixel_size: "500",
        },
        {
          id: "EVI",
          pixel_size: "500",
        },
        {
          id: "DetailedQA",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b01",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b02",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b03",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b07",
          pixel_size: "500",
        },
        {
          id: "ViewZenith",
          pixel_size: "500",
        },
        {
          id: "SolarZenith",
          pixel_size: "500",
        },
        {
          id: "RelativeAzimuth",
          pixel_size: "500",
        },
        {
          id: "DayOfYear",
          pixel_size: "500",
        },
        {
          id: "SummaryQA",
          pixel_size: "500",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-01",
      endyear: "2024",
      id: "MODIS/061/MYD13A1",
      provider: "",
      start_date: "2002-07-04",
      startyear: "2002",
      tags: "",
      thumbnail_url: "",
      title: "MYD13A1.061 Aqua Vegetation Indices 16-Day Global 500m",
      type: "image_collection",
      bands: [
        {
          id: "NDVI",
          pixel_size: "500",
        },
        {
          id: "EVI",
          pixel_size: "500",
        },
        {
          id: "DetailedQA",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b01",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b02",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b03",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b07",
          pixel_size: "500",
        },
        {
          id: "ViewZenith",
          pixel_size: "500",
        },
        {
          id: "SolarZenith",
          pixel_size: "500",
        },
        {
          id: "RelativeAzimuth",
          pixel_size: "500",
        },
        {
          id: "DayOfYear",
          pixel_size: "500",
        },
        {
          id: "SummaryQA",
          pixel_size: "500",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-29",
      endyear: "2024",
      id: "MODIS/061/MYD09GA",
      provider: "",
      start_date: "2002-07-04",
      startyear: "2002",
      tags: "",
      thumbnail_url: "",
      title: "MYD09GA.061 Aqua Surface Reflectance Daily Global 1km and 500m",
      type: "image_collection",
      bands: [
        {
          id: "num_observations_1km",
          pixel_size: "1000",
        },
        {
          id: "state_1km",
          pixel_size: "1000",
        },
        {
          id: "SensorZenith",
          pixel_size: "1000",
        },
        {
          id: "SensorAzimuth",
          pixel_size: "1000",
        },
        {
          id: "Range",
          pixel_size: "1000",
        },
        {
          id: "SolarZenith",
          pixel_size: "1000",
        },
        {
          id: "SolarAzimuth",
          pixel_size: "1000",
        },
        {
          id: "gflags",
          pixel_size: "1000",
        },
        {
          id: "orbit_pnt",
          pixel_size: "1000",
        },
        {
          id: "granule_pnt",
          pixel_size: "1000",
        },
        {
          id: "num_observations_500m",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b01",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b02",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b03",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b04",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b05",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b06",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b07",
          pixel_size: "500",
        },
        {
          id: "QC_500m",
          pixel_size: "500",
        },
        {
          id: "obscov_500m",
          pixel_size: "500",
        },
        {
          id: "iobs_res",
          pixel_size: "500",
        },
        {
          id: "q_scan",
          pixel_size: "500",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-28",
      endyear: "2024",
      id: "MODIS/061/MOD10A1",
      provider: "",
      start_date: "2000-02-24",
      startyear: "2000",
      tags: "",
      thumbnail_url: "",
      title: "MOD10A1.061 Terra Snow Cover Daily Global 500m",
      type: "image_collection",
      bands: [
        {
          id: "NDSI_Snow_Cover",
          pixel_size: "500",
        },
        {
          id: "NDSI_Snow_Cover_Basic_QA",
          pixel_size: "500",
        },
        {
          id: "NDSI_Snow_Cover_Algorithm_Flags_QA",
          pixel_size: "500",
        },
        {
          id: "NDSI",
          pixel_size: "500",
        },
        {
          id: "Snow_Albedo_Daily_Tile",
          pixel_size: "500",
        },
        {
          id: "orbit_pnt",
          pixel_size: "500",
        },
        {
          id: "granule_pnt",
          pixel_size: "500",
        },
        {
          id: "NDSI_Snow_Cover_Class",
          pixel_size: "500",
        },
        {
          id: "Snow_Albedo_Daily_Tile_Class",
          pixel_size: "500",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-27",
      endyear: "2024",
      id: "MODIS/061/MYD11A1",
      provider: "",
      start_date: "2002-07-04",
      startyear: "2002",
      tags: "",
      thumbnail_url: "",
      title:
        "MYD11A1.061 Aqua Land Surface Temperature and Emissivity Daily Global 1km",
      type: "image_collection",
      bands: [
        {
          id: "LST_Day_1km",
          pixel_size: "1000",
        },
        {
          id: "QC_Day",
          pixel_size: "1000",
        },
        {
          id: "Day_view_time",
          pixel_size: "1000",
        },
        {
          id: "Day_view_angle",
          pixel_size: "1000",
        },
        {
          id: "LST_Night_1km",
          pixel_size: "1000",
        },
        {
          id: "QC_Night",
          pixel_size: "1000",
        },
        {
          id: "Night_view_time",
          pixel_size: "1000",
        },
        {
          id: "Night_view_angle",
          pixel_size: "1000",
        },
        {
          id: "Emis_31",
          pixel_size: "1000",
        },
        {
          id: "Emis_32",
          pixel_size: "1000",
        },
        {
          id: "Clear_day_cov",
          pixel_size: "1000",
        },
        {
          id: "Clear_night_cov",
          pixel_size: "1000",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-28",
      endyear: "2024",
      id: "MODIS/061/MYD10A1",
      provider: "",
      start_date: "2002-07-04",
      startyear: "2002",
      tags: "",
      thumbnail_url: "",
      title: "MYD10A1.061 Aqua Snow Cover Daily Global 500m",
      type: "image_collection",
      bands: [
        {
          id: "NDSI_Snow_Cover",
          pixel_size: "500",
        },
        {
          id: "NDSI_Snow_Cover_Basic_QA",
          pixel_size: "500",
        },
        {
          id: "NDSI_Snow_Cover_Algorithm_Flags_QA",
          pixel_size: "500",
        },
        {
          id: "NDSI",
          pixel_size: "500",
        },
        {
          id: "Snow_Albedo_Daily_Tile",
          pixel_size: "500",
        },
        {
          id: "orbit_pnt",
          pixel_size: "500",
        },
        {
          id: "granule_pnt",
          pixel_size: "500",
        },
        {
          id: "NDSI_Snow_Cover_Class",
          pixel_size: "500",
        },
        {
          id: "Snow_Albedo_Daily_Tile_Class",
          pixel_size: "500",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-28",
      endyear: "2024",
      id: "MODIS/061/MOD11A1",
      provider: "",
      start_date: "2000-02-24",
      startyear: "2000",
      tags: "",
      thumbnail_url: "",
      title:
        "MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global 1km",
      type: "image_collection",
      bands: [
        {
          id: "LST_Day_1km",
          pixel_size: "1000",
        },
        {
          id: "QC_Day",
          pixel_size: "1000",
        },
        {
          id: "Day_view_time",
          pixel_size: "1000",
        },
        {
          id: "Day_view_angle",
          pixel_size: "1000",
        },
        {
          id: "LST_Night_1km",
          pixel_size: "1000",
        },
        {
          id: "QC_Night",
          pixel_size: "1000",
        },
        {
          id: "Night_view_time",
          pixel_size: "1000",
        },
        {
          id: "Night_view_angle",
          pixel_size: "1000",
        },
        {
          id: "Emis_31",
          pixel_size: "1000",
        },
        {
          id: "Emis_32",
          pixel_size: "1000",
        },
        {
          id: "Clear_day_cov",
          pixel_size: "1000",
        },
        {
          id: "Clear_night_cov",
          pixel_size: "1000",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-27",
      endyear: "2024",
      id: "MODIS/061/MOD09GA",
      provider: "",
      start_date: "2000-02-24",
      startyear: "2000",
      tags: "",
      thumbnail_url: "",
      title: "MOD09GA.061 Terra Surface Reflectance Daily Global 1km and 500m",
      type: "image_collection",
      bands: [
        {
          id: "num_observations_1km",
          pixel_size: "1000",
        },
        {
          id: "state_1km",
          pixel_size: "1000",
        },
        {
          id: "SensorZenith",
          pixel_size: "1000",
        },
        {
          id: "SensorAzimuth",
          pixel_size: "1000",
        },
        {
          id: "Range",
          pixel_size: "1000",
        },
        {
          id: "SolarZenith",
          pixel_size: "1000",
        },
        {
          id: "SolarAzimuth",
          pixel_size: "1000",
        },
        {
          id: "gflags",
          pixel_size: "1000",
        },
        {
          id: "orbit_pnt",
          pixel_size: "1000",
        },
        {
          id: "granule_pnt",
          pixel_size: "1000",
        },
        {
          id: "num_observations_500m",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b01",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b02",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b03",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b04",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b05",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b06",
          pixel_size: "500",
        },
        {
          id: "sur_refl_b07",
          pixel_size: "500",
        },
        {
          id: "QC_500m",
          pixel_size: "500",
        },
        {
          id: "obscov_500m",
          pixel_size: "500",
        },
        {
          id: "iobs_res",
          pixel_size: "500",
        },
        {
          id: "q_scan",
          pixel_size: "500",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-05-01",
      endyear: "2024",
      id: "projects/climate-engine/nadm/monthly",
      provider: "",
      start_date: "2002-11-01",
      startyear: "2002",
      tags: "",
      thumbnail_url: "",
      title: "North American Drought Monitor (NADM)",
      type: "image_collection",
      bands: [
        {
          id: "drought",
          pixel_size: "2500",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-05-01",
      endyear: "2024",
      id: "projects/climate-engine-pro/assets/noaa-ncei-nclimgrid/monthly",
      provider: "",
      start_date: "1895-01-01",
      startyear: "1895",
      tags: "",
      thumbnail_url: "",
      title: "NOAA Monthly U.S. Climate Gridded Dataset (NClimGrid) Monthly",
      type: "image_collection",
      bands: [
        {
          id: "precip",
          pixel_size: "4600",
        },
        {
          id: "tmin",
          pixel_size: "4600",
        },
        {
          id: "tmax",
          pixel_size: "4600",
        },
        {
          id: "tavg",
          pixel_size: "4600",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-27",
      endyear: "2024",
      id: "projects/eddi-noaa/nldas/daily",
      provider: "",
      start_date: "1979-01-02",
      startyear: "1979",
      tags: "",
      thumbnail_url: "",
      title: "NOAA Evaporative Demand Drought Index",
      type: "image_collection",
      bands: [
        {
          id: "temperature_max",
          pixel_size: "12000",
        },
        {
          id: "temperature_min",
          pixel_size: "12000",
        },
        {
          id: "specific_humidity",
          pixel_size: "12000",
        },
        {
          id: "pressure",
          pixel_size: "12000",
        },
        {
          id: "wind",
          pixel_size: "12000",
        },
        {
          id: "longwave_radiation",
          pixel_size: "12000",
        },
        {
          id: "total_precipitation",
          pixel_size: "12000",
        },
        {
          id: "shortwave_radiation",
          pixel_size: "12000",
        },
        {
          id: "eto_asce",
          pixel_size: "12000",
        },
        {
          id: "etr_asce",
          pixel_size: "12000",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2012-12-31",
      endyear: "2012",
      id: "NOAA/AVHRR_Pathfinder_V52_L3",
      provider: "",
      start_date: "1981-11-01",
      startyear: "1981",
      tags: "",
      thumbnail_url:
        "https://www.ncei.noaa.gov/sites/default/files/styles/wide_full_width_image_no_crop/public/2021-02/AVHRR%20Pathfinder%20-%20All%20Pixel%20Values.png?itok=4CjDb97w",
      title: "NOAA/AVHRR Pathfinder Version 5.2 Level 3 Collated (L3C) ",
      type: "image_collection",
      bands: [
        {
          id: "aerosol_dynamic_indicator",
          pixel_size: "4000",
        },
        {
          id: "dt_analysis",
          pixel_size: "4000",
        },
        {
          id: "l2p_flags",
          pixel_size: "4000",
        },
        {
          id: "pathfinder_quality_level",
          pixel_size: "4000",
        },
        {
          id: "quality_level",
          pixel_size: "4000",
        },
        {
          id: "sea_ice_fraction",
          pixel_size: "4000",
        },
        {
          id: "sea_surface_temperature",
          pixel_size: "4000",
        },
        {
          id: "wind_speed",
          pixel_size: "4000",
        },
      ],
    },
    {
      end_date: "2024-06-28",
      endyear: "2024",
      id: "projects/climate-engine-pro/assets/noaa-ncei-nclimgrid/daily",
      provider: "",
      start_date: "1951-01-01",
      startyear: "1951",
      tags: "",
      thumbnail_url: "",
      title: "NCLIM Daily",
      type: "image_collection",
      bands: [
        {
          id: "precip",
          pixel_size: "4600",
        },
        {
          id: "tmin",
          pixel_size: "4600",
        },
        {
          id: "tmax",
          pixel_size: "4600",
        },
        {
          id: "tavg",
          pixel_size: "4600",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-23",
      endyear: "2024",
      id: "projects/climate-engine-pro/assets/noaa-cpc-cmorph/daily",
      provider: "",
      start_date: "1998-01-01",
      startyear: "1998",
      tags: "",
      thumbnail_url: "",
      title: "CPC CMORPH",
      type: "image_collection",
      bands: [
        {
          id: "precip",
          pixel_size: "25000",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "present",
      endyear: "present",
      id: "OpenET/ENSEMBLE/Continental US/GRIDMET/MONTHLY/v2_0",
      provider: "",
      start_date: "2013-01-01",
      startyear: "2013",
      tags: "",
      thumbnail_url: "",
      title: "OpenET CONUS Ensemble Monthly Evapotranspiration v2.0",
      type: "image_collection",
      bands: [
        {
          id: "et_ensemble_mad",
          pixel_size: "30",
        },
        {
          id: "et_ensemble_mad_min",
          pixel_size: "30",
        },
        {
          id: "et_ensemble_max",
          pixel_size: "30",
        },
        {
          id: "et_ensemble_mad_count",
          pixel_size: "30",
        },
        {
          id: "et_ensemble_max_index",
          pixel_size: "30",
        },
        {
          id: "et_ensemble_sam",
          pixel_size: "30",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2021-01-01",
      endyear: "2021",
      id: "projects/rangeland-analysis-platform/vegetation-cover-v3",
      provider: "",
      start_date: "1986-01-01",
      startyear: "1986",
      tags: "",
      thumbnail_url: "",
      title: "Rangeland Analysis Vegetation Cover V3",
      type: "image_collection",
      bands: [
        {
          id: "AFG",
          pixel_size: "30",
        },
        {
          id: "BGR",
          pixel_size: "30",
        },
        {
          id: "LTR",
          pixel_size: "30",
        },
        {
          id: "PFG",
          pixel_size: "30",
        },
        {
          id: "SHR",
          pixel_size: "30",
        },
        {
          id: "TRE",
          pixel_size: "30",
        },
      ],
    },
    {
      end_date: "2024-06-29",
      endyear: "2024",
      id: "projects/climate-engine-pro/assets/noaa-cpc-daily-global/daily",
      provider: "",
      start_date: "1979-01-01",
      startyear: "1979",
      tags: "",
      thumbnail_url: "",
      title: "NOAA CPC Daily CMORTH GLOBAL",
      type: "image_collection",
      bands: [
        {
          id: "precip",
          pixel_size: "25000",
        },
        {
          id: "tmin",
          pixel_size: "25000",
        },
        {
          id: "tmax",
          pixel_size: "25000",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-29",
      endyear: "2024",
      id: "projects/climate-engine-pro/assets/noaa-cpc-daily-conus/daily",
      provider: "",
      start_date: "1948-01-01",
      startyear: "1948",
      tags: "",
      thumbnail_url:
        "https://psl.noaa.gov/data/gridded/images/small/unified.png",
      title: "NOAA CPC Daily CMORTH CONUS",
      type: "image_collection",
      bands: [
        {
          id: "precip",
          pixel_size: "25000",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2021-01-01",
      endyear: "2021",
      id: "projects/rangeland-analysis-platform/npp-partitioned-v3",
      provider: "",
      start_date: "1986-01-01",
      startyear: "1986",
      tags: "",
      thumbnail_url: "",
      title: "Rangeland Analysis NPP Partitioned V3",
      type: "image_collection",
      bands: [
        {
          id: "afgNPP",
          pixel_size: "30",
        },
        {
          id: "pfgNPP",
          pixel_size: "30",
        },
        {
          id: "shrNPP",
          pixel_size: "30",
        },
        {
          id: "treNPP",
          pixel_size: "30",
        },
      ],
    },
    {
      end_date: "2023-12-19",
      endyear: "2023",
      id: "projects/rap-data-365417/assets/npp-partitioned-16day-v3",
      provider: "",
      start_date: "1986-01-01",
      startyear: "1986",
      tags: "",
      thumbnail_url: "",
      title: "Rangeland Analysis NPP Partitioned 16day V3",
      type: "image_collection",
      bands: [
        {
          id: "afgNPP",
          pixel_size: "30",
        },
        {
          id: "pfgNPP",
          pixel_size: "30",
        },
        {
          id: "shrNPP",
          pixel_size: "30",
        },
        {
          id: "treNPP",
          pixel_size: "30",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-28",
      endyear: "2024",
      id: "projects/climate-engine/rtma/daily",
      provider: "",
      start_date: "2015-07-01",
      startyear: "2015",
      tags: "",
      thumbnail_url: "",
      title: "RTMA Daily",
      type: "image_collection",
      bands: [
        {
          id: "TMAX",
          pixel_size: "2540",
        },
        {
          id: "TMIN",
          pixel_size: "2540",
        },
        {
          id: "SRAD",
          pixel_size: "2540",
        },
        {
          id: "SPH",
          pixel_size: "2540",
        },
        {
          id: "WIND",
          pixel_size: "2540",
        },
        {
          id: "WDIR",
          pixel_size: "2540",
        },
        {
          id: "TCDC",
          pixel_size: "2540",
        },
        {
          id: "PRES",
          pixel_size: "2540",
        },
        {
          id: "DPT",
          pixel_size: "2540",
        },
        {
          id: "ETo",
          pixel_size: "2540",
        },
        {
          id: "ETr",
          pixel_size: "2540",
        },
        {
          id: "PRCP",
          pixel_size: "2540",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-30",
      endyear: "2024",
      id: "projects/climate-engine-pro/assets/ce-rdps-daily",
      provider: "",
      start_date: "2010-11-01",
      startyear: "2010",
      tags: "",
      thumbnail_url: "",
      title: "RDPS Daily",
      type: "image_collection",
      bands: [
        {
          id: "Tavg",
          pixel_size: "20000",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-02-20",
      endyear: "2024",
      id: "projects/climate-engine-pro/assets/ce-rdpa-daily",
      provider: "",
      start_date: "2003-01-01",
      startyear: "2003",
      tags: "",
      thumbnail_url: "",
      title: "RDPA Daily",
      type: "image_collection",
      bands: [
        {
          id: "precip",
          pixel_size: "10000",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2021-01-01",
      endyear: "2021",
      id: "projects/earthengine-legacy/assets/projects/usgs-ssebop/modis_et_v5_annual",
      provider: "",
      start_date: "2003-01-01",
      startyear: "2003",
      tags: "",
      thumbnail_url: "",
      title: "USGS MODIS ET",
      type: "image_collection",
      bands: [
        {
          id: "et",
          pixel_size: "1000",
        },
      ],
    },
    {
      end_date: "2022-05-01",
      endyear: "2022",
      id: "projects/earthengine-legacy/assets/projects/usgs-ssebop/modis_et_v5_monthly",
      provider: "",
      start_date: "2003-01-01",
      startyear: "2003",
      tags: "",
      thumbnail_url: "",
      title: "USGS MODIS ET V5 Monthly",
      type: "image_collection",
      bands: [
        {
          id: "et",
          pixel_size: "1000",
        },
      ],
    },
    {
      end_date: "2022-05-21",
      endyear: "2022",
      id: "projects/earthengine-legacy/assets/projects/usgs-ssebop/modis_et_v5_dekadal",
      provider: "",
      start_date: "2003-01-01",
      startyear: "2003",
      tags: "",
      thumbnail_url: "",
      title: "USGS MODIS ET V5 Dekadal",
      type: "image_collection",
      bands: [
        {
          id: "et",
          pixel_size: "1000",
        },
      ],
    },
    {
      end_date: "2024-06-25",
      endyear: "2024",
      id: "projects/climate-engine/usdm/weekly",
      provider: "",
      start_date: "2000-01-04",
      startyear: "2000",
      tags: "",
      thumbnail_url: "",
      title: "USDM Weekly",
      type: "image_collection",
      bands: [
        {
          id: "drought",
          pixel_size: "4000",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-06-30",
      endyear: "2024",
      id: "projects/climate-engine/snodas/daily",
      provider: "",
      start_date: "2003-09-30",
      startyear: "2003",
      tags: "",
      thumbnail_url: "",
      title: "SNODAS Daily",
      type: "image_collection",
      bands: [
        {
          id: "SWE",
          pixel_size: "1000",
        },
        {
          id: "Snow_Depth",
          pixel_size: "1000",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2024-03-01",
      endyear: "2024",
      id: "projects/usgs-ssebop/viirs_et_v6_monthly",
      provider: "",
      start_date: "2012-02-01",
      startyear: "2012",
      tags: "",
      thumbnail_url: "",
      title: "USGS VIIRS ET V6 Monthly",
      type: "image_collection",
      bands: [
        {
          id: "et",
          pixel_size: "1000",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2022-01-01",
      endyear: "2022",
      id: "projects/usgs-ssebop/viirs_et_v6_annual",
      provider: "",
      start_date: "2013-01-01",
      startyear: "2013",
      tags: "",
      thumbnail_url: "",
      title: "USGS VIIRS ET V6 Yearly",
      type: "image_collection",
      bands: [
        {
          id: "et",
          pixel_size: "1000",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2017-01-01",
      endyear: "2017",
      id: "JAXA/ALOS/PALSAR/YEARLY/FNF",
      provider: "",
      start_date: "2007-01-01",
      startyear: "2007",
      tags: "",
      thumbnail_url: "",
      title: "JAXA ALOS PALSAR Yearly FNF",
      type: "image_collection",
      bands: [
        {
          id: "fnf",
          pixel_size: "25",
        },
      ],
    },
    {
      end_date: "2024-04-11",
      endyear: "2024",
      id: "projects/usgs-ssebop/viirs_et_v6_dekadal",
      provider: "",
      start_date: "2012-02-01",
      startyear: "2012",
      tags: "",
      thumbnail_url: "",
      title: "USGS VIIRS ET V6 Dekadal",
      type: "image_collection",
      bands: [
        {
          id: "et",
          pixel_size: "1000",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "2018-12-05",
      endyear: "2018",
      id: "GLOBAL_FLOOD_DB/MODIS_EVENTS/V1",
      provider: "",
      start_date: "2000-02-17",
      startyear: "2000",
      tags: "",
      thumbnail_url: "",
      title: "Global Flood MODIS",
      type: "image_collection",
      bands: [
        {
          id: "flooded",
          pixel_size: "250",
        },
        {
          id: "duration",
          pixel_size: "250",
        },
        {
          id: "clear_views",
          pixel_size: "250",
        },
        {
          id: "clear_perc",
          pixel_size: "250",
        },
        {
          id: "jrc_perm_water",
          pixel_size: "250",
        },
      ],
    },
    {
      end_date: "2022-01-01",
      endyear: "2022",
      id: "MODIS/061/MCD12Q1",
      provider: "",
      start_date: "2001-01-01",
      startyear: "2001",
      tags: "",
      thumbnail_url: "",
      title: "MCD12Q1.061 MODIS Land Cover Type Yearly Global 500m",
      type: "image_collection",
      bands: [
        {
          id: "LC_Type1",
          pixel_size: "500",
        },
        {
          id: "LC_Type2",
          pixel_size: "500",
        },
        {
          id: "LC_Type3",
          pixel_size: "500",
        },
        {
          id: "LC_Type4",
          pixel_size: "500",
        },
        {
          id: "LC_Type5",
          pixel_size: "500",
        },
        {
          id: "LC_Prop1_Assessment",
          pixel_size: "500",
        },
        {
          id: "LC_Prop2_Assessment",
          pixel_size: "500",
        },
        {
          id: "LC_Prop3_Assessment",
          pixel_size: "500",
        },
        {
          id: "LC_Prop1",
          pixel_size: "500",
        },
        {
          id: "LC_Prop2",
          pixel_size: "500",
        },
        {
          id: "LC_Prop3",
          pixel_size: "500",
        },
        {
          id: "QC",
          pixel_size: "500",
        },
        {
          id: "LW",
          pixel_size: "500",
        },
      ],
    },
    {
      end_date: "2022-01-01",
      endyear: "2022",
      id: "AAFC/ACI",
      provider: "",
      start_date: "2009-01-01",
      startyear: "2009",
      tags: "",
      thumbnail_url: "",
      title: "AAFC ACI",
      type: "image_collection",
      bands: [
        {
          id: "landcover",
          pixel_size: "50",
        },
      ],
    },
    {
      end_date: "2017-01-01",
      endyear: "2017",
      id: "COPERNICUS/CORINE/V20/100m",
      provider: "",
      start_date: "1986-01-01",
      startyear: "1986",
      tags: "copernicus Corine 100m",
      thumbnail_url: "",
      title: "COPERNICUS CORINE V20 100m",
      type: "",
      numberOfClasses: "44",
      bands: [
        {
          id: "landcover",
          pixel_size: "100",
        },
      ],
    },
    {
      end_date: "2023-12-31",
      endyear: "2023",
      id: "USFS/GTAC/LCMS/v2023-9",
      provider: "",
      start_date: "1985-06-01",
      startyear: "1985",
      tags: "",
      thumbnail_url: "",
      title:
        "USFS Landscape Change Monitoring System v2023.9 (CONUS and OCONUS)",
      type: "image_collection",
      bands: [
        {
          id: "Change",
          pixel_size: "30",
        },
        {
          id: "Land_Cover",
          pixel_size: "30",
        },
        {
          id: "Land_Use",
          pixel_size: "30",
        },
        {
          id: "Change_Raw_Probability_Slow_Loss",
          pixel_size: "30",
        },
        {
          id: "Change_Raw_Probability_Fast_Loss",
          pixel_size: "30",
        },
        {
          id: "Change_Raw_Probability_Gain",
          pixel_size: "30",
        },
        {
          id: "Land_Cover_Raw_Probability_Trees",
          pixel_size: "30",
        },
        {
          id: "Land_Cover_Raw_Probability_Tall-Shrubs-and-Trees-Mix",
          pixel_size: "30",
        },
        {
          id: "Land_Cover_Raw_Probability_Shrubs-and-Trees-Mix",
          pixel_size: "30",
        },
        {
          id: "Land_Cover_Raw_Probability_Grass-Forb-Herb-and-Trees-Mix",
          pixel_size: "30",
        },
        {
          id: "Land_Cover_Raw_Probability_Barren-and-Trees-Mix",
          pixel_size: "30",
        },
        {
          id: "Land_Cover_Raw_Probability_Tall-Shrubs",
          pixel_size: "30",
        },
        {
          id: "Land_Cover_Raw_Probability_Shrubs",
          pixel_size: "30",
        },
        {
          id: "Land_Cover_Raw_Probability_Grass-Forb-Herb-and-Shrubs-Mix",
          pixel_size: "30",
        },
        {
          id: "Land_Cover_Raw_Probability_Barren-and-Shrubs-Mix",
          pixel_size: "30",
        },
        {
          id: "Land_Cover_Raw_Probability_Grass-Forb-Herb",
          pixel_size: "30",
        },
        {
          id: "Land_Cover_Raw_Probability_Barren-and-Grass-Forb-Herb-Mix",
          pixel_size: "30",
        },
        {
          id: "Land_Cover_Raw_Probability_Barren-or-Impervious",
          pixel_size: "30",
        },
        {
          id: "Land_Cover_Raw_Probability_Snow-or-Ice",
          pixel_size: "30",
        },
        {
          id: "Land_Cover_Raw_Probability_Water",
          pixel_size: "30",
        },
        {
          id: "Land_Use_Raw_Probability_Agriculture",
          pixel_size: "30",
        },
        {
          id: "Land_Use_Raw_Probability_Developed",
          pixel_size: "30",
        },
        {
          id: "Land_Use_Raw_Probability_Forest",
          pixel_size: "30",
        },
        {
          id: "Land_Use_Raw_Probability_Non-Forest-Wetland",
          pixel_size: "30",
        },
        {
          id: "Land_Use_Raw_Probability_Other",
          pixel_size: "30",
        },
        {
          id: "Land_Use_Raw_Probability_Rangeland-or-Pasture",
          pixel_size: "30",
        },
        {
          id: "QA_Bits",
          pixel_size: "30",
        },
      ],
    },
    {
      end_date: "2020-01-01",
      endyear: "2020",
      id: "JAXA/ALOS/PALSAR/YEARLY/FNF4",
      provider: "",
      start_date: "2017-01-01",
      startyear: "2017",
      tags: "",
      thumbnail_url: "",
      title: "JAXA ALOS PALSAR Yearly FNF4",
      type: "image_collection",
      bands: [
        {
          id: "fnf",
          pixel_size: "25",
        },
      ],
    },
    {
      end_date: "2010-01-01",
      endyear: "2010",
      id: "ESA/GLOBCOVER_L4_200901_200912_V2_3",
      provider: "",
      start_date: "2009-01-01",
      startyear: "2009",
      tags: "",
      thumbnail_url: "",
      title: "GlobCover: Global Land Cover Map",
      type: "image",
      numberOfClasses: "23",
      bands: [
        {
          id: "landcover",
          pixel_size: "300",
        },
        {
          id: "qa",
          pixel_size: "300",
        },
      ],
    },
    {
      end_date: "2016-12-31",
      endyear: "2016",
      id: "CSP/HM/GlobalHumanModification",
      provider: "",
      start_date: "2016-01-01",
      startyear: "2016",
      tags: "",
      thumbnail_url: "",
      title: "CSP gHM: Global Human Modification",
      type: "image_collection",
      bands: [
        {
          id: "gHM",
          pixel_size: "1000",
        },
      ],
    },
    {
      end_date: "2020-12-31",
      endyear: "2020",
      id: "ESA/WorldCover/v200",
      provider: "",
      start_date: "2020-12-31",
      startyear: "2020",
      tags: "",
      thumbnail_url: "",
      title: "ESA WorldCover v200",
      type: "image_collection",
      bands: [
        {
          id: "Map",
          pixel_size: "10",
        },
      ],
    },
    {
      end_date: "2021-07-27",
      endyear: "2021",
      id: "ESA/WorldCereal/2021/MODELS/v100",
      provider: "",
      start_date: "2020-05-19",
      startyear: "2020",
      tags: "",
      thumbnail_url: "",
      title: "ESA WorldCereal 2021",
      type: "image_collection",
      bands: [
        {
          id: "classification",
          pixel_size: "10",
        },
        {
          id: "confidence",
          pixel_size: "10",
        },
      ],
    },
    {
      end_date: "2020-01-01",
      endyear: "2020",
      id: "ESA/WorldCover/v100",
      provider: "",
      start_date: "2020-01-01",
      startyear: "2020",
      tags: "",
      thumbnail_url: "",
      title: "ESA WorldCover v100",
      type: "image_collection",
      bands: [
        {
          id: "Map",
          pixel_size: "10",
        },
      ],
    },
    {
      end_date: "2012-01-01",
      endyear: "2012",
      id: "USGS/GAP/CONUS/2011",
      provider: "",
      start_date: "2011-01-01",
      startyear: "2011",
      tags: "",
      thumbnail_url: "",
      title: "USGS GAP CONUS 2011",
      type: "image",
      numberOfClasses: "584",
      bands: [
        {
          id: "landcover",
          pixel_size: "30",
        },
      ],
    },
    {
      end_date: "2002-01-01",
      endyear: "2002",
      id: "USGS/GAP/PR/2001",
      provider: "",
      start_date: "2001-01-01",
      startyear: "2001",
      tags: "",
      thumbnail_url: "",
      title: "USGS GAP Puerto Rico 2001",
      type: "image",
      numberOfClasses: "70",
      bands: [
        {
          id: "landcover",
          pixel_size: "30",
        },
      ],
    },
    {
      end_date: "2002-01-01",
      endyear: "2002",
      id: "USGS/GAP/AK/2001",
      provider: "",
      start_date: "2001-01-01",
      startyear: "2001-01-01",
      tags: "",
      thumbnail_url: "",
      title: "USGS GAP Alaska 2001",
      type: "image",
      numberOfClasses: "184",
      bands: [
        {
          id: "landcover",
          pixel_size: "30",
        },
      ],
    },
    {
      end_date: "2002-01-01",
      endyear: "2002",
      id: "USGS/GAP/HI/2001",
      provider: "",
      start_date: "2001-01-01",
      startyear: "2001",
      tags: "",
      thumbnail_url: "",
      title: "USGS GAP Hawaii 2001",
      type: "image",
      numberOfClasses: "37",
      bands: [
        {
          id: "landcover",
          pixel_size: "30",
        },
      ],
    },
    {
      end_date: "2012-01-01",
      endyear: "2012",
      id: "Oxford/MAP/IGBP_Fractional_Landcover_5km_Annual",
      provider: "",
      start_date: "2001-01-01",
      startyear: "2001",
      tags: "",
      thumbnail_url: "",
      title: "Oxford IGBP Fractional Landcover Annual",
      type: "image_collection",
      bands: [
        {
          id: "Overall_Class",
          pixel_size: "4600",
        },
        {
          id: "Water",
          pixel_size: "4600",
        },
        {
          id: "Evergreen_Needleleaf_Forest",
          pixel_size: "4600",
        },
        {
          id: "Evergreen_Broadleaf_Forest",
          pixel_size: "4600",
        },
        {
          id: "Deciduous_Needleleaf_Forest",
          pixel_size: "4600",
        },
        {
          id: "Deciduous_Broadleaf_Forest",
          pixel_size: "4600",
        },
        {
          id: "Mixed_Forest",
          pixel_size: "4600",
        },
        {
          id: "Closed_Shrublands",
          pixel_size: "4600",
        },
        {
          id: "Open_Shrublands",
          pixel_size: "4600",
        },
        {
          id: "Woody_Savannas",
          pixel_size: "4600",
        },
        {
          id: "Savannas",
          pixel_size: "4600",
        },
        {
          id: "Grasslands",
          pixel_size: "4600",
        },
        {
          id: "Permanent_Wetlands",
          pixel_size: "4600",
        },
        {
          id: "Croplands",
          pixel_size: "4600",
        },
        {
          id: "Urban_And_Built_Up",
          pixel_size: "4600",
        },
        {
          id: "Cropland_Natural_Vegetation_Mosaic",
          pixel_size: "4600",
        },
        {
          id: "Snow_And_Ice",
          pixel_size: "4600",
        },
        {
          id: "Barren_Or_Sparsely_Populated",
          pixel_size: "4600",
        },
        {
          id: "Unclassified",
          pixel_size: "4600",
        },
        {
          id: "No_Data",
          pixel_size: "4600",
        },
      ],
    },
    {
      end_date: "",
      endyear: "",
      id: "USGS/GFSAD1000_V1",
      provider: "",
      start_date: "",
      startyear: "",
      tags: "",
      thumbnail_url: "",
      title: "USGS GFSAD1000",
      type: "image_collection",
      bands: [],
    },
    {
      end_date: "",
      endyear: "",
      id: "USGS/NLCD_RELEASES/2020_REL/NALCMS",
      provider: "",
      start_date: "",
      startyear: "",
      tags: "",
      thumbnail_url: "",
      title: "USGS NLCD Releases 2020 NALCMS",
      type: "image_collection",
      bands: [],
    },
    {
      end_date: "2019-12-31",
      endyear: "2019",
      id: "BIOPAMA/GlobalOilPalm/v1",
      provider: "",
      start_date: "2019-01-01",
      startyear: "2019",
      tags: "",
      thumbnail_url: "",
      title: "Global Map of Oil Palm Plantations",
      type: "image_collection",
      bands: [
        {
          id: "classification",
          pixel_size: "10",
        },
      ],
    },
    {
      end_date: "2017-01-07",
      endyear: "2017",
      id: "SKYSAT/GEN-A/PUBLIC/ORTHO/RGB",
      provider: "",
      start_date: "2014-07-03",
      startyear: "2014",
      tags: "",
      thumbnail_url: "",
      title: "Planet SkySat Public Ortho Imagery, RGB",
      type: "image_collection",
      bands: [
        {
          id: "R",
          pixel_size: "1",
        },
        {
          id: "G",
          pixel_size: "1",
        },
        {
          id: "B",
          pixel_size: "1",
        },
      ],
    },
    {
      end_date: "2022-12-01",
      endyear: "2022",
      id: "CSIC/SPEI/2_9",
      provider: "",
      start_date: "1901-01-01",
      startyear: "1901",
      tags: "",
      thumbnail_url: "",
      title:
        "SPEIbase: Standardised Precipitation-Evapotranspiration Index database, Version 2.9",
      type: "image_collection",
      bands: [
        {
          id: "SPEI_01_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_02_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_03_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_04_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_05_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_06_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_07_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_08_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_09_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_10_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_11_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_12_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_13_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_14_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_15_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_16_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_17_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_18_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_19_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_20_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_21_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_22_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_23_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_24_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_25_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_26_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_27_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_28_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_29_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_30_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_31_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_32_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_33_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_34_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_35_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_36_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_37_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_38_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_39_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_40_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_41_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_42_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_43_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_44_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_45_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_46_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_47_month",
          pixel_size: "55660",
        },
        {
          id: "SPEI_48_month",
          pixel_size: "55660",
        },
      ],
    },
    {
      end_date: "2020-12-01",
      endyear: "2020",
      id: "ESA/CCI/FireCCI/5_1",
      provider: "",
      start_date: "2001-01-01",
      startyear: "2001",
      tags: "",
      thumbnail_url: "",
      title: "FireCCI51: MODIS Fire_cci Burned Area Pixel Product, Version 5.1",
      type: "image_collection",
      bands: [
        {
          id: "BurnDate",
          pixel_size: "250",
        },
        {
          id: "ConfidenceLevel",
          pixel_size: "250",
        },
        {
          id: "LandCover",
          pixel_size: "250",
        },
        {
          id: "ObservedFlag",
          pixel_size: "250",
        },
      ],
    },
    {
      end_date: "2024-06-29",
      endyear: "2024",
      id: "NASA/SMAP/SPL4SMGP/007",
      provider: "",
      start_date: "2015-03-31",
      startyear: "2015",
      tags: "",
      thumbnail_url: "",
      title:
        "SPL4SMGP.007 SMAP L4 Global 3-hourly 9-km Surface and Root Zone Soil Moisture",
      type: "image_collection",
      bands: [
        {
          id: "sm_surface",
          pixel_size: "11000",
        },
        {
          id: "sm_rootzone",
          pixel_size: "11000",
        },
        {
          id: "sm_profile",
          pixel_size: "11000",
        },
        {
          id: "sm_surface_wetness",
          pixel_size: "11000",
        },
        {
          id: "sm_rootzone_wetness",
          pixel_size: "11000",
        },
        {
          id: "sm_profile_wetness",
          pixel_size: "11000",
        },
        {
          id: "surface_temp",
          pixel_size: "11000",
        },
        {
          id: "soil_temp_layer1",
          pixel_size: "11000",
        },
        {
          id: "soil_temp_layer2",
          pixel_size: "11000",
        },
        {
          id: "soil_temp_layer3",
          pixel_size: "11000",
        },
        {
          id: "soil_temp_layer4",
          pixel_size: "11000",
        },
        {
          id: "soil_temp_layer5",
          pixel_size: "11000",
        },
        {
          id: "soil_temp_layer6",
          pixel_size: "11000",
        },
        {
          id: "snow_mass",
          pixel_size: "11000",
        },
        {
          id: "snow_depth",
          pixel_size: "11000",
        },
        {
          id: "land_evapotranspiration_flux",
          pixel_size: "11000",
        },
        {
          id: "overland_runoff_flux",
          pixel_size: "11000",
        },
        {
          id: "baseflow_flux",
          pixel_size: "11000",
        },
        {
          id: "snow_melt_flux",
          pixel_size: "11000",
        },
        {
          id: "soil_water_infiltration_flux",
          pixel_size: "11000",
        },
        {
          id: "land_fraction_saturated",
          pixel_size: "11000",
        },
        {
          id: "land_fraction_unsaturated",
          pixel_size: "11000",
        },
        {
          id: "land_fraction_wilting",
          pixel_size: "11000",
        },
        {
          id: "land_fraction_snow_covered",
          pixel_size: "11000",
        },
        {
          id: "heat_flux_sensible",
          pixel_size: "11000",
        },
        {
          id: "heat_flux_latent",
          pixel_size: "11000",
        },
        {
          id: "heat_flux_ground",
          pixel_size: "11000",
        },
        {
          id: "net_downward_shortwave_flux",
          pixel_size: "11000",
        },
        {
          id: "net_downward_longwave_flux",
          pixel_size: "11000",
        },
        {
          id: "radiation_shortwave_downward_flux",
          pixel_size: "11000",
        },
        {
          id: "radiation_longwave_absorbed_flux",
          pixel_size: "11000",
        },
        {
          id: "precipitation_total_surface_flux",
          pixel_size: "11000",
        },
        {
          id: "snowfall_surface_flux",
          pixel_size: "11000",
        },
        {
          id: "surface_pressure",
          pixel_size: "11000",
        },
        {
          id: "height_lowatmmodlay",
          pixel_size: "11000",
        },
        {
          id: "temp_lowatmmodlay",
          pixel_size: "11000",
        },
        {
          id: "specific_humidity_lowatmmodlay",
          pixel_size: "11000",
        },
        {
          id: "windspeed_lowatmmodlay",
          pixel_size: "11000",
        },
        {
          id: "vegetation_greenness_fraction",
          pixel_size: "11000",
        },
        {
          id: "leaf_area_index",
          pixel_size: "11000",
        },
        {
          id: "sm_rootzone_pctl",
          pixel_size: "11000",
        },
        {
          id: "sm_profile_pctl",
          pixel_size: "11000",
        },
        {
          id: "depth_to_water_table_from_surface_in_peat",
          pixel_size: "11000",
        },
        {
          id: "free_surface_water_on_peat_flux",
          pixel_size: "11000",
        },
        {
          id: "mwrtm_vegopacity",
          pixel_size: "11000",
        },
        {
          id: "sm_surface_anomaly",
          pixel_size: "11000",
        },
      ],
      end_date_update_programmatically: "true",
    },
    {
      end_date: "present",
      endyear: "present",
      id: "GOOGLE/DYNAMICWORLD/V1",
      provider: "",
      start_date: "2015-06-27",
      startyear: "2015",
      tags: "",
      thumbnail_url: "",
      title: "Dynamic World V1",
      type: "image_collection",
      bands: [
        {
          id: "water",
          pixel_size: "10",
        },
        {
          id: "trees",
          pixel_size: "10",
        },
        {
          id: "grass",
          pixel_size: "10",
        },
        {
          id: "flooded_vegetation",
          pixel_size: "10",
        },
        {
          id: "crops",
          pixel_size: "10",
        },
        {
          id: "shrub_and_scrub",
          pixel_size: "10",
        },
        {
          id: "built",
          pixel_size: "10",
        },
        {
          id: "bare",
          pixel_size: "10",
        },
        {
          id: "snow_and_ice",
          pixel_size: "10",
        },
        {
          id: "label",
          pixel_size: "10",
        },
      ],
      end_date_update_programmatically: "true",
    },
  ];

export default function handler(req, res){
  res.status(200).json(datasets);
}

export { datasets };