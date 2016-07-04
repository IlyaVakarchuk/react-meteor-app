import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

const Auth = class {
	constructor() {
		this.url = 'http://localhost:3000/api/auth';
  }

	auth(params) {	
		console.log('!')
		Meteor.call('auth', params, (err, res) => {
			if (err) {
				console.log(err);
			} else {
				if (res.state) {
					Session.set('auth', true);
				}
			}
		});
	}

	registration(params) {
		Meteor.call('registration', params, (err, res) => {
			console.log(err)
			console.log(res)
			if (err) {
				console.log(err);
			} else {
				if (res.state) {
					Session.set('auth', true);
				}
			}
		});	
	}
}

export default new Auth;