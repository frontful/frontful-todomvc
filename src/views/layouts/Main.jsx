import React from 'react'
import {style} from 'frontful-style'

@style(require('./Main.style').style)
export default class Main extends React.PureComponent {
  render() {
    const {style, children} = this.props

    return (
      <div>
        <header className={style.css('header')}>todos</header>
        {children}
        <footer className={style.css('footer')}>
          <div>Double-click to edit a todo</div>
          <div>Created by <a href="https://github.com/frontful">Frontful</a></div>
          <div>Part of <a href="http://todomvc.com/">TodoMVC</a></div>
        </footer>
      </div>
    )
  }
}
