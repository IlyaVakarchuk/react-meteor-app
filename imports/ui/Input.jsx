import React from 'react';

var Input = React.createClass({
  getInitialState : function () {
    return {
      value : ''
    };
  },
  onChangeHandler : function(e) {
    this.setState({value : e.target.value})
  },
  render : function() {

    var type = this.props.data.type,
      placeholder = this.props.data.placeholder;
    return(
      <input className='input' type={ type } placeholder={ placeholder } onChange={ this.onChangeHandler } value={ this.state.value }/>
    )
  }
});

export default Input;