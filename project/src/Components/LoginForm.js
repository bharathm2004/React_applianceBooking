import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import "./LoginForm.css";
import { Link } from 'react-router-dom';

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
    <div>
      <form method="post">
        <h1>LOGIN</h1>

        <div className="input-container">
          <input
            type="text"
            placeholder="Username"
            id="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="8"
          />
        </div>

        <br />
        <button className="btn" onClick={handleLogin}>
          <span></span>
          Login
        </button>
        <br></br>
        <p>OR</p>

        <div className="social-buttons">
          
          <button className="social-button facebook" onClick={(e) => e.preventDefault()}>
            <FontAwesomeIcon icon={faFacebook} />
            Login with Facebook
          </button>

          
          <button className="social-button google" onClick={(e) => e.preventDefault()}>
            <FontAwesomeIcon icon={faGoogle} />
            Login with Google
          </button>

          <br></br>
        </div>
        <div className='Register'>
          <p>Don't have an account? <Link to='./Register' className='links'>Signup</Link></p>
        </div>

        <br />
      </form>
    </div>
  );
};

export default LoginForm;
