import {font} from '../style/utils'

export default ({css, media, theme: {roundness}}) => {
  css('.footer', {
    color: '#777777',
    padding: '10px 15px',
    height: '20px',
    textAlign: 'center',
    position: 'relative',
  })

  // Media queries can be written like nested css blocks
  css('@media screen and (max-width: 430px)', ({css}) => {
    css('.footer', {
      height: '50px',
    })
  })

  css('.footer:before ', {
    content: `''`,
    position: 'absolute',
    right: '0',
    bottom: '0',
    left: '0',
    height: '17px',
    overflow: 'hidden',
    boxShadow: roundness ? 'none' : `
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

  //Media queries can be written using extensions
  media.phone(({css}) => {
    css('.filters', {
      bottom: '10px',
    })
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
    ...font(),
    color: 'inherit',
    verticalAlign: 'baseline',
    appearance: 'none',
  })

  css('.button:hover', {
    textDecoration: 'underline',
  })
}
