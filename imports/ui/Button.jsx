import React from 'react';

var Button = React.createClass({
  render : function() {
    var text = this.props.data.text;
    return (
      <button>{ text }</button>
    )
  }
});

export default Button; 