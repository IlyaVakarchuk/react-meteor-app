import { Meteor } from 'meteor/meteor';

import React from 'react';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
	if (Meteor.loggingIn()) {
		Session.set('auth', true);
  	Meteor.call('start', () => {
  		Meteor.startup(() => {
			 	render(<App />, document.getElementById('main-wrap'));
			})
  	})
	} else {
 		render(<App />, document.getElementById('main-wrap'));
 	}
})
