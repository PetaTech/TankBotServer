const nodemailer = require('nodemailer');

module.exports = async ({ to, from, subject, template, text }) => {
  // set your own mail server :)
  let transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
      user: '@smtp-brevo.com',
      pass: ''
    }
  });

  try {
    let info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html: template
    });
    return {
      success: true,
      info
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error: err
    };
  }
};
