export default ({css}) => {
  css('body, html', {
    margin: '0',
    padding: '0',
  })

  css('body', {
    background: '#f5f5f5',
    color: '#4d4d4d',
    font: `14px 'Helvetica Neue', Helvetica, Arial, sans-serif`,
    WebkitFontSmoothing: 'antialiased',
    MozFontSmoothing: 'antialiased',
    fontSmoothing: 'antialiased',
    fontWeight: '300',
    margin: '0 auto',
    maxWidth: '550px',
    minWidth: '230px',
  })

  const placeholder = {
    color: '#e6e6e6',
    fontStyle: 'italic',
    fontWeight: '300',
  }

  css('input::-webkit-input-placeholder', placeholder)
  css('input::-moz-placeholder', placeholder)
  css('input::input-placeholder', placeholder)
}
