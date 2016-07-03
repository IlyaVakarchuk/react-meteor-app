import { Meteor } from 'meteor/meteor';

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
				console.log(res);
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
				console.log(res);
			}
		});	
	}
}

export default new Auth;