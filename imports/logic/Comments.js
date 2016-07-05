import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
 
const CommentsList = class CommentsList {
  constructor() {
    this.Comments = new Mongo.Collection('comments');   
  }

  getList() {
    return this.Comments.find({}).fetch()
  }
}

export default new CommentsList;