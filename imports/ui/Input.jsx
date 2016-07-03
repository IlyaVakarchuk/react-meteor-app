import React from 'react';

const Input = class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      value : ''
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler (e) {
    this.setState({value : e.target.value})
    this.props.data.userData = e.target.value;
  }

  render () {

    var type = this.props.data.type,
      placeholder = this.props.data.placeholder;
    return(
      <input className='input' type={ type } placeholder={ placeholder } onChange={ this.onChangeHandler } value={ this.state.value }/>
    )
  }
};

export default Input;