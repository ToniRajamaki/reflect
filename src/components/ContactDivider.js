import React from 'react'
import '../styles/ContactDivider.css'
import { FaPhone } from 'react-icons/fa' // Import phone icon

const ContactSection = () => {
  return (
    <div className='flex justify-center bg-gray-50 mt-40 contact-section'>
      <div className='max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8'>
        <h2 className='text-center text-2xl font-bold sm:text-4xl'>
          <p data-aos="fade-right" className='text-gray-900'>Want updates about big releases and product launches?</p>
          <p>
            <span data-aos="fade-left" data-aos-delay="500" className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Sign up for our newsletter.</span>
          </p>
        </h2>
        <form
          action='https://github.us3.list-manage.com/subscribe/post?u=6a33c422777aedd88e9a9488e&amp;id=9b99f013b8'
          method='post'
          target='_blank'
          className='justify-center mt-8 sm:flex'>
          <input
            aria-label='Email address'
            name='EMAIL'
            type='email'
            required=''
            className='w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline focus:border-blue-300 sm:max-w-xs'
            placeholder='Enter your email'
          />
          <input
            type='hidden'
            value='8'
            name='group[27425][8]'
            id='mce-group[27425]-27425-3'
          />
          <div className='flex mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
          <a
        href="#"
        className="font-semibold text-lg px-5 py-3  leading-6 text-white bg-gradient-to-b from-secondary  to-primary rounded-md transition-transform duration-300 transform hover:brightness-90 focus:outline-none focus:shadow-outline"
      >
        Notify me
      </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactSection
