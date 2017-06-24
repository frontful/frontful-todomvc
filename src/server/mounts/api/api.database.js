import bodyParser from 'body-parser'
import express from 'express'
import {Todo} from './api.database.dal'

const app = express()

app.use(bodyParser.json())

app.put('/todo', (req, res) => {
  Todo.createTodo((err, todo) => {
    if (err)
      res.status(400).json(false)
    else
      res.json(todo.id)
  })
})

app.put('/todo/:id', (req, res) => {
  const {params: {id}, body: item} = req
  Todo.update({_id: id}, {$push: {items: item}}, (err, {nModified}) => {
    if (err || !nModified)
      res.status(400).json(false)
    else
      res.json(true)
  })
})

app.post('/todo/:id', (req, res) => {
  const {params: {id}, body: items} = req
  if (Array.isArray(items)) {
    Todo.findOne({_id: id}, (err, todo) => {
      if (err || !todo)
        res.status(400).json(false)
      else {
        items.forEach((item) => {
          Object.assign(todo.items.find((i) => i.id === item.id), item)
        })
        Todo.update({_id: id}, {$set: {items: todo.items}}, (err, {nModified}) => {
          if (err || !nModified)
            res.status(400).json(false)
          else
            res.json(true)
        })
      }
    })
  }
  else
    res.status(400).json(false)
})

app.delete('/todo/:id', (req, res) => {
  const {params: {id}, body: ids} = req
  if (Array.isArray(ids))
    Todo.update({_id: id}, {$pull: {items: {id: {$in: ids}}}}, (err, {nModified}) => {
      if (err || !nModified)
        res.status(400).json(false)
      else
        res.json(true)
    })
  else
    res.status(400).json(false)
})

app.get('/todo/:id?', (req, res) => {
  const {params: {id}} = req
  if (!id)
    res.json([])
  else
    Todo.findOne({_id: id}, (err, todo) => {
      if (err || !todo) {
        res.status(400).json(false)
      }
      else {
        res.json(todo.items)
      }
    })
})

export default app
