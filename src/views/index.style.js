import {style} from 'frontful-style'
import {theme} from './style/theme'
import {font} from './style/utils'
import {media} from './style/media'

style.manager.dependencies = {theme}
style.manager.extensions = {media}

export default ({css, theme: {colors: {appBackground}}}) => {
  css('body, html', {
    margin: '0',
    padding: '0',
  })

  css('body', {
    background: appBackground,
    color: '#4d4d4d',
    margin: '0 auto',
    maxWidth: '550px',
    minWidth: '230px',
    ...font(14),
  })

  const placeholder = {
    color: '#e6e6e6',
    fontStyle: 'italic',
    fontWeight: '200',
  }

  css('input::-webkit-input-placeholder', placeholder)
  css('input::-moz-placeholder', placeholder)
  css('input::input-placeholder', placeholder)
}
