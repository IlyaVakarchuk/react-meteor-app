import { Meteor } from 'meteor/meteor';

import React from 'react';
import { render } from 'react-dom';
import { Accounts } from 'meteor/accounts-base';
import Routes from '../imports/ui/Routes.jsx';

import '../imports/startup/accounts-config.js'


Meteor.startup(() => {
  if (Meteor.user()) {
    Session.set('auth', true);
  }
  //Meteor.logout();
  //Accounts.createUser({username : 'ilyavakarchuk', email : 'ilya@mail.com' password : '123qwe'});
//   Meteor.loginWithPassword('ilya@mail.com', '123qwe', function(){
//     console.log("You initiated the login process.");
// });
  // if (Meteor.user()) {
  //   Session.set('auth', true);
  // }
  //Meteor.logout();
  // Meteor.loginWithPassword('ilya', '123qwe', (err) => {
  //   console.log(err)
  // })
  // Meteor.loginWithPassword('ilya', '123qwe', (err) => {
  //   console.log(err)
  // })
  console.log(Meteor.user())
// Accounts.createUser({email : 'ilya', password : '123qwe'}, () => {
      
//     });
  render(<Routes />, document.getElementById('main-wrap'));
})
