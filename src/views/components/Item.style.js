import imgChecked from '../../../assets/img/checked.svg'
import imgUnchecked from '../../../assets/img/unchecked.svg'

export default ({css}) => {
  css('.item', {
    borderBottom: '1px solid #ededed',
    overflow: 'hidden',
    position: 'relative',
  })

  css('.item:last-child', {
    borderBottom: 'none',
  })

  css('.checkbox', {
    left: '-9999px',
    position: 'absolute',
    userSelect: 'none',
  })

  css('.checkbox + label', {
    bottom: '0',
    height: '40px',
    margin: 'auto 0',
    outline: 'none',
    position: 'absolute',
    top: '0',
    width: '40px',
  })

  css('.checkbox + label:after', {
    content: `url(${imgUnchecked})`,
  })

  css('.checkbox:checked + label:after', {
    content: `url(${imgChecked})`,
  })

  css('.button', {
    appearance: 'none',
    background: 'none',
    border: 'none',
    bottom: '5px',
    color: '#cc9a9a',
    display: 'none',
    fontSize: '30px',
    margin: 'auto 0',
    outline: 'none',
    position: 'absolute',
    right: '0',
    top: '0',
    userSelect: 'none',
    width: '60px',
  })

  css('.item:hover .button', {
    display: 'inline',
  })

  css('.button:after', {
    content: '"×"',
  })

  css('.button:hover', {
    color: '#af5b5e',
  })

  css('.text', {
    display: 'block',
    fontSize: '24px',
    lineHeight: '1.1em',
    padding: '16px 60px 16px 60px',
    transition: 'color 0.4s',
    whiteSpace: 'pre-line',
    wordBreak: 'break-all',
  })

  css('.text.completed', {
    color: '#d9d9d9',
    textDecoration: 'line-through',
  })

  css('.item > input[type="text"]', {
    lineHeight: '1.1em',
  })
}
