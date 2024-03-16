import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/login');
  };

  return (
    <div className="registerContainer">
      <div className="registerBox">
        <h2>Register</h2>
        <div className="inputContainer">
          <input
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className="inputBox"
          />
        </div>
        <div className="inputContainer">
          <input
            value={password}
            placeholder="Enter your password here"
            type="password"
            onChange={(ev) => setPassword(ev.target.value)}
            className="inputBox"
          />
        </div>
        <div className="inputContainer">
          <button className="registerButton" onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Register;