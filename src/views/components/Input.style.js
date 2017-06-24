import {font} from '../style/utils'

export default ({css}) => {
  css('.input', {
    padding: '16px 16px 16px 60px',
    border: 'none',
    margin: '0',
    width: '100%',
    outline: 'none',
    color: 'inherit',
    boxSizing: 'border-box',
    background: 'none',
    ...font(24),
  })
}
