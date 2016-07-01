import { Meteor } from 'meteor/meteor';

import React from 'react';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';
import Routes from '../imports/ui/Routes.jsx';


Meteor.startup(() => {
  render(<Routes />, document.getElementById('main-wrap'));
})
