// LoginForm.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './LoginForm.css'; // Corrected import statement
import { Link } from 'react-router-dom';
import Footer from '../Home/Footer';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === '') {
      alert('Username must be filled');
    }
    if (password === '') {
      alert('Password must be filled');
    }
  };

  return (
    <div className="login-form-container">
      <form method="post" className="login-form-wrapper">
        <h1 className="login-form-heading">LOGIN</h1>

        <div className="login-input-container">
          <input
            type="text"
            placeholder="Username"
            id="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input-field"
          />
        </div>
        <br></br>

        <div className="login-input-container">
          <input
            type="password"
            placeholder="Password"
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="8"
            className="login-input-field" 
          />
        </div>

        <br />
        <button className="login-button" onClick={handleLogin}>
          <span className="login-span"></span>
          <Link to="/product" className="login-link">Login</Link>
        </button>
        <br></br>
        <p className='or'>OR</p>

        <div className="login-social-buttons">

          <button className="login-social-button login-google" onClick={(e) => e.preventDefault()}>
            <FontAwesomeIcon icon={faGoogle} />
            Login with Google
          </button>
        </div>
        <div className='login-Register'>
          <p className='or'> Don't have an account? <Link to='/Register' className='login-register-link'>Signup</Link></p>
        </div>

        <br />
      </form>
      <Footer></Footer>
    </div>
  );
};

export default LoginForm;
