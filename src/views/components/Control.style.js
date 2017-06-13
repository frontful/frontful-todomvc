export const style = ({css}) => {
  css('.footer', {
    color: '#777',
    padding: '10px 15px',
    height: '20px',
    textAlign: 'center',
    position: 'relative',
  })

  css('.footer:before ', {
    content: `''`,
    position: 'absolute',
    right: '0',
    bottom: '0',
    left: '0',
    height: '17px',
    overflow: 'hidden',
    boxShadow: `
      0 1px 1px rgba(0, 0, 0, 0.2),
      0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2),
      0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2)
    `
  })

  css('.status', {
    float: 'left',
    textAlign: 'left',
  })

  css('.filters', {
    position: 'absolute',
    right: 0,
    left: 0,
  })

  css('.filter', {
    outline: 'none',
    color: 'inherit',
    margin: '5px',
    padding: '3px 7px',
    textDecoration: 'none',
    border: '1px solid transparent',
    borderRadius: '3px',
    cursor: 'default',
  })

  css('.filter:hover', {
    borderColor: 'rgba(175, 47, 47, 0.1)'
  })

  css('.filter.active', {
    borderColor: 'rgba(175, 47, 47, 0.2)',
  })

  css('.button', {
    outline: 'none',
    float: 'right',
    position: 'relative',
    lineHeight: '20px',
    textDecoration: 'none',
    cursor: 'pointer',

    margin: '0',
    padding: '0',
    border: '0',
    background: 'none',
    fontSize: '100%',
    verticalAlign: 'baseline',
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    color: 'inherit',
    appearance: 'none',
    WebkitFontSmoothing: 'antialiased',
    MozFontSmoothing: 'antialiased',
    fontSmoothing: 'antialiased',
  })

  css('.button:hover', {
    textDecoration: 'underline',
  })
}
