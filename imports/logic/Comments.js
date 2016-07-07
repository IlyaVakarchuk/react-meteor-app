import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
    
const CommentsList = class CommentsList {
  constructor() {
    Meteor.subscribe('comments');  
    this.Comments = new Mongo.Collection('comments');   
  }

  getList(param) {
    return this.Comments.find(param, {sort : { date : -1 }}).fetch();
  }

  removeComment(comment) {
    console.log(comment);
    Meteor.call('comments:remove', comment, (err, res) => {
      if (err) {

      } else {

      }
    })
  }

  addNewComment(postId, text, callback) {
    let newComment = {
      post : postId,
      author : Meteor.user().username,
      text : text
    }
    Meteor.call('comments:add', newComment, (err, res) => {
      if (err) {

      } else {
        if (res) {
          if (callback) {
            callback();
          }
        }  
      }
    })
  }
}

export default new CommentsList;