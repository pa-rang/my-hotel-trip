import React from 'react'

class Input extends React.Component {
  renderCount = 0;

  render() {
    const { type, placeholder, value, onChange } = this.props
    console.log(placeholder, 'Rendered', ++this.renderCount)

    return <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
  }
}

export default Input;
