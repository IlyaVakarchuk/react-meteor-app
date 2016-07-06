import { Meteor } from 'meteor/meteor';
   
Meteor.startup(() => {  
  PostsConnection = new Mongo.Collection('posts');
  CommentsConnection = new Mongo.Collection('comments');
  
  if (Meteor.isServer) {

    Meteor.publish('posts', function () {
      return PostsConnection.find({}  );
    });

    Meteor.publish('comments', function () {
      return CommentsConnection.find({});
    });

    Meteor.methods({
      'start' : () => {
        return Meteor.user();
      }
    })

    Meteor.methods({
      'comments:add' : (comment) => {
        comment['date'] = new Date();
        return CommentsConnection.insert(comment, (err, _id) => {
          if (err) {
            return false;
          } else {
            return true;
          }
        });
      }
    });

    Meteor.methods({
      'comments:remove' : (comment) => {
        CommentsConnection.remove(comment);
        return true;
      }
    })
}
});
