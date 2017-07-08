import React from 'react'
import ReactDOM from 'react-dom'
import Views from '../views'
import initialize from '../common/initialize'
import {Style} from 'frontful-style'

const {models, resolver} = initialize(<Views />)

window.frontful.environment.coldreload.serializer = () => models.serialize()
window.frontful.environment.coldreload.deserializer = (state) => models.deserialize(state)

resolver.execute().then((View) => {
  ReactDOM.render(
    <Style>
      <View />
    </Style>,
    document.getElementById('app')
  )
})
