import React from 'react'
import { FaCalendarAlt, FaCog, FaGasPump, FaWrench } from 'react-icons/fa'
import '../styles/InventoryCard.css'

const InventoryCard = ({ bike }) => {
  return (
    <div className='inventory-card'>
      <div className='card-image-container'>
        <img src={bike.img} alt={`Image of ${bike.model}`} />
      </div>
      <div className='card-details'>
        <h3>{bike.model}</h3>
        <div className='card-rating'>
          <span>{'⭐️'.repeat(5)}</span>
          <span className='text-reviews'> ({Math.floor(Math.random() * 99) + 1}) Reviews</span>
        </div>
        <div className='card-specs'>
          <span>
            <FaCalendarAlt /> {bike.year}
          </span>
          <span>
            <FaCog /> {bike.engine}cc
          </span>
          <span>
            <FaGasPump /> {bike.mileage} km/l
          </span>
          <span>
            <FaWrench /> {bike.gear}
          </span>
        </div>
      </div>
      <hr style={{ width: '90%', margin: '0 auto' }} />
      <div className='card-footer'>
        <div className='card-price'>
          <span>
            {bike.price}€ <span className='day-text'> / Day</span>
          </span>
        </div>
        <div>
          <button className='btn button-secondary'>Rent Bike</button>
        </div>
      </div>
    </div>
  )
}

export default InventoryCard
