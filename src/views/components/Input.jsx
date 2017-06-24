import React from 'react'
import ReactDOM from 'react-dom'
import {Todo} from '../../models/Todo'
import {resolver} from 'frontful-resolver'
import {style} from 'frontful-style'

@resolver.define(({models}) => ({
  todo: models.global(Todo)
}))
@resolver((resolve) => {
  resolve(({todo, item}) => ({
    save: item ? item.change : todo.add,
    text: item ? item.text : '',
  }))
})
@style(require('./Input.style'))
export default class Input extends React.PureComponent {
  save = () => {
    const target = ReactDOM.findDOMNode(this.refs.input)
    const value = target.value.trim()
    this.props.save(value)
    target.value = ''
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  onKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.save()
    }
    else if (event.keyCode === 27) {
      if (this.props.onBlur) {
        event.preventDefault()
        this.props.onBlur()
      }
    }
  }

  onBlur = () => {
    if (this.props.onBlur) {
      this.save()
    }
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.input).value = this.props.text
    if(this.props.focus) {
      this.refs.input.focus()
    }
  }

  render() {
    const {style} = this.props

    return (
      <input
        autoFocus
        type="text"
        onBlur={this.onBlur}
        className={style.css('input')}
        ref="input"
        placeholder="What needs to be done?"
        onKeyDown={this.onKeyDown}
      />
    )
  }
}
