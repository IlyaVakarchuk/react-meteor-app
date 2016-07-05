import { Meteor } from 'meteor/meteor';

import React from 'react';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';


Meteor.startup(() => {
  console.log(Meteor.user())
  if (Meteor.user()) {
    Session.set('auth', true);
  }
  render(<App />, document.getElementById('main-wrap'));
})
