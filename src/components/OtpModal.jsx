import React, { useState } from 'react';

function OtpModal({ onClose, resendOtp, verifyOtp }) {
  const [otp, setOtp] = useState('');

  const handleChange = (event) => {
    setOtp(event.target.value);
  };

  const handleVerify = () => {
    verifyOtp(otp);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      <div className="z-10 p-6 bg-white rounded-lg shadow-lg">
        <input
          type="text"
          name="otp"
          value={otp}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Enter OTP"
        />
        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            onClick={handleVerify}
          >
            Verify OTP
          </button>
          <button
            className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700"
            onClick={resendOtp}
          >
            Resend OTP
          </button>
          <button
            className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default OtpModal;
