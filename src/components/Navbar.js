import '../styles/Navbar.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom' // Import Link

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <div>
        {/* Update to use Link */}
        <Link to='/' className='nav-title'>
          <img
            className='nav-logo'
            src='https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/Group%201.png?raw=true'
            alt='Logo'
          />
        </Link>
      </div>

      <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? 'open' : ''}>
        {/* Update all navigation items to use Link */}
        <li>
          <Link className='nav-item' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='nav-item' to='/about-us'>
            About
          </Link>
        </li>
        <li>
          <Link className='nav-item' to='/vehicles'>
            Vehicles
          </Link>
        </li>
        <li>
          <Link className='nav-item' to='/testimonials'>
            Testimonials
          </Link>
        </li>
        <li>
          <Link className='nav-item' to='/our-team'>
            Our Team
          </Link>
        </li>
        <li>
          <Link className='nav-item' to='/contact'>
            Contact
          </Link>
        </li>
      </ul>

      <div className='nav-buttons'>
        <button className='btn button-primary'>Log In</button>
        <button className='btn button-secondary'>Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar
