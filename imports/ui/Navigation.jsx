import React from 'react';
import { Router, Route, Link } from 'react-router'
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { browserHistory } from 'react-router'

const Navigation = class Navigation extends React.Component {
  constructor() {
    super();

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout () {
    Meteor.logout();
    Session.set('auth', false);
    browserHistory.pushState('/');
  }

	render () {
		return (
			<ul className='navigation'>
        { Session.get("auth") ? <li><Link to="/home">Home</Link></li> : <li><Link to="/auth">Auth</Link></li> }
        <li><Link to="/about">About</Link></li>
        { Session.get("auth") ? <li><a onClick={this.onLogout}>Logout</a></li> :false }
			</ul>  
		);  
	}
}

export default Navigation;