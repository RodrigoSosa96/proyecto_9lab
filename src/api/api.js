import axios from 'axios';

export const openlibraryAPI = axios.create({
  baseURL: 'https://openlibrary.org/api/',
})


export default axios.create({
  baseURL: 'http://localhost:3004/',
})

