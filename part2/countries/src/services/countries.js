import axios from "axios"

const API_URL = 'https://studies.cs.helsinki.fi/restcountries/api'
const ALL_ENDPOINT = 'all'
const NAME_ENDPOINT = 'name'

const getAll = () => {
  return axios.get(`${API_URL}/${ALL_ENDPOINT}`)
  .then((response) => response.data)
}

export default {getAll, }