Meteor.publish('contactFormMessages', function() {
  return ContactFormMessages.find();
});

Meteor.publish('blogPosts', function(){
  return BlogPosts.find();
});
