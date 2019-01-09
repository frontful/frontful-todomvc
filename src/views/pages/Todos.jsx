import Control from '../components/Control'
import Entry from '../components/Entry'
import Items from '../components/Items'
import React from 'react'
import {Todo} from '../../models/Todo'
import {resolver} from 'frontful-resolver'
import {style} from 'frontful-style'

@resolver.define(({models}) => ({
  todo: models.global(Todo)
}))
@resolver((resolve) => {
  resolve(
    ({todo}) => todo.initialize(),
    () => ({
      Entry: <Entry />,
      Items: <Items />,
      Control: <Control />,
    })
  )
})
@style(require('./Todos.style'))
class Todos extends React.PureComponent {
  render() {
    const {style, Entry, Items, Control} = this.props
    return (
      <section className={style.css('todos')}>
        <Entry />
        <Items />
        <Control />
      </section>
    )
  }
}

export default Todos
