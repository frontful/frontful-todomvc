let api

if (process.env.DB) {
  api = require('./api.mongo')
}
else {
  api = require('./api.process')
}

export default api
