import React from 'react';
import { IndexLink, Link } from 'react-router';

var Navigation = React.createClass({
  render () {
    return (
      <ul className='navigation'>
        <li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
        <li><Link to="/auth">Auth</Link></li>
      </ul>  
    );  
  }
})

export default Navigation;