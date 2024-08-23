const axios = require("axios");
require("dotenv").config();

async function getLinks(url) {
  const options = {
    method: "GET",
    url: "https://social-media-video-downloader.p.rapidapi.com/smvd/get/all",
    params: {
      url: url,
    },
    headers: {
      "x-rapidapi-key": process.env.rapidapikey,
      "x-rapidapi-host": process.env.rapidapihost,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = getLinks;
