// PaymentModal.js
import React, { useState, useEffect } from 'react';

function PaymentModal({ onClose, onPaymentResult, token }) {

  const [paymentInfo, setPaymentInfo] = useState('');

  const handlePayment = () => {
    // onClose();
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.paytr.com/js/iframeResizer.min.js";
    script.onload = () => iFrameResize({}, '#paytriframe');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-25"></div> {/* Overlay with reduced opacity */}
        <div className="z-10 p-6 bg-white rounded-lg shadow-lg"> {/* Modal content with higher z-index */}
            <iframe
                src={`https://www.paytr.com/odeme/guvenli/${token}`}
                id="paytriframe"
                frameBorder="0"
                scrolling="no"
                style={{ width: '100%' }}
            ></iframe>
            <div className="flex justify-between mt-4">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={onClose}>Close</button>
            </div>
        </div>
    </div>
  );
}

export default PaymentModal;