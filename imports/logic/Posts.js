import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
 
const PostList = class PostList {
  constructor() {
    this.Posts = new Mongo.Collection('posts');   
  }

  getList() {
    return this.Posts.find({}).fetch()
  }
}

export default new PostList;