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
      <Item item={item} remove={item.remove}/>
    ))),
  }))
})
@style(require('./Items.style'))
class Items extends React.PureComponent {
  render() {
    const {style, items} = this.props
    return (items.length ?
      <section className={style.css('items')}>
        {items.map((Item, idx) => (
          <Item key={idx}/>
        ))}
      </section> : null
    )
  }
}

export default Items
