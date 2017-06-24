let api

if (process.env.DB) {
  api = require('./api.database')
}
else {
  api = require('./api.process')
}

export default api
