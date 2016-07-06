import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Button from './Button';

import Comments from '../logic/Comments.js'

const CommentsItem = class CommentsItem extends React.Component {
  constructor() {
    super();

    this.formDate = this.formDate.bind(this);
  }

  formDate (date) {
    if (date == undefined) {
     return ''
    }
    let beautifulDate = date.getDate() + ' / ' + (date.getMonth() + 1) + ' / ' + date.getFullYear();
    return beautifulDate;
  }

  render () {
    return (
      <div className='comments-list-item'>
        <div className='comment-text'>{this.props.comment.text}</div>
        <div className='comment-data'>
          <div className='comment-data-author-avatar'><img src='images/interface/user.png'/></div>
          <div className='comment-data-author-username'>{ this.props.comment.author }</div>
          <div className='comment-data-date'>{this.formDate(this.props.comment.date)}</div>
        </div>
      </div>   
    )
  }
}

const CommentsList = class CommentsList extends React.Component {
  constructor() {
    super();

    this.state = {
      newComment : '',
      render : false
    }

    this.renderItem = this.renderItem.bind(this);
    this.onAddComment = this.onAddComment.bind(this); 
    this.onChangeComment = this.onChangeComment.bind(this);
  }

  renderItem() {
    return this.props.commentslist.map((comment) => (
      <CommentsItem key={comment._id} comment={comment}/>  
    ));
  }

  onAddComment() {
    Comments.addNewComment(this.props.postId, this.state.newComment)
    
  }

  onChangeComment(e) {
    this.setState({newComment : e.target.value})
  }

  render () {
    return (
      <Scrollbars style={{ width: '100%', height: 300 }}>
        <div className="comments-list">
          { this.renderItem() }
          <div className="new-comment">
            <textarea onChange={ this.onChangeComment }></textarea>
            <Button action={ this.onAddComment } text={'add comment'}/>
          </div>
        </div>
      </Scrollbars>
    )
  }
};

export default CommentsList; 