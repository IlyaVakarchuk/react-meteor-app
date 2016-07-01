import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from './App';

const About = React.createClass({
	render () {
		return (
			<strong>About</strong>
		)
	}
});

const Index = React.createClass({
	render () {
		return (
			<strong>Index</strong>
		)
	}
});

const Home = React.createClass({
	render () {
		return (
			<strong>Home</strong>
		)
	}
})

var Routes = React.createClass({
  render () {
    return (
      <Router history={ browserHistory }>
  		<Route path="/" component={ App }>
  			<Route path="/home" component={ About } />
  			<Route path="auth" component={ Index } />
  		</Route>
  	</Router>
    );  
  }
})

export default Routes;