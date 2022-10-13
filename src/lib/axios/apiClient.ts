import axios from 'axios';

const API_CLIENT = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export { API_CLIENT };