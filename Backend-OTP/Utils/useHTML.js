
function sendEmailCode(name, code) {
    return `
      <div style="font-family: Arial, sans-serif; text-align: center;">
        <h2>Hello ${name},</h2>
        <p>Your OTP code for Swigato is <strong>${code}</strong>.</p>
        <p>Please use this code to verify your email.</p>
        <p>Thank you!</p>
      </div>
    `;
  }
  
  module.exports = {
    sendEmailCode
  };
  