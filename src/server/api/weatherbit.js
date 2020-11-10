const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config();

const key = process.env.WEATHERBIT_API_KEY;

const getWeather = async (lat, lon, startDate, weatherType) => {
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 2);

  const endDateString = `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`;
  const currentURL = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${key}`;
  const historicalURL = `https://api.weatherbit.io/v2.0/history/daily?lat=${lat}&lon=${lon}&key=${key}&start_date=${startDate}&end_date=${endDateString}`;
  const URL = weatherType === 'historical' ? historicalURL : currentURL;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch(error) {
    console.log(`An error occured while requesting data from the Weatherbit API. ${error}`);
  }
};

module.exports = { getWeather };
