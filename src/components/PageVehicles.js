import "../App.css"
import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Inventory from '../components/Inventory'
import Footer from '../components/Footer'
import SpecialOffer from '../components/SpecialOffer'
import ContactSection from "./ContactDivider"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const BR = () => {
  return (
    <div className='section-break'>
      <br></br> <br></br>
      <br></br> <br></br>
    </div>
  )
}

const baseURL = "/moto-rental";

function PageVehicles() {
  return (
    <div className='App'>
      <SpecialOffer />
      <Navbar />
      <BR />
      <Inventory />
      <BR />
      <ContactSection />
      <BR />
      <Footer />
    </div>
  )
}

export default PageVehicles
