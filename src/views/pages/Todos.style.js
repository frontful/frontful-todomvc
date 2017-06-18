export default ({css}) => {
  css('.todos', {
    backgroundColor: '#fff',
    lineHeight: '1.4em',
    boxShadow: `
      0 2px 4px 0 rgba(0, 0, 0, 0.2),
      0 25px 50px 0 rgba(0, 0, 0, 0.1)
    `,
  })
}
