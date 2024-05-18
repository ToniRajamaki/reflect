import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaMedal } from 'react-icons/fa'
import { IoMdCloseCircle } from 'react-icons/io'
import { IoShieldCheckmark } from 'react-icons/io5'
import FeatureComponent from './FeatureComponent'
import '../styles/WhyUs.css'

const WhyUs = () => {
  return (
    <>
      <div className='why-us section-content'>
        <h1>
          Why <span className='highlight'>Choose</span> Us
        </h1>
        <p className='subheader'>
          We Stand As Your Partner. Our Dedication To Innovation, And Customer
          Satisfaction Sets Us Apart.
        </p>
        <div className='features'>
          <div className='feature'>
            <FeatureComponent
              Icon={FaPhoneAlt}
              title='24 Hour Support'
              description='We stand as your trusted partner. Our dedication to quality, innovation, and customer satisfaction sets us apart.'
            />
            <FeatureComponent
              Icon={IoShieldCheckmark}
              title='Best Price'
              description='We Stand As Your Trusted Partner. Our Dedication To Quality, Innovation, And Customer Satisfaction Sets Us Apart.'
            />
          </div>
          <div className='feature'>
            <FeatureComponent
              Icon={FaMedal}
              title='Verified License'
              description='We Stand As Your Trusted Partner. Our Dedication To Quality, Innovation, And Customer Satisfaction Sets Us Apart.'
            />
            <FeatureComponent
              Icon={IoMdCloseCircle}
              title='Free Cancellation'
              description='We Stand As Your Trusted Partner. Our Dedication To Quality, Innovation, And Customer Satisfaction Sets Us Apart.'
            />
          </div>
        </div>
        {/* <div className="images"> */}

        <img
          className='absolute-img img2 '
          data-aos='fade-down-right'
          data-aos-delay='1000'
          src='https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/WhyUs-left.png?raw=true'
          alt='Orange Supercar'
        />
        <img
          className='absolute-img img1'
          data-aos='fade-up-left'
          data-aos-delay='1500'
          src='https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/WhyUs-right.png?raw=true'
          alt='Orange Supercar'
        />

        {/* </div> */}
      </div>
    </>
  )
}

export default WhyUs
