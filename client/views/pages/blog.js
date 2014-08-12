Template.blog.helpers({

  posts: function(){
    return BlogPosts.find( {}, {sort: {dateSubmitted: -1}} );
  }

});
