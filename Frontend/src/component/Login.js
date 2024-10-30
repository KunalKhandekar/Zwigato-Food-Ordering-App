import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import bg from '../images/bg-login.webp';

const LoginSignup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const link = "https://zwigato-food-ordering-app.onrender.com"

  const sendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${link}/api/send-otp`, { email, name });
      if (response.data.success) {
        setOtpSent(true);
        toast.success('OTP sent successfully!');
      } else {
        setError(response.data.message);
        toast.error(response.data.message);
      }
    } catch (err) {
      setError('Error sending OTP. Please try again.');
      toast.error('Error sending OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${link}/api/verify-otp`, { email, otp });
      if (response.data.success) {
        localStorage.setItem('isAuthenticated', 'true');
        toast.success('OTP verified successfully!');
        navigate('/');
      } else {
        setError(response.data.message);
        toast.error(response.data.message);
      }
    } catch (err) {
      setError('Error verifying OTP. Please try again.');
      toast.error('Error verifying OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="flex items-center justify-center max-w-screen max-h-screen -z-10 fixed">
      <img src={bg} alt="bg" className='w-full h-full object-cover' />
    </div>
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 border border-orange-300">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-4">Welcome to Swigato!</h2>
        <p className="text-gray-600 text-center mb-6">Please enter your details to get started.</p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={otpSent ? verifyOtp : sendOtp}>
          {!otpSent && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="border border-gray-300 rounded w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="border border-gray-300 rounded w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          {otpSent && (
            <div className="mb-4">
              <label htmlFor="otp" className="block text-gray-700 mb-1">Enter OTP</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                required
                className="border border-gray-300 rounded w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          )}
          <button
            type="submit"
            className={`bg-orange-500 text-white p-3 rounded w-full transition duration-200 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Loading...' : (otpSent ? 'Verify OTP' : 'Send OTP')}
          </button>
        </form>
        
      </div>
    </div>
  </>
  );
};

export default LoginSignup;
