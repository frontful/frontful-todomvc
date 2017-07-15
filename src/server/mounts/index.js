import api from './api'
import environment from 'frontful-environment'
import express from 'express'
import main from './main'

const app = express()

app.use('/api', api)
app.use('/', main)
app.use(environment.error.getHandler())

export default app
