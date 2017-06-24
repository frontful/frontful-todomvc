export function font(size, weight) {
  return {
    fontSize: size ? `${size}px` : 'inherit',
    fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`,
    WebkitFontSmoothing: 'antialiased',
    MozFontSmoothing: 'antialiased',
    fontSmoothing: 'antialiased',
    fontWeight: weight ? `${weight}` : '200',
  }
}
