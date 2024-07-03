function myFunction() {
  Logger.log('Hello World!');
}

function sendEmailToSelf() {
  const recipient = Session.getActiveUser().getEmail();
  GmailApp.sendEmail(recipient, 'subject', 'body');
}
