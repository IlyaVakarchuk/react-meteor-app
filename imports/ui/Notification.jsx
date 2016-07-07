import React from 'react';

const Notification = class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show : this.props.show,
      message : ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.setState({show : true, message : nextProps.text});
    } else {
      this.setState({show : false, message : nextProps.text});
    }
  }

  render () {
    let view = '';
    if (this.state.show) {
      view = <div id='notification'><div className='notification-content'>{ this.state.message }</div></div>;
    } else {
      view = false;
    }
    return (
      view 
    )
  }
};

export default Notification; 