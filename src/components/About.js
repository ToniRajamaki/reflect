import React from "react";
import "../styles/AboutComponent.css"; // Make sure you have a corresponding CSS file for styling
import { FaCar, FaBuilding, FaWrench } from 'react-icons/fa'; // Import specific icons

const AboutComponent = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src="https://i.imgur.com/fSmWrca.png" alt="Salespeople with brochure" />
      </div>
      <div className="about-content">
      <h1 className="about-header">
        About <span className='highlight'>Us</span>
      </h1>
      <p >
        Our Journey Of Success Is A Testament To The Collective Efforts And
        Determination Of Our Team
      </p>
        <p>
          Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.
          Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.
        </p>
        <br />
        <div className="about-stats">
          <div className="stat-item">
            <FaCar size={50} /> {/* Car icon */}
            <h3>20</h3>
            <p>Vehicle Types</p>
          </div>
          <div className="stat-item">
            <FaBuilding size={50} /> {/* Rental outlets icon */}
            <h3>85</h3>
            <p>Rental Outlets</p>
          </div>
          <div className="stat-item">
            <FaWrench size={50} /> {/* Repair shop icon */}
            <h3>75</h3>
            <p>Repair Shop</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
