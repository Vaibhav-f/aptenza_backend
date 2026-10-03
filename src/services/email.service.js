require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
}); 

// Verify the connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email server:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});


// Function to send email
const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Aptenza" <${process.env.EMAIL_USER}>`, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html, // html body
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
  }
};


async function sendRegistrationEmail(userEmail ,name){
    const subject  = "Welcome to Aptenza Appartments";
    const text = `Hello ${name},\n\nThank you for register at Aptenza Appartements. We are excited to hove you on board\n\nBest regards ,\nThe Aptenza Appartment Team`;
    const html = `<p>Hello ${name},</p><p>Thank you for register at Aptenza Appartments.We are excited to hove you on board</p><p>Best regards,<br>The Aptenza Appartment Team</p>`;

    await sendEmail(userEmail , subject ,text ,html);

}

module.exports = {
    sendRegistrationEmail
}