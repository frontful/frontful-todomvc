import React from 'react'
import {Link} from 'frontful-router'
import {Todo} from '../../models/Todo'
import {resolver} from 'frontful-resolver'
import {style} from 'frontful-style'

@resolver.define(({models}) => ({
  todo: models.global(Todo),
}))
@resolver((resolve) => {
  resolve(({todo}) => ({
    activeCount: todo.activeCount,
    allCount: todo.items.length,
    clearCompleted: todo.clearCompleted,
    filter: todo.filter,
    todoId: todo.todoId,
  }))
})
@style(require('./Control.style'))
export default class Controls extends React.PureComponent {
  render() {
    const {className, style, activeCount, filter, clearCompleted, allCount, todoId} = this.props
    const status = `${activeCount} ${activeCount === 1 ? 'item' : 'items'} left`

    return (allCount > 0 ?
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
      </section> :
      null
    )
  }
}
