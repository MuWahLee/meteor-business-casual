Template.blogEntry.events({
  'submit form': function(e){
    e.preventDefault();
    console.log("Form Submitted!");

//change to var messageContents in production to ensure the variable is no longet global//
    blogPosts = {
      title: $('input[name="title"]').val(),
      postContent: $('textarea[name="postContent"]').val(),
      dateSubmitted: Date(),
    }

    console.log("This is the blogPosts:");
    console.log(blogPosts);

    BlogPosts.insert(blogPosts);

    Router.go('blog');
  }
})