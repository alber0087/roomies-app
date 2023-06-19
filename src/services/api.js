import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://roomiesapi-production.up.railway.app/api',
  timeout: 3000,
})
