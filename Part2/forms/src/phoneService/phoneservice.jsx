const baseUrl = 'http://localhost:3001/persons';
import axios from 'axios'

export const addPerson = (obj) => {
    return axios.post(baseUrl, obj)
}
export const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}
export const getAllPersons = () => {
    return axios.get(baseUrl)
}
export const updateNumber = (id, obj) => {
    return axios.put(`${baseUrl}/${id}`, obj)
}

// export default {addPerson, deletePerson, getAllPersons}