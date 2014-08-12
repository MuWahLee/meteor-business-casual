

Template.contact.events({
  'submit form': function(e){
    e.preventDefault();
    console.log("Form Submitted!");

//change to var messageContents in production to ensure the variable is no longet global//
    messageContents = {
      name: $('input[name="name"]').val(),
      email: $('input[name="email"]').val(),
      phone: $('input[name="phone"]').val(),
      message: $('textarea[name="message"]').val(),
    }

    console.log("This is the messageContents:");
    console.log(messageContents);

    ContactFormMessages.insert(messageContents);

    Meteor.call("sendEmail", messageContents);
// name of a key must be within quotatio marks, otherwise it will error out
  }
})