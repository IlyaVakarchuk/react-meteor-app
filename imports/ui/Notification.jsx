import React from 'react';

const Notification = class Notification extends React.Component {
  constructor() {
    super();

    this.state = {
      show : true,
      message : '',
      delay : 2000
    }
    this.onShowNotification = this.onShowNotification.bind(this);
    this.onHideNotification = this.onHideNotification.bind(this);

  }

  test() {
    console.log('dfsdfsd')
  }

  onShowNotification () {
    this.setState({show : true});
    setTimeout(this.onHideNotification,this.state.delay);
  }

  onHideNotification () {
    this.setState({show : false}); 
  }

  componentWillReceiveProps(test) {
    console.log(test)
    console.log('update')
  }

  render () {
    let view = '';
    console.log('change')
    if (this.state.show) {
      view = <div id='notification'><div className='notification-content'> dsv v</div></div>;
    } else {
      view = false;
    }
    return (
      view 
    )
  }
};

export default Notification; 