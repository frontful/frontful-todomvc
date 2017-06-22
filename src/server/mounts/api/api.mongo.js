import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

mongoose.connect(process.env.DB)
//mongoose.connect('mongodb://localhost:27017/todomvc')

const itemSchema = new mongoose.Schema({
  id: String,
  text: String,
  completed: Boolean,
}, {_id : false})

const todoSchema = new mongoose.Schema({
  _id: {type: String, required: true, index: {unique: true}},
  items: [itemSchema],
}, {_id : false, versionKey: false})

// Coldreload causes module to be reloaded and model to be reinstanciated,
// arbitrary `process` attribute has been chosen to reuse model
const Todo = process.todomvc_Model = process.todomvc_Model || mongoose.model('todo', todoSchema)

const createTodoId = (cb) => {
  const todo = new Todo({
    _id: Math.random().toString(36).substr(2, 7),
    items: [],
  })
  todo.save((err, todo) => {
    if (err) {
      if (err.code === 11000) {
        createTodoId(cb)
      }
      else {
        cb(null)
      }
    }
    else {
      return cb(todo.id)
    }
  })
}

const app = express()

app.use(bodyParser.json())

app.put('/todo', (req, res) => {
  createTodoId((id) => {
    if (id) {
      res.json(id)
    }
    else {
      res.status(400).json(false)
    }
  })
})

app.put('/todo/:id', (req, res) => {
  const id = req.params.id
  const item = req.body

  const update = {
    $push: {
      items: {
        id: item.id,
        text: item.text,
        completed: item.completed,
      }
    }
  }

  Todo.update({_id: id}, update, (err, {nModified}) => {
    if (err || !nModified) {
      res.status(400).json(false)
    }
    else {
      res.json(true)
    }
  })
})

app.post('/todo/:id', (req, res) => {
  const id = req.params.id
  const updateItems = req.body
  if (Array.isArray(updateItems)) {
    Todo.findOne({_id: id}, (err, todo) => {
      if (err || !todo) {
        res.status(400).json(false)
      }
      else {
        const items = todo.items
        updateItems.forEach((updateItem) => {
          const item = items.find((item) => item.id === updateItem.id)
          Object.assign(item, updateItem)
        })
        Todo.update({_id: id}, {$set: {items: items}}, (err, {nModified}) => {
          if (err || !nModified) {
            res.status(400).json(false)
          }
          else {
            res.json(true)
          }
        })
      }
    })
  }
  else {
    res.status(400).json(false)
  }
})

app.delete('/todo/:id', (req, res) => {
  const id = req.params.id
  const ids = req.body
  if (Array.isArray(ids)) {
    const update = {
      $pull: {
        items: {
          id: {
            $in: ids
          }
        }
      }
    }
    Todo.update({_id: id}, update, (err, {nModified}) => {
      if (err || !nModified) {
        res.status(400).json(false)
      }
      else {
        res.json(true)
      }
    })
  }
  else {
    res.status(400).json(false)
  }
})

app.get('/todo/:id?', (req, res) => {
  const id = req.params.id
  if (!id) {
    res.json([])
  }
  else {
    Todo.findOne({_id: req.params.id}, (err, todo) => {
      if (err || !todo) {
        res.status(400).json(false)
      }
      else {
        res.json(todo.items)
      }
    })
  }
})

export default app
