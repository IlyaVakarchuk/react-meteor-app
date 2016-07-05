import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Session } from 'meteor/session';

import { browserHistory } from 'react-router'

const Auth = class {

	constructor() {
		this.emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
	}

	auth(params) {	
		Meteor.loginWithPassword(params.login, params.password, (err) => {
    	if (!err) {
    		Session.set('auth', true);
    		browserHistory.push('home');
    	}
 		});
	}

	registration(params) {
		if ((params.login).match(this.emailPattern) != null) {
			if (params.password01 === params.password02 ) {
				Accounts.createUser({email : params.login, password : params.password01}, (err) => {
					if (!err) {
		    		Session.set('auth', true);
		    		browserHistory.push('home');
		    	}
				}); 
			} else {
				// invalide password
			}
		} else {
			// invalide email
		}
	}
}

export default new Auth;