import React from 'react'
import {style} from 'frontful-style'
import {resolver} from 'frontful-resolver'
import {Todo} from '../../models/Todo'
import {Link} from 'frontful-router'

@resolver.define(({models}) => ({
  todo: models.global(Todo)
}))
@resolver((resolve) => {
  resolve.untracked(({todo}) => todo.initialize())
})
@style(require('./Main.style'))
export default class Main extends React.PureComponent {
  render() {
    const {style, children} = this.props

    return (
      <div>
        <header className={style.css('header')}>
          <Link href="/">todos</Link>
        </header>
        {children}
        <footer className={style.css('footer')}>
          <div>Double-click to edit a todo</div>
          <div>Created by <a href="https://github.com/frontful/frontful-todomvc">Frontful</a></div>
          <div>Part of <a href="http://todomvc.com/">TodoMVC</a></div>
        </footer>
      </div>
    )
  }
}
