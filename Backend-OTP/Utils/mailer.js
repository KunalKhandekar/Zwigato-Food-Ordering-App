
const nodemailer = require("nodemailer");
const { sendEmailCode } = require("./useHTML");

const mailer = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "kunalkhandekar010@gmail.com",
    pass: "otapadlwmycauxgo",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function sendOtpEmail(email, name, otp) {
  try {
    await mailer.sendMail({
      from: "kunalkhandekar010@gmail.com",
      to: email,
      subject: "Your OTP Code - Swigato",
      html: sendEmailCode(name, otp),
    });

    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

module.exports = {
  sendOtpEmail
};
