import React from 'react'
// Import your logo and icons
// Import social media icons
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
// Import CSS
import '../styles/Footer.css'

let logo2 =
  'https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/Group%201.png?raw=true'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section logo-section'>
          <img src={logo2} alt='Logo' className='footer-logo' />
        </div>
        <div className='footer-section links-section'>
          <h2 className='link-header'>Pages</h2>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>Services</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='footer-section links-section'>
          <h2 className='link-header'>Company</h2>

          <ul>
            <li>
              <a href='#'>Careers</a>
            </li>
            <li>
              <a href='#'>News</a>
            </li>
            <li>
              <a href='#'>Author</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='footer-section social-section'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'>
            <FaFacebook />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'>
            <FaTwitter />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'>
            <FaInstagram />
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'>
            <FaLinkedin />
          </a>
        </div>
        <hr />
      </div>
      <div className='footer-bottom'>
        <p> 2024 Copyright: Toni Rajamäki</p>
        <div className='gap2'>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Website Terms</a>
          <a href='#'>Cookie Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
