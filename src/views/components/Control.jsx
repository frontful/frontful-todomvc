import React from 'react'
import {style} from 'frontful-style'
import {Link} from 'frontful-router'
import {resolver} from 'frontful-resolver'
import {Todo} from '../../models/Todo'

@resolver.define(({models}) => ({
  todo: models.global(Todo),
}))
@resolver((resolve) => {
  resolve(({todo}) => ({
    todoId: todo.id,
    activeCount: todo.activeCount,
    allCount: todo.items.length,
    filter: todo.filter,
    clearCompleted: todo.clearCompleted,
  }))
})
@style(require('./Control.style'))
export default class Controls extends React.PureComponent {
  render() {
    const {className, style, activeCount, filter, clearCompleted, allCount, todoId} = this.props
    const status = `${activeCount} ${activeCount === 1 ? 'item' : 'items'} left`

    if (allCount === 0) {
      return null
    }

    return (
      <section className={style.css(className, 'footer')}>
        <span className={style.css('status')}>
          {status}
        </span>
        <div className={style.css('filters')}>
          <Link href={`/${todoId}`} className={style.css('filter', filter === 'all' && 'active')}>All</Link>
          <Link href={`/${todoId}/active`} className={style.css('filter', filter === 'active' && 'active')}>Active</Link>
          <Link href={`/${todoId}/completed`} className={style.css('filter', filter === 'completed' && 'active')}>Completed</Link>
        </div>
        {allCount !== activeCount &&
          <button className={style.css('button')} onClick={clearCompleted}>Clear completed</button>
        }
      </section>
    )
  }
}
