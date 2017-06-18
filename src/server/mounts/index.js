import api from './api'
import express from 'express'
import main from './main'

const app = express()

app.use('/api', api)
app.use('/', main)
app.use(global.frontful.environment.errorHandler)

export default app
