import express from 'express'
import bodyParser from 'body-parser'

// Coldreload causes module to be reloaded and state to be lost,
// arbitrary `express` module has been chosen to persist state because
// arbitrary modules are not reloaded
const store = express.store = express.store || {}

const app = express()

app.use(bodyParser.json())

app.put('/todo', (req, res) => {
  do {
    var id = Math.random().toString(36).substr(2, 7)
  }
  while (store[id])
  store[id] = {
    items: [],
  }
  res.json({id})
})

app.put('/todo/:id', (req, res) => {
  const id = req.params.id
  const item = req.body
  if (store[id] && item.id && item.text && typeof item.completed === 'boolean') {
    store[id].items.push({
      id: item.id,
      text: item.text,
    })
    res.json({})
  }
  else {
    res.status(400).json({})
  }
})

app.post('/todo/:id', (req, res) => {
  const id = req.params.id
  const updateItems = req.body && req.body.items
  if (store[id] && Array.isArray(updateItems)) {
    const items = store[id].items
    updateItems.forEach((updateItem) => {
      const item = items.find((item) => item.id === updateItem.id)
      Object.assign(item, updateItem)
    })
    res.json({})
  }
  else {
    res.status(400).json({})
  }
})

app.delete('/todo/:id', (req, res) => {
  const id = req.params.id
  const ids = req.body && req.body.ids
  if (store[id] && Array.isArray(ids)) {
    const items = store[id].items
    ids.forEach((id) => {
      const item = items.find((item) => item.id === id)
      items.splice(items.indexOf(item), 1)
    })
    res.json({})
  }
  else {
    res.status(400).json({})
  }
})

app.get('/todo/:id?', (req, res) => {
  const id = req.params.id
  if (store[id]) {
    res.json(store[id])
  }
  else {
    res.status(404).json({})
  }
})

export default app
