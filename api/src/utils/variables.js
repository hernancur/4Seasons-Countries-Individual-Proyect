const URL_ALL = 'https://restcountries.eu/rest/v2/all';
const URL_ID = 'https://restcountries.eu/rest/v2/alpha/';
const INTERTABLE = 'countryAct';
const WRONG_PARAMETER = 'Wrong parameter type';
const WRONG_ID = 'ID must be a string';
const COUNTRY_NOT_FOUND = "Country not found";

const ACTIVITY_1 = {
  name: "Surfing",
  difficulty: "2",
  duration:"3",
  season: "Summer",
  countriesActivity: ["ARG", "URY"]
}

const ACTIVITY_2 = {
  name: "Ski",
  difficulty: "2",
  duration:"3",
  season: "Winter",
  countriesActivity: ["ARG"]
}

const ACTIVITY_3 = {
  name: "Go to the beach",
  difficulty: "1",
  duration:"4",
  season: "Summer",
  countriesActivity: ["URY"]
}



module.exports = {
  URL_ALL: URL_ALL,
  URL_ID: URL_ID,
  INTERTABLE: INTERTABLE,
  WRONG_PARAMETER: WRONG_PARAMETER,
  WRONG_ID: WRONG_ID,
  COUNTRY_NOT_FOUND: COUNTRY_NOT_FOUND,
  ACTIVITY_1: ACTIVITY_1,
  ACTIVITY_2: ACTIVITY_2,
  ACTIVITY_3: ACTIVITY_3
};
