export default ({css}) => {
  css('.footer', {
    color: '#777777',
    height: '20px',
    padding: '10px 15px',
    position: 'relative',
    textAlign: 'center',
  })

  css('@media screen and (max-width: 430px)', ({css}) => {
    css('.footer', {
      height: '50px',
    })
  })

  css('.footer:before ', {
    bottom: '0',
    boxShadow: `
      0 1px 1px rgba(0, 0, 0, 0.2),
      0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2),
      0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2)
    `,
    content: `''`,
    height: '17px',
    left: '0',
    overflow: 'hidden',
    position: 'absolute',
    right: '0',
  })

  css('.status', {
    float: 'left',
    textAlign: 'left',
  })

  css('.filters', {
    left: 0,
    position: 'absolute',
    right: 0,
  })

  css('@media screen and (max-width: 430px)', ({css}) => {
    css('.filters', {
      bottom: '10px',
    })
  })

  css('.filter', {
    border: '1px solid transparent',
    borderRadius: '3px',
    color: 'inherit',
    cursor: 'default',
    margin: '5px',
    outline: 'none',
    padding: '3px 7px',
    textDecoration: 'none',
  })

  css('.filter:hover', {
    borderColor: 'rgba(175, 47, 47, 0.1)'
  })

  css('.filter.active', {
    borderColor: 'rgba(175, 47, 47, 0.2)',
  })

  css('.button', {
    appearance: 'none',
    background: 'none',
    border: '0',
    color: 'inherit',
    cursor: 'pointer',
    float: 'right',
    fontSize: 'inherit',
    lineHeight: '20px',
    margin: '0',
    outline: 'none',
    padding: '0',
    position: 'relative',
    textDecoration: 'none',
    verticalAlign: 'baseline',
  })

  css('.button:hover', {
    textDecoration: 'underline',
  })
}
