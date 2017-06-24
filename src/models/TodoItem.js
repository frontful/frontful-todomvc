import {Api} from './Api'
import {Todo} from './Todo'
import {model} from 'frontful-model'

@model.define(({models}) => ({
  api: models.global(Api),
  todo: models.global(Todo),
}))
@model.format({
  id: '',
  text: '',
  completed: false,
})
export class TodoItem {
  constructor() {
    this.id = this.id || Math.random().toString(36).substr(2, 3)
  }

  remove = () => {
    return this.api.removeItemsById(this.id).then(() => {
      this.todo.removeItem(this)
    })
  }

  toggle = () => {
    const update = this.serialize()
    update.completed = !this.completed
    return this.api.updateItems(update).then(() => {
      this.completed = !this.completed
    })
  }

  change = (text) => {
    if (text) {
      const update = this.serialize()
      update.text = text
      return this.api.updateItems(update).then(() => {
        this.text = text
      })
    }
    else {
      return this.remove()
    }
  }
}
