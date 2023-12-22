// CustomForm.js

import React, { useState } from 'react';
import './CustomerDetailsForm.css';
import { Link } from 'react-router-dom';

const CustomForm = () => {
  const [customerDetails, setCustomerDetails] = useState({
    customName: '',
    customContactNumber: '',
    customEmail: '',
    customShippingAddress: '',
    customAlternativeContactNumber: '',
  });

  const [customPaymentMethod, setCustomPaymentMethod] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    setCustomPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions here, like submitting the data to a server
    console.log('Customer Details:', customerDetails);
    console.log('Payment Method:', customPaymentMethod);
  };

  return (
    <div className="custom-container">
      
      <form onSubmit={handleSubmit} className="custom-form">
        <label>
          Custom Name:
          <input
            type="text"
            name="customName"
            value={customerDetails.customName}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Custom Contact Number:
          <input
            type="tel"
            name="customContactNumber"
            value={customerDetails.customContactNumber}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Custom Email:
          <input
            type="email"
            name="customEmail"
            value={customerDetails.customEmail}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Custom Shipping Address:
          <textarea
            name="customShippingAddress"
            value={customerDetails.customShippingAddress}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Custom Alternative Contact Number:
          <input
            type="tel"
            name="customAlternativeContactNumber"
            value={customerDetails.customAlternativeContactNumber}
            onChange={handleInputChange}
          />
        </label>

        <h2 className="custom-heading">Payment</h2>
        <label>
          Custom Mode of Payment:
          <select value={customPaymentMethod} onChange={handlePaymentChange} required>
            <option value="">Select Payment Method</option>
            <option value="customCard">Custom Card</option>
            <option value="customUPI">Custom UPI</option>
          </select>
        </label>

        <Link to="/payment">
          <button type="submit" className="custom-submit-btn">
            Proceed to Pay
          </button>
        </Link>
      </form>
    </div>
  );
};

export default CustomForm;
