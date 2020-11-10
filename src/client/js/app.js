import { getDestinationData } from './api';
import { getCalendarDate, getDateDifference ,setVisibility } from './util';

export const handleSubmit = async (e) => {
  e.preventDefault();

  const form = document.querySelector('.form');
  const destination = document.querySelector('#destination').value;
  const startDate = document.querySelector('#start-date').value;
  const searchPanel = document.querySelector('.search-panel');
  const resultsPanel = document.querySelector('.results-panel');
  const weatherType = getWeatherType(startDate);
  
  const data = await getDestinationData(destination, startDate, weatherType);

  updateCard(data);
  updateDestination(data);
  updateCountdown();
  updateWeather(data);
  updateTripDates();
  setVisibility(searchPanel, false);
  setVisibility(resultsPanel, true);

  form.reset();
};

export const handleLogoClick = (e) => {
  const searchPanel = document.querySelector('.search-panel');
  const resultsPanel = document.querySelector('.results-panel');
  setVisibility(searchPanel, true);
  setVisibility(resultsPanel, false);
};

const updateCard = (data) => {
  const card = document.querySelector('.card');
  card.style.background = `linear-gradient(to bottom, rgba(51, 102, 255, 0.70), rgba(51, 102, 255, 1.00)), url(${data.image})`;
  card.style.backgroundPosition = 'center';
  card.style.backgroundRepeat = 'no-repeat';
  card.style.backgroundSize = 'cover';
};

const updateDestination = (data) => {
  const city = document.querySelector('.city');
  const country = document.querySelector('.country');
  city.innerHTML = `${data.city},`;
  country.innerHTML = data.country;
};

const updateCountdown = () => {
  const startDate = document.querySelector('#start-date').value;
  const countdown = document.querySelector('.countdown');
  const days = getDateDifference(new Date(), new Date(startDate));
  countdown.innerHTML = `Your trip is in ${days} days.`;
};

const updateTripDates = () => {
  const startDate = document.querySelector('#start-date').value;
  const endDate = document.querySelector('#end-date').value;
  const startDateText = document.querySelector('.start-date__text');
  const endDateText = document.querySelector('.end-date__text');
  startDateText.innerHTML = getCalendarDate(startDate);
  endDateText.innerHTML = getCalendarDate(endDate);
};

const updateWeather = (data) => {
  const { type } = data.weather;
  const weatherType = document.querySelector('.weather-type');
  const temperature = document.querySelector('.temperature');
  const description = document.querySelector('.description');

  if (type === 'current') {
    weatherType.innerHTML = 'Current Conditions';
    temperature.innerHTML = `${data.weather.temp}°C`;
    description.innerHTML = data.weather.description;
  }

  if (type === 'historical') {
    weatherType.innerHTML = 'Expected Conditions';
    temperature.innerHTML = `Min: ${data.weather.min}°C Max: ${data.weather.max}°C`;
    description.innerHTML = '';
  }
};

const getWeatherType = (startDate) => {
  const dateDifference = getDateDifference(new Date(), new Date(startDate));
  return dateDifference > 7 ? 'historical' : 'current';
};
