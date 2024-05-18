import '../App.css'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SpecialOffer from '../components/SpecialOffer'
import ContactSection from './ContactDivider'
import Gallery from './Gallery'

const BR = () => {
  return (
    <div className='section-break'>
      <br></br> <br></br>
      <br></br> <br></br>
    </div>
  )
}

const baseURL = '/moto-rental'

function Home() {
  return (
    <div className='App'>
      <SpecialOffer />
      <Navbar />
      <BR />
      <Gallery />
      <BR />
      <ContactSection></ContactSection>
      <BR />

      <Footer />
    </div>
  )
}

export default Home
