import React, { useState } from 'react';
import './App.css'; 

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;


    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.address || !formData.mobile || !formData.email || !formData.gender || !formData.dob || !formData.course) {
      alert("Please fill out all fields");
      return;
    }
  
   
    if (formData.mobile.length !== 10 || !/^\d+$/.test(formData.mobile)) {
      alert("Mobile number must be 10 digits");
      return;
    }
  
   
    alert("Registration successfull!!");
  };
  

  const handleReset = () => {
   
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: '',
    });
  };

  return (
    <div className="container">
      <h2>College Admission Form</h2>
      <form onSubmit={handleSubmit} className="form-row">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Mobile:</label>
          <div>
            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Course:</label>
          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="">Select</option>
            <option value="biology">BBA</option>
            <option value="computer_science">B COM</option>
            <option value="commerce">BCA</option>
            <option value="humanities">BA</option>
          </select>
        </div>
        <div className="button-group mt-2">
          <button className='btn btn-danger'  type="submit">Register</button>
          <button className='btn btn-danger ms-2' type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
