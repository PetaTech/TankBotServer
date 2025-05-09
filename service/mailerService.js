const nodemailer = require('nodemailer');

module.exports = async ({ to, from, subject, template, text }) => {
  // set your own mail server :)
  let transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
      user: '784265003@smtp-brevo.com',
      pass: 'xsmtpsib-3a3bb435fea56a5f41fa64d2bf8ab47374b1f6d8f15dabe3b029d78b7cb578a0-RvCfO8XTZ7V01tB4'
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
