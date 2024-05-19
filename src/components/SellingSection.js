import React from 'react'
import '../styles/SellingSection.css' // Ensure this CSS file is properly set up
import "../styles/ContactDivider.css"


function SellingSection() {
  return (
    <div className='px-4 py-1 mx-auto text-center sm:px-6 lg:py-24 lg:px-8 bg-indigo-100 bg-opacity-50 '>
      <p className='text-3xl font-bold leading-normal  text-white-900  sm:text-4xl'>
        <span className='bg-clip-text dark:text-gray-900'>Ready to try?</span>
        <br />
        <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
          Read the Game-changer.
        </span>
      </p>
      <div className='flex justify-center gap-4 mt-8 font-medium'>
      <a
        href="#"
        className="font-semibold text-lg px-5 py-3  leading-6 text-white bg-gradient-to-b from-secondary  to-primary rounded-md transition-transform duration-300 transform hover:brightness-90 focus:outline-none focus:shadow-outline"
      >
        Take a Test
      </a>
      <a
          href='#'
          className='font-semibold text-lg px-5 py-3  leading-6 text-secondary  bg-indigo-100  rounded-md   hover:bg-indigo-200 -800 focus:outline-none focus:shadow-outline focus:border-indigo-300'>
          Download PDF
        </a>
      </div>
    </div>
  )
}

export default SellingSection
