import React, { useState } from 'react';
import axios from 'axios';
import './registrationForm.css';
  

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/api/register', formData);
      console.log(response.data); // Handle successful registration
    } catch (error) {
      setError('Registration failed. Please try again.'); // Handle registration error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit" disabled={loading}>Register</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default RegistrationForm;
