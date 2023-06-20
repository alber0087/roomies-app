import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://roomiesapi-production.up.railway.app/api',
  timeout: 3000,
})
