export const style = ({css}) => {
  css('.header', {
    color: 'rgba(175, 47, 47, 0.15)',
    fontSize: '100px',
    fontWeight: '100',
    margin: '9px 0 4px 0',
    textAlign: 'center',
  })

  css('.footer', {
    color: '#bfbfbf',
    fontSize: '10px',
    lineHeight: '2em',
    marginTop: '60px',
    textAlign: 'center',
    textShadow: '0 1px 0 rgba(255, 255, 255, 0.5)',
  })

  css('.footer a:hover', {
    textDecoration: 'underline',
  })

  css('.footer a', {
    color: 'inherit',
    cursor: 'default',
    fontWeight: '400',
    textDecoration: 'none',
    outline: 'none',
  })
}
