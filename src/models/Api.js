import {dal} from 'frontful-dal'
import {isBrowser} from 'frontful-utils'

@dal(() => ({
  url: isBrowser() ? '/api' : `http://${process.env.HOST || 'localhost'}:${process.env.PORT}/api`,
}))
export class Api {
  createTodo() {
    return this.put('/todo')
  }

  createItem(todoId, item) {
    return this.put(`/todo/${todoId}`, item)
  }

  updateItem(todoId, item) {
    return this.post(`/todo/${todoId}`, item)
  }

  removeItem(todoId, id) {
    return this.delete(`/todo/${todoId}`, {ids: [id]})
  }

  resolveItems(todoId) {
    return this.resolve(`/todo/${todoId || ''}`)
  }
}
