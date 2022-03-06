import axios from 'axios'

//regular axios
export const http = axios.create()

//axios Token
export const httpAuth = axios.create({
  headers: {
    Authorization: `Bearer token`,
  },
})
