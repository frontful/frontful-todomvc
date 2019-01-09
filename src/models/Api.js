import {Router} from 'frontful-router'
import {dao} from 'frontful-dao'
import {isBrowser} from 'frontful-utils'

@dao.define(({models}) => ({
  router: models.global(Router.Model),
}))
@dao(() => ({
  url: isBrowser() ? `/api` : `http://${process.env.HOST || 'localhost'}:${process.env.PORT || '80'}/api`,
}))
class Api {
  get todoId() {
    return this.router.params.todoId || ''
  }

  createTodoId() {
    return this.put('/todo').then((todoId) => {
      this.router.push(`/${todoId}`)
      return todoId
    })
  }

  addItem(item) {
    if (!this.todoId) {
      return this.createTodoId().then((todoId) => {
        return this.put(`/todo/${todoId}`, item)
      })
    }
    else {
      return this.put(`/todo/${this.todoId}`, item)
    }
  }

  updateItems(items) {
    return this.post(`/todo/${this.todoId}`, Array.isArray(items) ? items : [items])
  }

  removeItemsById(ids) {
    return this.delete(`/todo/${this.todoId}`, Array.isArray(ids) ? ids : [ids])
  }

  getItems() {
    return this.get(`/todo/${this.todoId}`).catch(() => {
      //TODO: throw new Router.Exceptions.NotFound()
      this.router.replace('/')
    })
  }
}

export {Api}
