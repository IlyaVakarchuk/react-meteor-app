import React from 'react';

const Profile = class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      show : false,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({show : nextProps.state})
  }

  render () {
    return (
      <div id='profile'>
        <div className='title'> Profile Settings </div>
        <div className='username'>
          <span className='section-title'>Username</span>
          <span className='section-value'>Ilya Vakarchuk<i className="fa fa-pencil" aria-hidden="true"></i></span>
        </div>
        <div className='email'>
          <span className='section-title'>email</span>
          <span className='section-value'>IlyaVakarchuk@email.com<i className="fa fa-pencil" aria-hidden="true"></i></span>
        </div>
        <div className='password'>
          <span className='section-title'>password</span>
          <span className='section-value'>IlyaVakarchuk@email.com<i className="fa fa-pencil" aria-hidden="true"></i></span>
        </div>
      </div>
    )
  }
};

export default Profile; 