import React from 'react'
import '../styles/Inventory.css'
import InventoryCard from './InventoryCard'
import Search from '../components/Search'

const bikes = [
  {
    model: 'Aprilia RS 660',
    gear: 'Manual',
    img: 'https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/appriilia.png?raw=true',
    year: 2022,
    engine: 660, // assuming 'cc' as unit
    mileage: 20000, // assuming 'km/l' as unit
    price: 129, // assuming 'per day' as unit
  },
  {
    model: 'Vespa GTS 150',
    gear: 'Automatic',
    img: 'https://raw.githubusercontent.com/ToniRajamaki/moto-rental/main/public/images/vespa.webp',
    year: 2005,
    engine: 150, // assuming 'cc' as unit
    mileage: 6000, // assuming 'km/l' as unit
    price: 49, // assuming 'per day' as unit
  },
  {
    model: 'BMW G 310 R',
    gear: 'Manual',
    img: 'https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/bmw.png?raw=true',
    year: 2024,
    engine: 500, // assuming 'cc' as unit
    mileage: 39000, // assuming 'km/l' as unit
    price: 89, // assuming 'per day' as unit
  },
  {
    model: 'Ducati Monster 821',
    gear: 'Manual',
    img: 'https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/ducati.png?raw=true',
    year: 2019,
    engine: 800, // assuming 'cc' as unit
    mileage: 8000, // assuming 'km/l' as unit
    price: 109, // assuming 'per day' as unit
  },
  {
    model: 'Suzuki SV650X',
    gear: 'Manual',
    img: 'https://raw.githubusercontent.com/ToniRajamaki/moto-rental/main/public/images/motocross1.webp',
    year: 2020,
    engine: 650, // assuming 'cc' as unit
    mileage: 25000, // assuming 'km/l' as unit
    price: 109, // assuming 'per day' as unit
  },
  {
    model: 'Harley-Davidson Iron 883',
    gear: 'Manual',
    img: 'https://raw.githubusercontent.com/ToniRajamaki/moto-rental/main/public/images/bmw2.webp',
    year: 2009,
    engine: 450, // assuming 'cc' as unit
    mileage: 50000, // assuming 'km/l' as unit
    price: 99, // assuming 'per day' as unit
  },
  {
    model: 'Honda CB300R',
    gear: 'Automatic',
    img: 'https://raw.githubusercontent.com/ToniRajamaki/moto-rental/main/public/images/honda.webp',
    year: 1992,
    engine: 125, // assuming 'cc' as unit
    mileage: 15000, // assuming 'km/l' as unit
    price: 39, // assuming 'per day' as unit
  },

  {
    model: 'Yamaha MT-07',
    gear: 'Manual',
    img: 'https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/hero-img2.png?raw=true',
    year: 2018,
    engine: 500, // assuming 'cc' as unit
    mileage: 19000, // assuming 'km/l' as unit
    price: 99, // assuming 'per day' as unit
  },
  {
    model: 'KTM 390 Duke',
    gear: 'Manual',
    img: 'https://raw.githubusercontent.com/ToniRajamaki/moto-rental/main/public/images/ktm.webp',
    year: 2023,
    engine: 200, // assuming 'cc' as unit
    mileage: 10000, // assuming 'km/l' as unit
    price: 49, // assuming 'per day' as unit
  },
]

function Inventory() {
  return (
    <>
    <div className="cover"></div>
    <div className='inventory section-content'>
      <h1>
        Latest <span className='highlight'>Inventory</span>
      </h1>
      <p className='subheader'>
        Explore Our Vast Inventory Of Reliable Bikes For Different Needs And
        Find Your Perfect Set Of Wheels.
      </p>
    <Search />
      <div className='inventory-container'>
        {bikes.map((bike, index) => (
          <InventoryCard key={index} bike={bike} />
          ))}
      </div>
      <button className='btn button-primary'>Browse All</button>
    </div>
          </>
  )
}

export default Inventory
