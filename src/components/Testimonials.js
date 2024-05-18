import React from 'react'
// Import Swiper styles
import '../styles/Testimonials.css'
// Import modules from swiper/modules

function Testimonials() {
  const testimonials = [
    {
      imgSrc:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg',
      name: 'Eleanor Crisp',
      quote:
        'Renting a motorcycle turned my journey into an adventure. The freedom to explore at my own pace was unparalleled!',
    },
    {
      imgSrc:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg',
      name: 'Gordon Norman',
      quote:
        'From the  booking process to the thrill of the ride, renting wheels with this company exceeded all expectations.',
    },
    {
      imgSrc:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg',
      name: 'Sue Shei',
      quote:
        "Discovering new paths on a rented motorcycle has been a joy. It's the perfect blend of adventure and convenience.",
    },
  ]

  return (
    <div className='testimonials section-content'>
      <h1>
        What Our <span className='highlight'>Customers</span> Have To Say
      </h1>
      <p className='subheader'>
        Your Partner in Excellence: Committed to Quality, Innovation, and
        Satisfaction.
      </p>
      <div className='testimonials-container'>
        {testimonials.map((testimonial, index) => (
          <figure key={index} className='snip1390'>
            <div className='testimonial-header'>
              <div>
                <img
                  src={testimonial.imgSrc}
                  alt='profile-sample'
                  className='profile'
                />
              </div>
              <div className='name-customer'>
                <h2>{testimonial.name}</h2>
                <h4>Customer</h4>
              </div>
            </div>
            <blockquote>{testimonial.quote}</blockquote>
          </figure>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
