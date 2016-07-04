import React from 'react';

import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';


import App from './App';
import Auth from './Auth';
import About from './About';
import Home from './Home';

const Routes = class Routes extends React.Component {
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
        Page = App;
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
        Page = App;
        break;
    }


    return (
      <div>
        <App />
        <Page />
      </div>
    );  
  }
}

export default Routes;