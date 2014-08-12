Router.configure({
  layoutTemplate: "layout",
  loadingTemplate: "loading",
  waitOn: function() { Meteor.subscribe('contactFormMessages') }
})

Router.map(function() {

  this.route('index', {path: '/index'} );

  this.route('about', {
    path: '/about'
  });

  this.route('blog', {
    path: '/blog',
    waitOn: function(){
      return Meteor.subscribe('blogPosts');
    }
  });

  this.route('contact', {
    path: '/contact'
  });

  this.route('blogEntry',{
    path: '/blogEntry'
  });

  this.route('blogView', {
    path: '/blog/:_id',
    data: function(){
      return BlogPosts.findOne(this.params._id);
    },
    waitOn: function(){
      return Meteor.subscribe('blogPosts');
    }
  });

})