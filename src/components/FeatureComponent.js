import React from 'react';
import '../styles/FeatureComponent.css';

function FeatureComponent({ Icon, title, description }) {
  return (
    <div className='feature-container'>
      <div className='feature'
      data-aos="zoom-in"
      data-aos-delay="800"
      data-aos-duration="600">
        <Icon className='logo' size={'4rem'} fill="white" />
      </div>
      <div className="feature"
      data-aos="fade-right"
      data-aos-delay="400"
      data-aos-duration="500">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeatureComponent;
