import React from 'react'
import {style} from 'frontful-style'
import {resolver} from 'frontful-resolver'
import Input from './Input'

@resolver((resolve) => {
  resolve(({item, remove}) => ({
    id: item.id,
    remove: remove,
    completed: item.completed,
    text: item.text,
    toggle: item.toggle,
    Input: <Input item={item} />
  }))
})
@style(require('./Item.style'))
export default class Item extends React.PureComponent {
  state = {
    mode: 'view'
  }

  toggleModes = () => {
    this.setState({
      mode: this.state.mode === 'view' ? 'edit' : 'view'
    })
  }

  render() {
    const {style, completed, text, toggle, Input, remove, id} = this.props

    return (
      <div className={style.css('item')}>
        {this.state.mode === 'view' ?
          <div>
            <input
              id={id}
              className={style.css('checkbox')}
              type="checkbox"
              checked={completed}
              onChange={toggle}
            />
            <label htmlFor={id}></label>
            <label
              className={style.css('text', completed && 'completed')}
              onDoubleClick={this.toggleModes}>
              {text}
            </label>
            <button className={style.css('button')} onClick={remove} />
          </div> :
          <Input onBlur={this.toggleModes} focus/>
        }
      </div>
    )
  }
}
