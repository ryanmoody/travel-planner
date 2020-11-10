const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config();

const key = process.env.PIXABAY_API_KEY;
const baseURI = 'https://pixabay.com/api/';

const getDestinationImage = async (city) => {
  const url = `${baseURI}?q=${city}&image_type=photo&orientation=horizontal&key=${key}`;

  try {
    const response = await fetch(encodeURI(url));
    const data = await response.json();
    return data.hits[0];
  } catch(error) {
    console.log(`An error occured while requesting data from the Pixabay API. ${error}`);
  }
};

module.exports = { getDestinationImage };
