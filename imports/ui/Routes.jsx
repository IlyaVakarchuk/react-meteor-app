import React from 'react';

import App from './App';
import Auth from './Auth';
import About from './About';

const Routes = class Routes extends React.Component {
  constructor() {
    super();

    this.state = {
      route : window.location.hash.substr(1)
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
        Page = Auth;
        break;
      case '/about':
        Page = About;
        break;
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