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
    let commentCtrl = ''
    if (this.props.comment.author == Meteor.user().username) {
      commentCtrl = 'own';
    }
    return (
      <div className={'comments-list-item' + ' ' + commentCtrl}>
        <i className='fa fa-trash delete-comment' aria-hidden='true' onClick={ () => this.props.action(this.props.comment) }></i>
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
  constructor(props) {
    super(props);

    this.state = {
      newComment : '',
      comments : Comments.getList({post : props.postId})
    }

    this.renderItem = this.renderItem.bind(this);
    this.onAddComment = this.onAddComment.bind(this); 
    this.onDeleteComment = this.onDeleteComment.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
  }

  renderItem() {
    let comments = Comments.getList({post : this.props.postId});
    return comments.map((comment) => (
      <CommentsItem action={this.onDeleteComment} key={comment._id} comment={comment}/>  
    ));
  }

  onAddComment() {
    Comments.addNewComment(this.props.postId, this.state.newComment, () => {
      this.setState({newComment : ''});
    })
  }

  onDeleteComment (comment) {
    Comments.removeComment(comment, () => {
      this.forceUpdate(() => {
        
      }) 
    });
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
            <textarea onChange={ this.onChangeComment } value={this.state.newComment}></textarea>
            <Button action={ this.onAddComment } text={'add comment'}/>
          </div>
        </div>
      </Scrollbars>
    )
  }
};

export default CommentsList; 