import { Meteor } from 'meteor/meteor';

import React from 'react';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';


Meteor.startup(() => {
  if (Meteor.userId()) {
    Session.set('auth', true);
  }
 	render(<App />, document.getElementById('main-wrap'));
})
