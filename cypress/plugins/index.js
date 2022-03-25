require('dotenv').config()

module.exports = (on, config) => {
  // copy any needed variables from process.env to config.env
  config.env.apiUrl = process.env.VITE_API_URL

  // do not forget to return the changed config object!
  return config
}
