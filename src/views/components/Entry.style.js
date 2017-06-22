export default ({css}) => {
  css('.entry', {
    borderBottom: '1px solid #e6e6e6',
    background: 'rgba(0, 0, 0, 0.003)',
    boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0.03)',
    position: 'relative',
  })

  css('.entry:last-child', {
    borderBottom: 'none',
  })

  css('.entry > input[type="text"]', {
    lineHeight: '1.4em',
  })

  css('.checkbox', {
    position: 'absolute',
    left: '-9999px',
  })

  css('.checkbox + label', {
    position: 'absolute',
    top: '4px',
    left: '1px',
    bottom: '0',
    outline: 'none',
    margin: 'auto 0',
    transform: 'rotate(90deg)',
    color: 'rgb(230, 230, 230)',
  })

  css('.checkbox + label:after', {
    content: '"❯"',
    fontSize: '22px',
  })

  css('.checkbox:checked + label', {
    color: '#737373'
  })
}
