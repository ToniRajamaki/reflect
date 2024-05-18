import React from 'react'
import '../styles/SellingSection.css' // Ensure this CSS file is properly set up
import "../styles/ContactDivider.css"


function SellingSection() {
  return (
    <div className='px-4 py-12 mx-auto text-center sm:px-6 lg:py-16 lg:px-8 contact-section'>
      <p className='text-3xl font-bold leading-normal  text-gray-900  sm:text-4xl'>
        <span className='dark:text-gray-text bg-clip-text '>Ready to try?</span>

      


        <br />
        <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
          Read the Game-changer.
        </span>
      </p>
      <div className='flex justify-center gap-4 mt-8 font-medium'>
        <a
          href='#'
          className='px-5 py-3 text-base leading-6 text-white bg-primary  rounded-md hover:bg-indigo-500 -700 focus:outline-none focus:shadow-outline'>
          Take a Test
        </a>
        <a
          href='#'
          className='px-5 py-3 text-base leading-6 text-indigo-700  bg-indigo-100  rounded-md hover:text-primary -400 hover:bg-indigo-50 -800 focus:outline-none focus:shadow-outline focus:border-indigo-300'>
          Download PDF
        </a>
      </div>
    </div>
  )
}

export default SellingSection
