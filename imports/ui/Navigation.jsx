import React from 'react';

const Navigation = class Navigation extends React.Component {
	render () {
		return (
			<ul className='navigation'>
				<li><a href="#/">Home</a></li>
				<li><a href="#/auth">Auth</a></li>
        <li><a href="#/about">About</a></li>
			</ul>  
		);  
	}
}

export default Navigation;