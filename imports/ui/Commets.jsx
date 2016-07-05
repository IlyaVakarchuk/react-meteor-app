import React from 'react';

const CommetsItem = class CommetsItem extends React.Component {
  constructor () {
    
  }
}

const CommentsList = class CommentsList extends React.Component {
  constructor() {
    super();

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem() {
    return this.props.postlist.map((post) => (
      <PostItem key={post._id} post={post}/>  
    ));
  }

  render () {
    return (
      <div className="comments-list">
      
      </div>
    )
  }
};

export default CommentsList; 