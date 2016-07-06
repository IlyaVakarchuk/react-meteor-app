import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Button from './Button';

const CommentsItem = class CommentsItem extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className='comments-list-item'>
        <div className='comment-text'>{this.props.comment.text}</div>
        <div className='comment-data'>
          <div className='comment-data-author-avatar'><img src='images/interface/user.png'/></div>
          <div className='comment-data-author-username'>{this.props.comment.author}</div>
          <div className='comment-data-date'>12 may 2016</div>
        </div>
      </div>   
    )
  }
}

const CommentsList = class CommentsList extends React.Component {
  constructor() {
    super();

    this.renderItem = this.renderItem.bind(this);
    this.onAddComment = this.onAddComment.bind(this); 
  }

  renderItem() {
    return this.props.commentslist.map((comment) => (
      <CommentsItem key={comment._id} comment={comment}/>  
    ));
  }

  onAddComment() {
    console.log('add comemnt event');
  }

  render () {
    return (
      <Scrollbars style={{ width: '100%', height: 300 }}>
        <div className="comments-list">
          { this.renderItem() }
          <div className="new-comment">
            <textarea></textarea>
            <Button action={ this.onAddComment } text={'add comment'}/>
          </div>
        </div>
      </Scrollbars>
    )
  }
};

export default CommentsList; 