import {style as base} from './index.style'

import React from 'react'
import {Router} from 'frontful-router'
import {resolver} from 'frontful-resolver'
import {style} from 'frontful-style'

import Main from './layouts/Main'
import Todos from './pages/Todos'

@resolver.bind((resolve) => {
  resolve(() => ({
    Application: (
      <Router>
        <Main>
          <Todos selector="*" />
        </Main>
      </Router>
    ),
  }))
})
@style(base)
export default class Index extends React.PureComponent {
  render() {
    return (
      <this.props.Application />
    )
  }
}
