import React from 'react';
import Button from './Button';
import Input from './Input';

var AuthForm = {
  login : {
    type : 'text',
    placeholder : 'Username',
  },
  password : {
    type : 'password',
    placeholder : 'Password',
  },
  buttons : {
    login : {
      text : 'Login'
    },
    registration : {
      text : 'Registration'
    }
  }
};

var Auth = React.createClass ({
  getInitialState : function () {
    return {
      login : true,
      registration : false
    };
  },

  onChangePanel : function (e) {
    e.preventDefault();
    this.setState({login : !this.state.login, registration : !this.state.registration});
  },

  render () {
    return (
      <div id='modal-auth'> 
      <nav>
        <a className={ this.state.login ? 'active' : '' } data-panel='login' onClick={ this.onChangePanel } >Login</a>
        <a className={ this.state.registration ? 'active' : '' } data-panel='registration' onClick={ this.onChangePanel } >Registartion</a>
      </nav>

      { this.state.login ? <LoginPanel /> : <RegistrationPanel /> }

      </div>
    )
  }
});

var LoginPanel = React.createClass({
  render : function() {
    return (
      <div className="login">
        <div className='title'>
          <span className='level-01'>Auth on platform</span>
          <span className='level-02'>Enter yours data in form and enter to site.</span>
        </div>
        <form>
          <Input data={ AuthForm.login } />
          <Input data={ AuthForm.password } />
          <Button data={ AuthForm.buttons.login } />
        </form>
      </div>
    )
  }
});

var RegistrationPanel = React.createClass({
  render : function() {
    return (
      <div className="registration">
          <div className='title'>
            <span className='level-01'>Begin apart of platform</span>
            <span className='level-02'>Enter yours data in form and enter to site.</span>
          </div>
          <form>
            <Input data={ AuthForm.login } />
            <Input data={ AuthForm.password } />
            <Input data={ AuthForm.password } />
            <Button data={ AuthForm.buttons.registration } />            
          </form>
        </div>
    )
  }
})


export default Auth;