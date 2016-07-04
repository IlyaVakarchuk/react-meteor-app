import React from 'react';

import { Meteor } from 'meteor/meteor';

import Button from './Button';
import Input from './Input';

import AuthLogic from '../logic/Auth.js'

const Auth = class Auth extends React.Component {
  constructor() {
    super();

    this.state = {
      login : true,
      registration : false,
      settings : {
        login : {
          type : 'email',
          placeholder : 'Username',
          userData : {}
        },
        password : {
          type : 'password',
          placeholder : 'Password',
          userData : {}
        },
        buttons : {
          login : {
            text : 'Login'
          },
          registration : {
            text : 'Registration'
          }
        }
      }
    };

    this.onChangePanel = this.onChangePanel.bind(this);
  }

  onChangePanel (e) {
    e.preventDefault();
    
    this.setState({login : !this.state.login, registration : !this.state.registration});
  }

  render () {
    return (
      <div id='modal-auth'> 
      <nav>
        <a className={ this.state.login ? 'active' : '' } data-panel='login' onClick={ this.onChangePanel } >Login</a>
        <a className={ this.state.registration ? 'active' : '' } data-panel='registration' onClick={ this.onChangePanel } >Registartion</a>
      </nav>

      { this.state.login ? <LoginPanel data={ this.state.settings }/> : <RegistrationPanel data={ this.state.settings }/> }

      </div>
    )
  }
};

const LoginPanel = class LoginPanel extends React.Component {
  constructor() {
    super();
    this.onLogin = this.onLogin.bind(this); 
  }

  onLogin (e) {
    e.preventDefault();
    AuthLogic.auth({login : this.props.data.login.userData, password : this.props.data.password.userData});
  }

  render () {
    return (
      <div className="login">
        <div className='title'>
          <span className='level-01'>Auth on platform</span>
          <span className='level-02'>Enter yours data in form and enter to site.</span>
        </div>
        <form>
          <Input data={ this.props.data.login } />
          <Input data={ this.props.data.password } />
          <Button action={ this.onLogin } data={ this.props.data.buttons.login } />
        </form>
      </div>
    )
  }
};

const RegistrationPanel = class RegistrationPanel extends React.Component{
  constructor() {
    super();
    this.onRegistration = this.onRegistration.bind(this);
  }

  onRegistration () {
   AuthLogic.registration({login : this.props.data.login.userData, password : this.props.data.password.userData}); 
  }

  render () {
    return (
      <div className="registration">
          <div className='title'>
            <span className='level-01'>Begin apart of platform</span>
            <span className='level-02'>Enter yours data in form and enter to site.</span>
          </div>
          <form>
            <Input data={ this.props.data.login } />
            <Input data={ this.props.data.password } />
            <Input data={ this.props.data.password } />
            <Button action={ this.onRegistration } data={ this.props.data.buttons.registration } />            
          </form>
        </div>
    )
  }
}


export default Auth;