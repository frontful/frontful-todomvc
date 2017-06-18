import Item from '../components/Item'
import React from 'react'
import {Todo} from '../../models/Todo'
import {resolver} from 'frontful-resolver'
import {style} from 'frontful-style'

@resolver.define(({models}) => ({
  todo: models.global(Todo)
}))
@resolver((resolve) => {
  resolve(({todo}) => ({
    items: resolve.value(todo.filtered.map((item) => (
      <Item item={item} remove={todo.remove.bind(null, item)}/>
    ))),
  }))
})
@style(require('./Items.style'))
export default class Todos extends React.PureComponent {
  render() {
    const {style, items} = this.props

    if (items.length === 0) {
      return null
    }

    return (
      <section className={style.css('items')}>
        {items.map((Item, idx) => (
          <Item key={idx}/>
        ))}
      </section>
    )
  }
}
