import '../App.css'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SpecialOffer from '../components/SpecialOffer'
import ContactSection from './ContactDivider'
import ContactForm from './ContactForm'
import '../styles/Hero.css'; // Make sure this CSS file exists and is correctly styled


const BR = () => {
  return (
    <div className='section-break'>
      <br></br> <br></br>
      <br></br> <br></br>
    </div>
  )
}

const baseURL = '/moto-rental'

function PageContact() {
  return (
    <div className='App'>
        <div className="hero-cover3"></div>
      <SpecialOffer />
      <Navbar />
      <BR />
      <ContactForm />
      <BR />
      <BR />
      <ContactSection></ContactSection>
      <BR />

      <Footer />
    </div>
  )
}

export default PageContact
