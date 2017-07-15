import React from 'react'
import ReactDOMServer from 'react-dom/server'
import environment from 'frontful-environment'
import initialize from '../../../common/initialize'
import {Style, style} from 'frontful-style'

function compileContext(element, options) {
  const {models, resolver} = initialize(element, options)

  if (environment.coldreload.state) {
    models.deserialize(environment.coldreload.state)
  }

  return resolver.execute().then((Application) => {
    const styleManagerSession = style.manager.getSession(options.req.headers['user-agent'])
    const view = ReactDOMServer.renderToString(
      <Style session={styleManagerSession}>
        <Application />
      </Style>
    )

    return {
      style: styleManagerSession.renderToString(),
      state: models.renderToString(),
      view: view,
    }
  })
}

export default compileContext
