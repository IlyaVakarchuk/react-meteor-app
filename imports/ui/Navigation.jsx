import React from 'react';

import { Session } from 'meteor/session';

const Navigation = class Navigation extends React.Component {
	render () {
		return (
			<ul className='navigation'>
        { Session.get("auth") ? <li><a href="#/home">Home</a></li> : <li><a href="#/auth">Auth</a></li> }
        <li><a href="#/about">About</a></li>
        { Session.get("auth") ? <li><a href="#/logout">Logout</a></li> :false }
			</ul>  
		);  
	}
}

export default Navigation;