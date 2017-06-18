import {model} from 'frontful-model'
import {Api} from './Api'
import {Router} from 'frontful-router'

@model.define(({models}) => ({
  api: models.global(Api),
  router: models.global(Router.Model),
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

  toggle = async (value) => {
    const completed = typeof value === 'boolean' ? value : !this.completed
    await this.api.updateItem(this.todoId, {items: [{id: this.id, completed}]})
    this.completed = completed
  }

  change = async (text) => {
    await this.api.updateItem(this.todoId, {items: [{id: this.id, text}]})
    this.text = text
  }

  get todoId() {
    return this.router.params.todoId
  }
}
