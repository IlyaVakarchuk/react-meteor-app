import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Session } from 'meteor/session';

import { browserHistory } from 'react-router'

const Auth = class {
	auth(params) {	
		Meteor.loginWithPassword(params.login, params.password, (err) => {
    	if (!err) {
    		Session.set('auth', true);
    		browserHistory.push('home');
    	}
 		});
	}

	registration(params) {
		Accounts.createUser({email : params.login, password : params.password}, (err) => {
			if (!err) {
    		Session.set('auth', true);
    		browserHistory.push('home');
    	}
		});
	}
}

export default new Auth;