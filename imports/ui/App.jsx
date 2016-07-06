import React from 'react';

import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';

import { Router, Route, Link, browserHistory } from 'react-router'

import Auth from './Auth';
import About from './About';
import Home from './Home';
import Navigation from './Navigation';
import SplashScreen from './SplashScreen';
import NotFoundPage from './NotFoundPage';


let Page = class Page extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='current-layer'>
        { Session.get("auth")  ? false : <SplashScreen /> }
        <Navigation />
        { this.props.children }
      </div>
    )
  }
}

const App = class App extends React.Component {
  constructor() {
    super();

    this.state = {
      route : window.location.hash.substr(1),
    };

    this.onCheckAuth = this.onCheckAuth.bind(this);
  }

  onCheckAuth (nextState, replace) { 
    if (nextState.location.pathname == '/') {
      if (Session.get("auth")) {
        replace('/home');
      } 
    } else {
      if (!Session.get("auth")) {
        replace('/');
      }
    }
  }

  render () {
    return (
      <div>
      <Router history={browserHistory}>
        <Route path="/" component={Page} onEnter={this.onCheckAuth}>
          <Route path="auth" component={Auth}/>
          <Route path="about" component={About}/>
          <Route path="home" component={Home} onEnter={this.onCheckAuth} />
          <Route path="*" component={NotFoundPage} />
        </Route>
      </Router>
      </div>
    );  
  }
}

export default App;