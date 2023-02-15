require("dotenv").config();

exports.capabilities = {
  pCloudy_Username: process.env.PCLOUDY_USERNAME,
  apiKey: process.env.PCLOUDY_APIKEY,
  clientName: process.env.PCLOUDY_USERNAME,
  email: process.env.PCLOUDY_USERNAME,
  os: "Windows",
  osVersion: "10",
  browserName: "chrome",
  browserVersion: "107",
  pCloudy_EnableVideo: true,
  pCloudy_EnablePerformanceData: true,
  pCloudy_EnableDeviceLogs: true,
};
