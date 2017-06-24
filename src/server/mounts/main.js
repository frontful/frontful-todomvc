import React from 'react'
import Views from '../../views'
import compile from './utils/compile'
import express from 'express'
import path from 'path'
import {Exceptions} from 'frontful-resolver'

const app = express()

app.use(express.static(path.resolve(process.cwd(), 'assets/root'), {maxAge: '7d'}))

app.use((req, res, next) => {
  compile(<Views/>, {req, res}).then((context) => {
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
          <script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-101492318-2', 'auto');ga('send', 'pageview');</script>
          <div id="app">${context.view}</div>
          ${context.state}
          <script src="${assets.js.vendor}"></script>
          <script src="${assets.js.main}"></script>
        </body>
      </html>
    `)
  }).catch((error) => {
    if (error instanceof Exceptions.Cancel) next()
    else next(error)
  })
})

export default app
