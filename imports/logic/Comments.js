import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
    
const CommentsList = class CommentsList {
  constructor() {
    Meteor.subscribe('comments');  
    this.Comments = new Mongo.Collection('comments');   
  }

  getList(param) {
    return this.Comments.find(param).fetch();
  }
}

export default new CommentsList;