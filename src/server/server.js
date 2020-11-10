const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const { getGeonamesData } = require('./api/geonames');
const { getWeather } = require('./api/weatherbit');
const { getDestinationImage } = require('./api/pixabay');

dotenv.config();

const port = 8081;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

app.post('/api', async (req, res) => {
  const { city, startDate, weatherType } = req.body;
  
  getGeonamesData(city)
    .then(geonamesData => {
      const { countryName, lat, lng } = geonamesData;
      
      getWeather(lat, lng, startDate, weatherType)
        .then(weatherData => {
          const data = weatherData.data[0];
          let weather = null;

          if (weatherType === 'historical') {
            weather = {
              type: weatherType,
              min: data ? data.min_temp : '--',
              max: data ? data.max_temp : '--'
            };
          } else {
            weather = {
              type: weatherType,
              temp: data ? data.temp : '--',
              description: data ? data.weather.description : 'Unavailable'
            };
          }
          
          getDestinationImage(city)
            .then(imageData => {
              const { webformatURL } = imageData;

              res.send({
                city,
                country: countryName,
                image: webformatURL,
                weather
              });
            })
            .catch(error => {
              console.log(`An error occured while requesting data. ${error}`);
            });
        })
        .catch(error => {
          console.log(`An error occured while requesting data. ${error}`);
        });
    })
    .catch(error => {
      console.log(`An error occured while requesting data. ${error}`);
    });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
