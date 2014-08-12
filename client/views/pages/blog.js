Template.blog.helpers({

  posts: function(){
    return BlogPosts.find( {}, {sort: {dateSubmitted: -1}} );
  }

});


Template.blog.events({
  'click .delete' : function(){
    BlogPosts.remove(this._id);
  }
});