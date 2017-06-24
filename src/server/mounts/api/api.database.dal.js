import mongoose from 'mongoose'

mongoose.connect(process.env.DB) // 'mongodb://localhost:27017/todomvc'

const itemSchema = new mongoose.Schema({
  id: String,
  text: String,
  completed: Boolean,
}, {_id : false})

const todoSchema = new mongoose.Schema({
  _id: {type: String, required: true, index: {unique: true}},
  items: [itemSchema],
}, {_id : false, versionKey: false})

todoSchema.statics.createTodo = function (cb) {
  const todo = new this({
    _id: Math.random().toString(36).substr(2, 7),
    items: [],
  })
  todo.save((err, todo) => {
    if (err && err.code === 11000)
      this.createTodo(cb)
    else if (err)
      cb(err, null)
    else
      cb(null, todo)
  })
}

// Coldreload causes module to be reloaded and model to be reinstanciated,
// arbitrary `process` attribute has been chosen to store and reuse created model
const Todo = process.todomvc_Model = process.todomvc_Model || mongoose.model('todo', todoSchema)

export {
  Todo,
}
