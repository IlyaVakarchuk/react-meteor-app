import { Meteor } from 'meteor/meteor';
   
Meteor.startup(() => {
  PostsConnection = new Mongo.Collection('posts');
  
  if (Meteor.isServer) {
    Meteor.publish("posts", function () {
      return PostsConnection.find({});
    });
}
});
