import {model} from 'frontful-model'

@model.format({
  uid: '',
  text: '',
  completed: false,
})
export class TodoItem {
  constructor() {
    this.uid = this.uid || Math.random().toString(36).substr(2, 10)
  }

  toggle = () => {
    this.completed = !this.completed
  }

  change = (text) => {
    this.text = text
  }
}
