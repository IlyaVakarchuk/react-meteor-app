import { Meteor } from 'meteor/meteor';
import React from 'react';

import Profile from './Profile';
import Posts from './Posts';
import PostList from '../logic/Posts.js';

const Home = class Home extends React.Component {
  constructor() {
    super();

    this.onShowProfile = this.onShowProfile.bind(this);
    this.onProfileUpdate = this.onProfileUpdate.bind(this);

    this.state = {
      profileShow : false
    }
  }

  onShowProfile() {
    this.setState({profileShow : !this.state.profileShow})
  }

  onProfileUpdate() {
    this.forceUpdate()
  }

  render() {
    return (
      <div id="home">
        {this.state.profileShow ? <Profile onProfileUpdate = { this.onProfileUpdate } /> : false }
        <div className='user-profile'>
          <div className='user-avatar'>
            <img onClick={ this.onShowProfile } src="images/avatar.png" /> 
          </div>
          <div className='user-data'>
            <div className='user-name'>{ Meteor.user().username }</div>
            <div className='email'>{ Meteor.user().emails[0].address } </div>
          </div>
        </div> 

        <Posts postlist={PostList.getList()}/>
      </div>  
    )   
  }
}

export default Home;
