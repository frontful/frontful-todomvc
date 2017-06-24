export const media = {
  phone: function({css}) {
    return function(...args) {
      css(`@media screen and (max-width: 430px)`, ...args)
    }
  }
}
