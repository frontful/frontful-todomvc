import express from 'express'
import main from './main'

const app = express()

app.use('/', main)

export default app
