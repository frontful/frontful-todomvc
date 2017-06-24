import React from 'react'
import {Link} from 'frontful-router'
import {style} from 'frontful-style'

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
