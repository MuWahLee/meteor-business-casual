function fixedEncodeURIComponent (str) {
  return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
}

process.env.MAIL_URL='smtp://mlee2569%40gmail.com:' + encodeURIComponent("Stoner99@GM") + '@smtp.gmail.com:465';

// uncomment lines 8-14 will result in an email being sent from me to me each time you refresh the page //
// Email.send({

//   from: "mlee2569@gmail.com",
//   to: "mlee2569@gmail.com",
//   subject: "Meteor Can Send Emails via Gmail",
//   text: "Its pretty easy to send emails via gmail."
// });
