const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config();

const username = process.env.GEONAMES_API_USERNAME;

const getGeonamesData = async (city) => {
  const url = `https://secure.geonames.org/search?name=${city}&maxRows=1&type=json&username=${username}`;
  
  try {
    const response = await fetch(encodeURI(url));
    const data = await response.json();
    return data.geonames[0];
  } catch (error) {
    console.log(`An error occured while requesting data from the Geonames API. ${error}`);
  }
};

module.exports = { getGeonamesData };
