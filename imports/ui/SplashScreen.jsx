import React from 'react';

const SplashScreen = React.createClass({
  render() {
    return (
     <div id="splash-screen">
      <div className='header'>
        <img src="images/interface/icon.svg" />
      </div>
      <div className='footer'></div> 
     </div>    
    );  
  }
})

export default SplashScreen;