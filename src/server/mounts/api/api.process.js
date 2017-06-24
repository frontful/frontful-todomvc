import bodyParser from 'body-parser'
import express from 'express'
import {todos} from './api.process.dal'

const app = express()

app.use(bodyParser.json())

app.put('/todo', (req, res) => {
  do var id = Math.random().toString(36).substr(2, 7)
  while (todos[id])
  todos[id] = []
  res.json(id)
})

app.put('/todo/:id', (req, res) => {
  const {params: {id}, body: item} = req
  if (todos[id] && item.id) {
    todos[id].push(item)
    res.json(true)
  }
  else
    res.status(400).json(false)
})

app.post('/todo/:id', (req, res) => {
  const {params: {id}, body: items} = req
  if (todos[id] && Array.isArray(items)) {
    items.forEach((item) => {
      const match = todos[id].find((i) => i.id === item.id)
      Object.assign(match, item)
    })
    res.json(true)
  }
  else
    res.status(400).json(false)
})

app.delete('/todo/:id', (req, res) => {
  const {params: {id}, body: ids} = req
  if (todos[id] && Array.isArray(ids)) {
    const items = todos[id]
    ids.forEach((id) => {
      const match = items.find((i) => i.id === id)
      items.splice(items.indexOf(match), 1)
    })
    res.json(true)
  }
  else
    res.status(400).json(false)
})

app.get('/todo/:id?', (req, res) => {
  const {params: {id}} = req
  if (!id)
    res.json([])
  else if (todos[id])
    res.json(todos[id])
  else
    res.status(400).json(false)
})

export default app
