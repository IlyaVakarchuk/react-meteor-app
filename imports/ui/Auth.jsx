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
          value : ''
        },
        password : {
          type : 'password',
          placeholder : 'Password',
          passVal01 : {
            value : ''
          },
          passVal02 : {
            value : ''
          }
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
    AuthLogic.auth({login : this.props.data.login.value, password : this.props.data.password.value});
  }

  render () {
    return (
      <div className="login">
        <div className='title'>
          <span className='level-01'>Auth on platform</span>
          <span className='level-02'>Enter yours data in form and enter to site.</span>
        </div>
        <form>
          <Input type={ this.props.data.login.type } placeholder={ this.props.data.login.placeholder } inputValue={this.props.data.login}/>
          <Input type={ this.props.data.password.type } placeholder={ this.props.data.password.placeholder } inputValue={this.props.data.password}/>
          <Button action={ this.onLogin } text={ this.props.data.buttons.login.text } />
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
   AuthLogic.registration({login : this.props.data.login.value, password01 : this.props.data.password.passVal01.value, password02 : this.props.data.password.passVal02.value}); 
  }

  render () {
    return (
      <div className="registration">
          <div className='title'>
            <span className='level-01'>Begin apart of platform</span>
            <span className='level-02'>Enter yours data in form and enter to site.</span>
          </div>
          <form>
            <Input type={ this.props.data.login.type } placeholder={ this.props.data.login.placeholder } inputValue={this.props.data.login} />
            <Input class='pass01' type={ this.props.data.password.type } placeholder={ this.props.data.password.placeholder } inputValue={this.props.data.password.passVal01} />
            <Input class='pass02' type={ this.props.data.password.type } placeholder={ this.props.data.password.placeholder } inputValue={this.props.data.password.passVal02} />
            <Button action={ this.onRegistration } text={ this.props.data.buttons.registration.text } />            
          </form>
        </div>
    )
  }
}


export default Auth;