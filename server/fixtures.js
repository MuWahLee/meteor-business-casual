if (ContactFormMessages.find().count() === 0) {
  ContactFormMessages.insert(
    {
      name: "Tom Smith",
      email: "tom@example.com",
      phone: "(555) 555-5555",
      message: "whats up?"
    }
  );
};

if (BlogPosts.find().count() === 0) {

  BlogPosts.insert(
    {
      title: "Blog 1",
      dateSubmitted: Date(),
      postContent: "Once upon a time,"
    }
  );

};