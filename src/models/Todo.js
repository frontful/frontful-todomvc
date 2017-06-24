import {Api} from './Api'
import {Router} from 'frontful-router'
import {TodoItem} from './TodoItem'
import {action, computed} from 'mobx'
import {model, formatter} from 'frontful-model'

@model.define(({models}) => ({
  router: models.global(Router.Model),
  api: models.global(Api),
}))
@model.format({
  todoId: null,
  items: formatter.array(formatter.model(TodoItem)),
})
export class Todo {
  initialize() {
    if (this.todoId !== this.api.todoId) {
      this.todoId = this.api.todoId
      return this.api.getItems().then((items) => {
        this.items = items
      })
    }
  }

  add = (text) => {
    if (text) {
      const item = new TodoItem({text}, this.context)
      return this.api.addItem(item.serialize()).then(() => {
        this.items.push(item)
      })
    }
  }

  removeItem = (item) => {
    this.items.splice(this.items.indexOf(item), 1)
  }

  clearCompleted = () => {
    const ids = this.items.reduce((ids, item) => {
      if (item.completed) ids.push(item.id)
      return ids
    }, [])

    return this.api.removeItemsById(ids).then(action(() => {
      for (let i = 0; i < this.items.length;) {
        if (this.items[i].completed) this.items.splice(i, 1)
        else i++
      }
    }))
  }

  toggle = () => {
    const completed = !this.completed
    const updatedItems = this.items.reduce((updatedItems, item) => {
      if (item.completed !== completed) {
        const update = item.serialize()
        update.completed = completed
        updatedItems.push(update)
      }
      return updatedItems
    }, [])

    return this.api.updateItems(updatedItems).then(() => {
      for (let i = 0, l = this.items.length; i < l; i++) {
        if (this.items[i].completed !== completed) {
          this.items[i].completed = completed
        }
      }
    })
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
