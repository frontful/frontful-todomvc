import React from 'react'
import Views from '../../views'
import compileContext from './utils/compileContext'
import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.resolve(process.cwd(), 'assets/root'), {maxAge: '7d'}))

app.use((req, res, next) => {
  compileContext(<Views/>, {req, res}).then((context) => {
    const assets = global.frontful.environment.assets
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Frontful TodoMVC</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no" />
          ${context.style}
        </head>
        <body>
          <div id="app">${context.view}</div>
          ${context.state}
          <script src="${assets.js.vendor}"></script>
          <script src="${assets.js.main}"></script>
        </body>
      </html>
    `)
  }).catch((error) => {
    next(error)
  })
})

export default app
