import axios from "axios"
const API_WEATHER_KEY = import.meta.env.VITE_WEATHER_API_KEY
const API_URL = 'https://studies.cs.helsinki.fi/restcountries/api'
const ALL_ENDPOINT = 'all'
const NAME_ENDPOINT = 'name'

const getAll = () => {
  return axios.get(`${API_URL}/${ALL_ENDPOINT}`)
  .then((response) => response.data)
}

const getCountry = (countryName) => {
  return axios.get(`${API_URL}/${NAME_ENDPOINT}/${countryName}`)
  .then((response) => response.data)
}

const getWeather = (capitalName) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capitalName}&appid=${API_WEATHER_KEY}`)
  .then((response) => response.data)
}

export default {getAll, getCountry, getWeather}