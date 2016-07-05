import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Session } from 'meteor/session';

const User = class User {
  constructor() {
    this.user = Meteor.user();
  }

  changeUsername(username) {
    Accounts.setUsername(this.user.id, username);
  }
}

export default new User;