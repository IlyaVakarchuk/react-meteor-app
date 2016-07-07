import React from 'react';
import CommentsBlock from './Comments.jsx';

const PostItem = class PostItem extends React.Component {
  constructor() {
    super();

    this.onShowText = this.onShowText.bind(this);

    this.state = {
      show : false
    }
  }

  onShowText () {
    this.setState({show : !this.state.show});
  } 

  render () {
    return (
      <div className='posts-list-item'>
        <div className='title'>
          { this.props.post.title}
        </div>
         { this.state.show ? <div className='text'><div className='content' onClick={ this.onShowText }><div className='post-text'>{ this.props.post.text }</div></div> <CommentsBlock postId={this.props.post.id} /> </div> : false }
        <div className='preview-layout'>
          <div className='dark-layer'>

          </div>
          <div className='show'>
            <div onClick={ this.onShowText }></div>
          </div>
          <div className='comments-block'>

          </div>
        </div>
      </div>
    )
  }
}

const Posts = class Posts extends React.Component {
  constructor() {
    super();

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem() {
    return this.props.postlist.map((post) => (
      <PostItem id={post.id} key={post._id} post={post}/>  
    ));
  }

  render () {
    return (
      <div id="posts-list">
        { this.renderItem() }
      </div>
    )
  }
};

export default Posts; 