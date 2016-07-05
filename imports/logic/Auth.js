import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Session } from 'meteor/session';

import { browserHistory } from 'react-router'

const Auth = class {

	constructor() {
		this.url = 'http://localhost:3000/api/auth';
  }

	auth(params) {	
		Meteor.loginWithPassword(params.login, params.password, (err) => {
    	console.log(err);
    	if (!err) {
    		Session.set('auth', true);
    		browserHistory.pushState('/');
    	}
 		});
		// Meteor.call('auth', params, (err, res) => {
		// 	if (err) {
		// 		console.log(err);
		// 	} else {
		// 		if (res.state) {
		// 			Session.set("auth", true);
		// 			window.location.hash = '#/home';
		// 		}
		// 	}
		// });
	}

	registration(params) {
		Accounts.createUser({email : params.login, password : params.password}, (err) => {
			if (!err) {
    		Session.set('auth', true);
    		browserHistory.pushState('/');
    	}
		});
		// Meteor.call('registration', params, (err, res) => {
		// 	if (err) {
		// 		console.log(err);
		// 	} else {
		// 		if (res.state) {
		// 			Session.set("auth", true);
		// 			window.location.hash = '#/home';
		// 		}
		// 	}
		// });	
	}
}

export default new Auth;