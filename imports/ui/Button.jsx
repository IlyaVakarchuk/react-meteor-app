import React from 'react';

const Button = class Button extends React.Component {
  render () {
    let text = this.props.data.text;
    return (
      <button onClick={this.props.action}>{ text }</button>
    )
  }
};

export default Button; 