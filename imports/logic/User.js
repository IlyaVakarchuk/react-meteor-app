import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Session } from 'meteor/session';

const User = class User {
  constructor() {
    this.userId = Meteor.userId();
  }

  changeUsername(username, callback) {
    Meteor.call('user:changeUsername', this.userId, username, (err, res) => {
      if (!err) {
    		if (callback) {
    			callback(true);
    		}
	    }
    })
  }

  changeEmail(email, callback) {
    Meteor.call('user:changeEmail', this.userId, email, (err, res) => {
      if (!err) {
    		if (callback) {
    			callback(true);
    		}
	    }
    })
  }
}

export default new User;