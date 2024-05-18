import '../App.css'
import React from 'react'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import SpecialOffer from '../components/SpecialOffer'
import ContactSection from './ContactDivider'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const BR = () => {
  return (
    <div className='section-break'>
      <br></br> <br></br>
      <br></br> <br></br>
    </div>
  )
}

const baseURL = '/moto-rental'

function PageTestimonials() {
  return (
    <div className='App'>
      <SpecialOffer />
      <Navbar />
      <BR />
      <Testimonials></Testimonials>
      <BR />
      <BR />
      <ContactSection />
      <BR />
      <Footer />
    </div>
  )
}

export default PageTestimonials
