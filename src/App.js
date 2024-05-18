import './App.css'
import React from 'react'
import Home from './components/Home'
import PageAbout from './components/PageAbout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // Import Routes instead of Switch
import PageVehicles from './components/PageVehicles'
import PageTestimonials from './components/PageTestimonials'
import PageOurTeam from './components/PageOurTeam'
import PageContact from './components/PageContact'

const baseURL = '/moto-rental'

function App() {
  return (
    <Router basename={baseURL}>
      <div className='app'>
        <Routes>
          {' '}
          {/* Use Routes instead of Switch */}
          <Route exact path='/' element={<Home />} />
          <Route path='/about-us' element={<PageAbout />} />
          <Route path='/vehicles' element={<PageVehicles />} />
          <Route path='/testimonials' element={<PageTestimonials />} />
          <Route path='/our-team' element={<PageOurTeam />} />
          <Route path='/contact' element={<PageContact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
