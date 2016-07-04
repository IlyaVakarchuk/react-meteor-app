import React from 'react';

import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';

import Auth from './Auth';
import About from './About';
import Home from './Home';
import Navigation from './Navigation';

const App = class App extends React.Component {
  constructor() {
    super();

    this.state = {
      route : window.location.hash.substr(1),
    };

    this.changeRoute = this.changeRoute.bind(this);
    this.changeRoute();
  }

  changeRoute () {
    window.addEventListener('hashchange', () => {
      this.setState({
        route : window.location.hash.substr(1)
      })
    })
  }

  render () {

    let Page;
    switch (this.state.route) {
      case '/':
        Page = About;
        break;
      case '/auth':
        if (!Session.get("auth")) {
          Page = Auth;   
        } else {
          Page = Home;
        }
        break;
      case '/about':
        Page = About;
        break;
      case '/home' :
        if (Session.get("auth")) {
          Page = Home;   
        } else {
          window.location.hash = "/";
        }        
        break;
      case '/logout':
        if (Session.get("auth")) {
          Meteor.logout();  
          Session.set("auth", false);
          window.location.hash = "/";
        }
      default:
        Page = About;
        break;
    }


    return (
      <div>
        <Navigation />
        <Page />
      </div>
    );  
  }
}

export default App;