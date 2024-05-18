import React from 'react'
import '../styles/CallToActionCard.css'

function CallToActionCard() {
  return (
    <div className='call-to-action'>
      <div className='call-to-action-container'>
        <div className='card-info'>
          <h2>Ready to get started?</h2>
          <p>We Stand As Your Trusted Partner. our Dedication To Quality, Innovation, And Customer Satisfaction Sets Us Apart.</p>
          <button className=' btn button-secondary'>Contact Us</button>
        </div>

      <img className="car-img" src="https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/call-to-action-image.png?raw=true" alt="asd" />
      <img className="car-img2" src="https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/cool-effect.png?raw=true" alt="asd" />
      </div>
    </div>
  )
}

export default CallToActionCard
