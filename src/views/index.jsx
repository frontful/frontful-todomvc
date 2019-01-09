import style from './index.style'

import Main from './layouts/Main'
import React from 'react'
import Todos from './pages/Todos'
import {Router} from 'frontful-router'
import {resolver} from 'frontful-resolver'

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
@style
class Index extends React.PureComponent {
  render() {
    const {View} = this.props
    return <View />
  }
}

export default Index
