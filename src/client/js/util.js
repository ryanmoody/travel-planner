/**
 * @name getWeekdayName
 * @summary Gets the full name of a weekday.
 */
export const getWeekdayName = () => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const date = new Date();
  const day = date.getDay();
  
  return weekdays[day];
};

/**
 * @name getCalendarDate
 * @summary Gets the current date in full calendar form.
 */
export const getCalendarDate = (dateText) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const date = new Date(dateText);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  
  return`${month} ${day}, ${year}`;
};

/**
 * @name getDateDifference
 * @summary Returns the difference in days between two dates.
 * @param {Date} startDate
 * @param {Date} endDate 
 */
export const getDateDifference = (firstDate, secondDate) => {
  const difference = firstDate.getTime() - secondDate.getTime();
  return Math.round(Math.abs(difference / ( 1000 * 60 * 60 * 24 )) + 1);
};

/**
 * @name setVisibility
 * @summary Changes the hidden property of an element.
 * @param {Node} element 
 * @param {boolean} visible 
 */
export const setVisibility = (element, visible) => {
  element.hidden = !visible;
};
