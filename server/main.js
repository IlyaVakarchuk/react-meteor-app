import { Meteor } from 'meteor/meteor';
   
Meteor.startup(() => {
  PostsConnection = new Mongo.Collection('posts');
  CommentsConnection = new Mongo.Collection('comments');
  
  if (Meteor.isServer) {
    Meteor.publish("posts", function () {
      return PostsConnection.find({});
    });

    Meteor.publish("comments", function () {
      return CommentsConnection.find({});
    });

    Meteor.methods({
      'comments:add' : (comment) => {
        return CommentsConnection.insert(comment, (err, _id) => {
          if (err) {
            return false;
          } else {
            return true;
          }
        });
      }
    })
}
});
