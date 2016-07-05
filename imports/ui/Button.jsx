import React from 'react';

const Button = class Button extends React.Component {
  render () {
    return (
      <button onClick={this.props.action}>{ this.props.text }</button>
    )
  }
};

export default Button; 