import React, { useState } from 'react';
import "./Register.css";
import { Link } from 'react-router-dom';
import Footer from '../Home/Footer';
const Register = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreate = (e) => {
    e.preventDefault();
    if (name === '') {
      alert('Username must be filled');
    }
    if (phoneNumber === '') {
      alert('Phone number must be filled');
    }
    if (email === '') {
      alert('Email must be filled');
    }
    if (password === '') {
      alert('Password must be filled');
    }
    if (confirmPassword === '') {
      alert('Confirm password must be filled');
    }
  };

  return (
    <div className="register-body"> {/* Add the register-body class here */}
      <div className="register-container">
        <form method="post" className="register-form">
          <h1 className="register-h1">SIGN UP</h1>

          <input
            type="text"
            placeholder="Enter Name"
            required
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="register-input" 
          /><br />

          <input
            type="number"
            placeholder="Enter Phone No."
            required
            id="num"
            minLength="10"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="register-input" 
          /><br />

          <input
            type="email"
            placeholder="Enter Email"
            required
            id="em"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-input"
          /><br />

          <input
            type="password"
            placeholder="Create Password"
            required
            id="pass"
            minLength="8"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input" 
          /><br />

          <input
            type="password"
            placeholder="Confirm Password"
            required
            id="pass1"
            minLength="8"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="register-input"
          /><br />

          <button to="/product" className="register-button" onClick={handleCreate}>
            <span className="register-span"></span>
            <Link to="/product" className="login-link">CREATE</Link>
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
