import React from 'react';
import { IndexLink, Link } from 'react-router';

const Navigation = class Navigation extends React.Component {
	render () {
		return (
			<ul className='navigation'>
				<li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
				<li><Link to="/auth">Auth</Link></li>
			</ul>  
		);  
	}
}

export default Navigation;