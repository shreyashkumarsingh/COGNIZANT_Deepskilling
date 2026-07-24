import React, { useState } from 'react';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');

  const validate = () => {
    const newErrors = {};

    if (formData.name.trim().length < 5) {
      newErrors.name = 'Name must be at least 5 characters long.';
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = 'Email must contain "@" and "."';
    }

    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccessMsg(`Registration Successful! Welcome, ${formData.name}.`);
    } else {
      setSuccessMsg('');
    }
  };

  return (
    <div style={{ padding: '30px', border: '2px solid darkred', borderRadius: '10px', maxWidth: '400px', margin: '30px auto' }}>
      <h2 style={{ color: 'darkred', textAlign: 'center' }}>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.name && <span style={{ color: 'red', fontSize: '13px' }}>{errors.name}</span>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.email && <span style={{ color: 'red', fontSize: '13px' }}>{errors.email}</span>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.password && <span style={{ color: 'red', fontSize: '13px' }}>{errors.password}</span>}
        </div>

        <button
          type="submit"
          style={{ width: '100%', backgroundColor: 'darkred', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Register
        </button>
      </form>

      {successMsg && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#ffe6e6', color: 'darkred', border: '1px solid red', borderRadius: '5px', textAlign: 'center' }}>
          {successMsg}
        </div>
      )}
    </div>
  );
};

export default Register;
