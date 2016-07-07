import React from 'react';

const SplashScreen = React.createClass({
  render() {
    return (
     <div id="splash-screen">
      <div className='header'>
      <div className='title'>
        <div className='level-01'>RectJS + MeteorJS</div>
        <div className='level-02'>Test App</div>
      </div>
        <img src="images/interface/icon.svg" />
      </div>
      <div className='footer'></div> 
     </div>    
    );  
  }
})

export default SplashScreen;