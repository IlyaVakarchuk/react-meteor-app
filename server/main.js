import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

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
      'user:changeUsername' : (id, newUsername) => {
        Meteor.users.update(id, {
          $set : {username : newUsername }
        });
        return Meteor.user();
      }
    });

    Meteor.methods({
      'user:changeEmail' : (id, newEmail) => {
        Meteor.users.update(id, {
          $set : {emails : [{ address : newEmail , verified : false}] }
        });
        return Meteor.user();;
      }
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
