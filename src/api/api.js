import axios from 'axios';

export const openlibraryAPI = axios.create({
  baseURL: 'https://openlibrary.org/api/',
})

export const BASE_URL = import.meta.env.VITE_WORKER_API_URL || 'http://localhost:8787/'
export default axios.create({
  baseURL: BASE_URL
});

