Meteor.methods({

  sendEmail: function(messageContents){
    Email.send({

      from: messageContents.email,
      to: "mlee2569@gmail.com",
      subject: "You've got a message from "
        + messageContents.name + " with number "
        + messageContents.phone,
      text: messageContents.message

    });
  }





})