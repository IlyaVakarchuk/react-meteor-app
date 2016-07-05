import React from 'react';

const PostItem = class PostItem extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className='posts-list-item'>
        <div className='title'>
          { this.props.post.title}
        </div>
        <div className='text'>
          { this.props.post.desc}
        </div>
      </div>
    )
  }
}

const Posts = class Posts extends React.Component {
  constructor() {
    super();

    this.onEn = this.onEn.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    console.log('update')
  }

  onEn () {
    console.log(this.props);
  }

  renderItem() {
    return this.props.postlist.map((post) => (
      <PostItem key={post._id} post={post}/>  
    ));
  }

  render () {
    return (
      <div id="posts-list">
      { this.renderItem() }
      <p onClick={this.onEn}>Click</p>
      </div>
    )
  }
};

export default Posts; 