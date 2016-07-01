import React from 'react';

import Navigation from './Navigation';

const App = React.createClass({
	render() {
		return (
			<div>
				<Navigation />
				{ this.props.children }
			</div>	
		)		
	}
});

export default App;
