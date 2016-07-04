import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Accounts } from 'meteor/accounts-base';

let User = new Mongo.Collection('user');

Meteor.methods({
	'auth' : (params) => {
		let res = User.findOne(params)
		if (res != undefined) {
			return { state: true, msg : 'Success' };
		} else {
			return { state: false, msg : 'Error' };
		}
	},
	'registration' : (params) => {
		let res = User.findOne({login : params.login});	
		if (res == undefined) {
			let id = User.insert(params);
			if (id) {
				return { state: true, msg : 'Success' };
			} else {
				return { state: false, msg : 'Error' };
			}
		} else {
			return { state: false, msg : 'Error' };
		}
	}
});