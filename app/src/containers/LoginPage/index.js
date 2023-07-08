import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./style.css"

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
  };

  return (
    <div className="login-container">
      <motion.form
        className="login-form"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
      >
        <h2>Login</h2>
        <motion.input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
        <motion.input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          Login
        </motion.button>
        <motion.div className="login-form-q">
          <motion.div>
            Create new account?
          </motion.div>
          
          <motion.div>
            <motion.a href='/signup'>Register</motion.a>
          </motion.div>
        </motion.div>
        
      </motion.form>
    </div>
  );
};

export default LoginPage;
