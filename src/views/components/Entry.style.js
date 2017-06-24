export default ({css}) => {
  css('.entry', {
    background: 'rgba(0, 0, 0, 0.003)',
    borderBottom: '1px solid #e6e6e6',
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
    bottom: '0',
    color: 'rgb(230, 230, 230)',
    left: '1px',
    margin: 'auto 0',
    outline: 'none',
    position: 'absolute',
    top: '4px',
    transform: 'rotate(90deg)',
  })

  css('.checkbox + label:after', {
    content: '"❯"',
    fontSize: '22px',
  })

  css('.checkbox:checked + label', {
    color: '#737373'
  })
}
