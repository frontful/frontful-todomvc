import Input from './Input'
import React from 'react'
import {Todo} from '../../models/Todo'
import {resolver} from 'frontful-resolver'
import {style} from 'frontful-style'

@resolver.define(({models}) => ({
  todo: models.global(Todo)
}))
@resolver((resolve) => {
  resolve(({todo}) => ({
    allCount: todo.items.length,
    completed: todo.completed,
    toggle: todo.toggle,
  }))
  resolve(() => ({
    Input: <Input />,
  }))
})
@style(require('./Entry.style'))
export default class Entry extends React.PureComponent {
  render() {
    const {style, Input, completed, toggle, allCount} = this.props
    return (
      <section className={style.css('entry')}>
        {allCount > 0 &&
          <div>
            <input
              id="toggleAll"
              className={style.css('checkbox')}
              type="checkbox"
              checked={completed}
              onChange={toggle}
            />
            <label htmlFor="toggleAll"></label>
          </div>
        }
        <Input />
      </section>
    )
  }
}
