import React, { PureComponent } from 'react'


class Title extends PureComponent {
  render() {
    const { content, style, className } = this.props

    return (
      <h1 className={['Title', className].join(' ')} style={{ ...style || {} }}>{ content }</h1>
    )
  }
}

export default Title
