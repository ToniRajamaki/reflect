import "../App.css"
import React from 'react'
import Navbar from '../components/Navbar'
import WhyUs from '../components/WhyUs'
import Footer from '../components/Footer'
import SpecialOffer from '../components/SpecialOffer'
import About from '../components/About'
import ContactSection from "./ContactDivider"

const BR = () => {
    return (
      <div className='section-break'>
        <br></br> <br></br>
        <br></br> <br></br>
      </div>
    )
  }

const baseURL = "/moto-rental";

function Home() {
  return (
    <div className='App'>
      <SpecialOffer />
      <Navbar />
      <About></About>
        <ContactSection></ContactSection>
        <BR />
        <WhyUs />
      
      <Footer />
    </div>
  )
}

export default Home
