import React from 'react'
import ReactDOMServer from 'react-dom/server'
import initialize from '../../../common/initialize'
import {Style, style} from 'frontful-style'

function compileContext(element, options) {
  const {models, resolver} = initialize(element, options)

  if (global.frontful.environment.coldreload.state) {
    models.deserialize(global.frontful.environment.coldreload.state)
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
