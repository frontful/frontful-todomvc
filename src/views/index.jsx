import base from './index.style'

import React from 'react'
import {Router} from 'frontful-router'
import {resolver} from 'frontful-resolver'
import {style} from 'frontful-style'

import Main from './layouts/Main'
import Todos from './pages/Todos'

@resolver((resolve) => {
  resolve(() => ({
    View:
      <Router>
        <Main>
          <Todos pattern="/" />
          <Todos pattern="/:todoId/:filter(all|active|completed)?" />
        </Main>
      </Router>
  }))
})
@style(base)
export default class Index extends React.PureComponent {
  render() {
    const {View} = this.props
    return <View />
  }
}
