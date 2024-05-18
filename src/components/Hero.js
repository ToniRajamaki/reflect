import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Hero.css'; // Make sure this CSS file exists and is correctly styled

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // overall animation duration
    });
  }, []);

  // const imageUrl = "https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/hero-img.png?raw=true";
  const imageUrl = "https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/hero-img2.png?raw=true";


  return (
    <>
    <div className="hero-cover1"></div>
    <div className="hero-cover2"></div>
    <div>
    <section className="hero-section section-content">
      <div className="content" data-aos="fade-right" data-aos-delay="100">
        <h1 className="title" data-aos="fade-right" data-aos-delay="200">Easy And Fast Way To <span className="highlight">Rent</span> Your Motorcycle</h1>
        <p className="subtitle" data-aos="fade-right" data-aos-delay="400">We Offer A Wide Range Of Rental Cars To Suit Your Needs. Whether You're Planning A Weekend Getaway, or A Business Trip.</p>
        <a href="#all-blogs" className="btn button-primary hero-button" data-aos="fade-right" data-aos-delay="800">Rent a Motorcycle</a>
      </div>
      <img src={imageUrl} alt="Ninja Hero" className="hero-image" data-aos="fade-left" data-aos-delay="900" />
    </section>
    {/* <div class="custom-shape-divider-bottom-1710071034">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div> */}
    </div>
    </>
  );
};

export default HeroSection;
