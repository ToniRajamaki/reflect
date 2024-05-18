import React from 'react'
import '../styles/SellingSection.css' // Ensure this CSS file is properly set up


function SellingSection() {
  return (
    <div className='px-4 py-12 mx-auto text-center sm:px-6 lg:py-16 lg:px-8 '>
      <p className='text-3xl font-extrabold leading-normal tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl'>
        <span className='text-primary'>Ready to try it?</span>
        <br />
        <span className='text-indigo-600 dark:text-indigo-400'>
          Read the documentation.
        </span>
      </p>
      <div className='flex justify-center gap-4 mt-8 font-medium'>
        <a
          href='#'
          className='px-5 py-3 text-base leading-6 text-white bg-indigo-600 dark:bg-gray-800 rounded-md hover:bg-indigo-500 dark:hover:bg-gray-700 focus:outline-none focus:shadow-outline'>
          Take a Test
        </a>
        <a
          href='#'
          className='px-5 py-3 text-base leading-6 text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-gray-900 rounded-md hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 focus:outline-none focus:shadow-outline focus:border-indigo-300'>
          Download PDF
        </a>
      </div>
    </div>
  )
}

export default SellingSection
