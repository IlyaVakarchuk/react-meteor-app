import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from './App';
import Auth from './Auth';

const Routes = class Routes extends React.Component {
  render () {
    return (
      <Router history={ browserHistory }>
  		<Route path="/" component={ App }>
  			<Route path="/auth" component={ Auth } />
  		</Route>
  	</Router>
    );  
  }
}

export default Routes;