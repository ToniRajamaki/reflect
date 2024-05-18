import React from 'react';
import '../styles/ContactDivider.css';
import { FaPhone } from 'react-icons/fa'; // Import phone icon

const ContactSection = () => {


  return (
    <div className="contact-section">
      <div className="contact-content">
        <h2 className='contact-h2'>Book a motorbike by getting in touch with us</h2>
        <div className="contact-phone">

        
          <span className="phone-number">   <FaPhone size={20} color="var(--main)" />  (123) 456-7869</span>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
