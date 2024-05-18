import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import '../styles/ContactForm.css'; // Make sure to create this CSS file

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-info">
        <h2 className='contact-header'>Need additional information?</h2>
        <br></br>
        <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
        <br />
        <div className="info">
         <span> <FaPhone /> (123) 456-7869</span>
        </div>
        <div className="info">
          <span><FaEnvelope /> bikerental@motorental.com</span>
        </div>
        <div className="info">
          <span> <FaMapMarkerAlt />Belgrade, Serbia</span>
        </div>
      </div>
      <form className="contact-form">
        <label htmlFor="fullName">Full Name *</label>
        <input type="text" id="fullName" placeholder="E.g.: Joe Shmoe" required />
        
        <label htmlFor="email">Email *</label>
        <input type="email" id="email" placeholder="youremail@example.com" required />
        
        <label htmlFor="message">Tell us about it *</label>
        <textarea id="message" placeholder="Write Here.." required></textarea>
        
        <button className='btn button-primary flex-pair' type="submit"> Send Message   <FaPaperPlane /></button>
      </form>
    </div>
  );
};

export default ContactForm;
