import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./style.css"
const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
  };

  return (
    <div className="register-container">
      <motion.form
        className="register-form"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
      >
        <h2>Register</h2>
        <motion.input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
        <motion.input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
        <motion.input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={handlePhoneChange}
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
        <motion.input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          Register
        </motion.button>
        <motion.div className='register-form-q '>
          <motion.div>
            Already Registerd?
          </motion.div>
          
          <motion.div>
            <a href='/login'>Login</a>
          </motion.div>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default RegisterPage;
