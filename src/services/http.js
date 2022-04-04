import axios from 'axios'

// API base url
axios.defaults.baseURL = import.meta.env.VITE_API_URL

// create axios instance
export const http = axios.create()
