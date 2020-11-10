/**
 * @name getDestinationData
 * @summary Makes a request to retrieve data about a destination.
 * @param {string} city 
 */
export const getDestinationData = async (city, startDate, weatherType) => {
  const options = {
    method: 'POST',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ city, startDate, weatherType })
  };

  return fetch('http://localhost:8081/api', options)
    .then(handleErrors)
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.log(`An error occured while fetching destination data. ${error}`);
    });
};

/**
 * @name handleErrors
 * @summary Handles errors received from an HTTP response.
 * @param {object} response 
 */
const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
