export default ({css, theme: {
  roundness
}}) => {
  css('.todos', {
    borderRadius: roundness ? `${roundness}px` : '0',
    backgroundColor: '#ffffff',
    lineHeight: '1.4em',
    boxShadow: `
      0 2px 4px 0 rgba(0, 0, 0, 0.2),
      0 25px 50px 0 rgba(0, 0, 0, 0.1)
    `,
  })
}
