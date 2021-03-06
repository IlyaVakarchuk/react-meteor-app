import React from 'react';

import { Meteor } from 'meteor/meteor';

import Button from './Button';
import Input from './Input';

import AuthLogic from '../logic/Auth.js';

import Notification from './Notification';

const Auth = class Auth extends React.Component {
  constructor() {
    super();

    this.state = {
      login : true,
      registration : false,
      settings : {
        login : {
          value : ''
        },
        password : {
          passVal01 : {
            value : ''
          },
          passVal02 : {
            value : ''
          }
        }
      },
      notificationText : '',
      notificationState : false
    };

    this.onChangePanel = this.onChangePanel.bind(this);
    this.switchNotification = this.switchNotification.bind(this);
  }

  onChangePanel (e) {    
    this.setState({login : !this.state.login, registration : !this.state.registration});
  }

  switchNotification(state, msg) {
    this.setState({notificationState : state, notificationText : msg});
  }

  render () {
    return (
      <div id='modal-auth'> 
      <nav>
        <a className={ this.state.login ? 'active' : '' } data-panel='login' onClick={ this.onChangePanel } >Login</a>
        <a className={ this.state.registration ? 'active' : '' } data-panel='registration' onClick={ this.onChangePanel } >Registartion</a>
      </nav>

      { this.state.login ? <LoginPanel switchNotification={this.switchNotification} data={ this.state.settings }/> : <RegistrationPanel switchNotification={this.switchNotification} data={ this.state.settings }/> }
      <Notification show={ this.state.notificationState } text={ this.state.notificationText } />
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
    AuthLogic.auth(
      {
        login : this.props.data.login.value, 
        password : this.props.data.password.value
      }, (msg) => {
        if (msg) {
          this.props.switchNotification(true, msg);
          setTimeout(() => {
            this.props.switchNotification(false, '');
          }, 2000);
        }
    });
  }

  render () {
    return (
      <div className="login">
        <div className='title'>
          <span className='level-01'>Auth on platform</span>
          <span className='level-02'>Enter yours data in form and enter to site.</span>
        </div>
        <form>
          <Input type={ 'email' } placeholder={ 'Email' } inputValue={this.props.data.login}/>
          <Input type={ 'password' } placeholder={ 'Password' } inputValue={this.props.data.password}/>
          <Button action={ this.onLogin } text={ 'Login' } />
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
   AuthLogic.registration(
    {
      login : this.props.data.login.value, 
      password01 : this.props.data.password.passVal01.value, 
      password02 : this.props.data.password.passVal02.value
    }, (msg) => {
      if (msg) {
        this.props.switchNotification(true, msg);
        setTimeout(() => {
          this.props.switchNotification(false, '');
        }, 2000);
      }
    }); 
  }

  render () {
    return (
      <div className="registration">
          <div className='title'>
            <span className='level-01'>Begin apart of platform</span>
            <span className='level-02'>Enter yours data in form and enter to site.</span>
          </div>
          <form>
            <Input type={ 'email' } placeholder={ 'Email' } inputValue={this.props.data.login} />
            <Input class='pass01' type={ 'password' } placeholder={ 'Password' } inputValue={this.props.data.password.passVal01} />
            <Input class='pass02' type={ 'password' } placeholder={ 'Password repeat' } inputValue={this.props.data.password.passVal02} />
            <Button action={ this.onRegistration } text={ 'Registration' } />            
          </form>
        </div>
    )
  }
}


export default Auth;