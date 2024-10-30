const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sendOtpEmail } = require('./Utils/mailer');

const app = express();
const allowedOrigins = ['https://zwigato-0.netlify.app', 'http://localhost:1234'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(bodyParser.json());

let otpStore = {}; // Store OTPs for verification

// Route to send OTP
app.post('/api/send-otp', async (req, res) => {
    const { email, name } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate OTP
    otpStore[email] = otp;
  
    const emailResponse = await sendOtpEmail(email, name, otp);
    if (emailResponse.success) {
      return res.status(200).send({ success: true, message: 'OTP sent successfully!' });
    } else {
      return res.status(500).send({ success: false, message: emailResponse.message });
    }
  });

// Route to verify OTP
app.post('/api/verify-otp', (req, res) => {
  const { email, otp } = req.body;
  if (otpStore[email] && otpStore[email] === otp) {
    delete otpStore[email]; // Remove OTP after verification
    res.send({ success: true, message: 'OTP verified successfully!' });
  } else {
    res.send({ success: false, message: 'Invalid OTP. Please try again.' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
