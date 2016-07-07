import React from 'react';

import Input from './Input';
import Button from './Button';

import User from '../logic/User.js';

const Profile = class Profile extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      username : {
        state : false,
        value : ''
      },
      email : {
        state : false,
        value : ''
      },
      password : {
        state : false,
        value : ''
      }
    }
    
    this.onEditParam = this.onEditParam.bind(this);
    this.onSaveParam = this.onSaveParam.bind(this);
  }

  onEditParam (input) {
    switch (input) {
      case 'username' :
        this.setState({ username : { state : !this.state.username.state, value : ''}});
        break;
      case 'email' :
        this.setState({email : { state : !this.state.email.state, value : ''}});
        break;
      case 'password' :
        this.setState({password : { state : !this.state.password.state, value : ''}});
        break;
    }
  }

  onSaveParam (val) {
    if (this.state.username.value.length > 0) {
      User.changeUsername(this.state.username.value, (res) => {
        if (res) {
          this.setState({username : { state : false, value : '' }});
          this.props.onProfileUpdate();
        }
      });
    }

    if (this.state.email.value.length > 0) {
      User.changeEmail(this.state.email.value, (res) => {
        if (res) {
          this.setState({email : { state : false, value : '' }});
          this.props.onProfileUpdate();
        }
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({show : nextProps.state})
  }

  render () {
    return (
      <div id='profile'>
        <div className='title'> Profile Settings </div>
        <div className='username'>
          <span className='section-title'>Username</span>
          <span className='section-value'> 
            {this.state.username.state ? <Input inputValue={this.state.username} type={ 'text' } placeholder={ 'Username' }/> : <span className='value' onClick={ () => this.onEditParam('username') } >{ Meteor.user().username }</span> } 
            <i className="fa fa-pencil" aria-hidden="true" onClick={ () => this.onEditParam('username') }></i>
          </span>
        </div>
        <div className='email'>
          <span className='section-title'>email</span>
          <span className='section-value'> 
            {this.state.email.state ? <Input inputValue={this.state.email} type={ 'email' } placeholder={ 'Email' }/> : <span className='value' onClick={ () => this.onEditParam('email') } >{ Meteor.user().emails[0].address }</span> } 
            <i className="fa fa-pencil" aria-hidden="true" onClick={ () => this.onEditParam('email') }></i>
          </span>
        </div>
        <div className='password'>
          <span className='section-title'>password</span>
          <span className='section-value'> 
            {this.state.password.state ? <Input inputValue={this.state.password} type={ 'password' } placeholder={ 'Password' }/> : <span className='value' onClick={ () => this.onEditParam('password') } > ******** </span> } 
            <i className="fa fa-pencil" aria-hidden="true" onClick={ () => this.onEditParam('password') }></i>
          </span>
        </div>
        <div className='save-setting-btn'>
          { (this.state.username.state || this.state.email.state || this.state.password.state) ? <Button text={'Save'} action={ this.onSaveParam }/> : false }
        </div>
      </div>
    )
  }
};

export default Profile; 