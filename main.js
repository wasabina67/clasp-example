function myFunction() {
  Logger.log('Hello World!');
}

function sendEmailToSelf() {
  var recipient = Session.getActiveUser().getEmail();
  GmailApp.sendEmail(recipient, 'subject', 'body');
}
