// PaymentPage.js
import React, { useState } from 'react';
import './PaymentPage.css';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [upiId, setUpiId] = useState('');

  const handleCardPayment = () => {
    // Simulate card payment logic, replace with your actual payment logic
    console.log('Processing card payment...');
  };

  const handleUpiPayment = () => {
    // Simulate UPI payment logic, replace with your actual payment logic
    console.log('Processing UPI payment for', upiId);
  };

  return (
    <div className="payment-page-container">
      <h2>Payment Page</h2>

      <div className="payment-page-form">
        <div className="card-details-section">
          <h3>Card Details</h3>
          <form onSubmit={handleCardPayment}>
            <label className="payment-label">
              Card Number:
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
                className="payment-input"
              />
            </label>
            <br />
            <label className="payment-label">
              Expiry Date:
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YYYY"
                required
                className="payment-input"
              />
            </label>
            <br />
            <label className="payment-label">
              CVC:
              <input
                type="text"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                required
                className="payment-input"
              />
            </label>
            <br />
            <button type="submit" className="payment-button">Pay with Card</button>
          </form>
        </div>

        <div className="upi-details-section">
          <h3>UPI Details</h3>
          <form onSubmit={handleUpiPayment}>
            <label className="payment-label">
              UPI ID:
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                required
                className="payment-input"
              />
            </label>
            <br />
            <button type="submit" className="payment-button">Pay with UPI</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
