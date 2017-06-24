import {style} from 'frontful-style'

const placeholder = {
  color: '#e6e6e6',
  fontStyle: 'italic',
  fontWeight: '200',
}

export default style(({css}) => {
  css('html', {
    margin: '0',
    padding: '0',
  })

  css('body', {
    background: '#f5f5f5',
    color: '#4d4d4d',
    fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`,
    fontSize: '14px',
    fontSmoothing: 'antialiased',
    MozFontSmoothing: 'antialiased',
    WebkitFontSmoothing: 'antialiased',
    fontWeight: '200',
    margin: '0 auto',
    maxWidth: '550px',
    minWidth: '230px',
    padding: '0',
  })

  css('input, button', {
    fontFamily: 'inherit',
    fontSmoothing: 'inherit',
    WebkitFontSmoothing: 'inherit',
    MozFontSmoothing: 'inherit',
    fontWeight: 'inherit',
  })

  css('input::-webkit-input-placeholder', placeholder)
  css('input::-moz-placeholder', placeholder)
  css('input::input-placeholder', placeholder)
})
