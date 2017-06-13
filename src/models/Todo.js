import {TodoItem} from './TodoItem'
import {model, formatter} from 'frontful-model'
import {action, computed} from 'mobx'
import {Router} from 'frontful-router'

const filterFromPath = /\/(active|all|completed)?$/

@model.config(({models}) => ({
  router: models.global(Router.Model),
}))
@model.format({
  items: formatter.array(formatter.model(TodoItem)),
})
export class Todo {
  @action
  add = (text) => {
    this.items.push({text})
  }

  @action
  remove = (item) => {
    this.items.splice(this.items.indexOf(item), 1)
  }

  @action
  clearCompleted = () => {
    for (let i = 0; i < this.items.length;) {
      if (this.items[i].completed) this.items.splice(i, 1)
      else i++
    }
  }

  @action
  toggle = () => {
    const value = !this.completed
    this.items.forEach((item) => {item.completed = value})
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

  @computed
  get filter() {
    return this.router.path.match(filterFromPath)[1] || 'all'
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
