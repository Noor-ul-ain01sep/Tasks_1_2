import React, { useState } from "react";
import './RegistrationForm.css';

export const RegistrationForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: null,
    checkbox: false
  });

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setData({ ...data, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(data);
  };

  return (
    <div>
      <h1>REGISTRATION FORM</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <div className="txt_field">
          <input type="text" placeholder="Enter Your First Name" name="firstName" onChange={handleInput} />
        </div>

        <label>Last Name</label>
        <div className="txt_field">
          <input type="text" placeholder="Enter Your Last Name" name="lastName" onChange={handleInput} />
        </div>

        <label>Email</label>
        <div className="txt_field">
          <input type="text" placeholder="Enter Your Email" name="email" onChange={handleInput} />
        </div>

        <label>Password</label>
        <div className="txt_field">
          <input type="password" placeholder="Enter Your Password" name="password" onChange={handleInput} autoComplete="current-password" />
        </div>

        <label>Date of Birth</label>
        <div className="txt_field">
          <input type="date" placeholder="Enter Your DOB" name="dateOfBirth" onChange={handleInput} />
        </div>

        <div className="checkbox_container"> 
          <input type="checkbox" onChange={handleInput} name="checked" />
          <label htmlFor="checked">Remember Me</label>
        </div>
        

        <button type="submit">Login Now</button>
      </form>
    </div>
  );
};
