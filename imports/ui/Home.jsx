import { Meteor } from 'meteor/meteor';
import React from 'react';

const Home = class Home extends React.Component {
  render() {
    console.log(Meteor.user())
    return (
      <div id="home">
        <div className='user-profile'>
          <div className='user-avatar'>
            <img src="images/avatar.png" /> 
          </div>
          <div className='user-data'>
            <div className='user-name'>{ Meteor.user().username }</div>
            <div className='email'>{ Meteor.user().emails[0].address } </div>
          </div>
        </div> 
      </div>  
    )   
  }
}

export default Home;
