import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios
    .get(baseUrl)
    .then(response => response.data)
}

const create = (contactObject) => {
  return axios
    .post(baseUrl, contactObject)
    .then(response => response.data)
}

const del = (id) => {
  return axios.
    delete(`${baseUrl}/${id}`)
}

const update = (contactObject) => {
  return axios
    .put(`${baseUrl}/${contactObject.id}`, contactObject)
    .then(response => response.data)
}

export default { getAll, create, del, update }