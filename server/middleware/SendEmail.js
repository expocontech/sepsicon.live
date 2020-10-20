const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async options => {
  var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.SMTP_USER, 
      pass: process.env.SMTP_PASSWORD 
    }
  });

  // send mail with defined transport object
  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: process.env.EMAIL_SUBJECT,
    text: options.message
  };

  const info = await transporter.sendMail(message);

  console.log('Message sent: %s', info.messageId);
};
module.exports = sendEmail;