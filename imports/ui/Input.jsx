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
    this.props.inputValue.value = e.target.value;
  }

  render () {
    return(
      <input className='input' type={ this.props.type } placeholder={ this.props.placeholder } onChange={ this.onChangeHandler } value={ this.state.value }/>
    )
  }
};

export default Input;