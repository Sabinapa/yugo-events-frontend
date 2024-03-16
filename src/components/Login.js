import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  return (
    <div className="loginContainer">
      <div className="loginBox">
        <h2>Login</h2>
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
          <button className="loginButton" onClick={() => navigate('/')}>Log in</button>
        </div>
      </div>
    </div>
  );
}

export default Login;