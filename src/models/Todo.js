import {TodoItem} from './TodoItem'
import {model, formatter} from 'frontful-model'
import {computed} from 'mobx'
import {Router} from 'frontful-router'
import {Api} from './Api'

@model.define(({models}) => ({
  router: models.global(Router.Model),
  api: models.global(Api),
}))
@model.format({
  items: formatter.private(formatter.array(formatter.model(TodoItem))),
})
export class Todo {
  initialize() {
    if (this.items.length === 0) {
      return this.api.resolveItems(this.id).then((todo) => {
        this.items = todo.items
      }).catch(() => {
        this.items = []
      })
    }
  }

  add = async (text) => {
    const item = new TodoItem({text}, this.context)
    if (!this.id) {
      var {id} = await this.api.createTodo()
      this.router.push(`/${id}`)
    }
    await this.api.createItem(this.id, item.serialize())
    this.items.push(item)
  }

  remove = async (item) => {
    await this.api.removeItem(this.id, item.id)
    this.items.splice(this.items.indexOf(item), 1)
  }

  clearCompleted = async () => {
    for (let i = 0; i < this.items.length;) {
      if (this.items[i].completed) await this.remove(this.items[i])
      else i++
    }
  }

  toggle = async () => {
    const completed = !this.completed
    for (let i = 0, l = this.items.length; i < l; i++) {
      if (this.items[i].completed !== completed) {
        await this.items[i].toggle(completed)
      }
    }
  }

  @computed
  get activeCount() {
    return this.items.reduce((count, item) => {
      return count + !item.completed
    }, 0)
  }

  @computed
  get completed() {
    return this.items.reduce((completed, item) => item.completed && completed, true)
  }

  get id() {
    return this.router.params.todoId
  }

  get filter() {
    return this.router.params.filter || 'all'
  }

  @computed
  get filtered() {
    switch(this.filter) {
      case 'completed': return this.items.filter((item) => item.completed)
      case 'active': return this.items.filter((item) => !item.completed)
      default: return this.items
    }
  }
}
