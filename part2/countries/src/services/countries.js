import axios from "axios"

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

export default {getAll, getCountry}