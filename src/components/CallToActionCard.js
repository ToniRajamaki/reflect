import React from 'react'
import '../styles/CallToActionCard.css'

function CallToActionCard() {
  return (
    <div className='' id='pricing'>
      <div>
        <h2 className='text-3xl font-bold tracki text-center mt-12 sm:text-5xl '>
          Pricing
        </h2>
        <p className='max2mx-auto mt-4 text-xl text-center '>
          Get started on our free plan and upgrade when you are ready.
        </p>
      </div>

      <div className='mt-24 lg:mx-8 flex justify-center gap-12 flex-wrap  '>
        <div className='relative p-8 m-0 border border-secondary w-96 border-opacity-30  rounded-xl bg-secondary bg-opacity-10   shadow-gray-600/10 flex flex-col'>
          <div className='flex-1'>
            <h3 className='text-xl font-semibold '>Free</h3>
            <p className='mt-4 flex items-baseline '>
              <span className='text-5xl font-semibold tracking-tight'>$0</span>
              <span className='ml-1 text-xl font-semibold'>/month</span>
            </p>
            <p className='mt-6 '>You just want to discover</p>
            <ul role='list' className='mt-6 space-y-6'>
              <li className='flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='flex-shrink-0 w-6 h-6 text-primary'
                  aria-hidden='true'>
                  <polyline points='20 6 9 17 4 12'></polyline>
                </svg>
                <span className='ml-3 '>10 Credits</span>
              </li>
              <li className='flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='flex-shrink-0 w-6 h-6 text-primary'
                  aria-hidden='true'>
                  <polyline points='20 6 9 17 4 12'></polyline>
                </svg>
                <span className='ml-3 '>Generate video (2 credits)</span>
              </li>
              <li className='flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='flex-shrink-0 w-6 h-6 text-primary'
                  aria-hidden='true'>
                  <polyline points='20 6 9 17 4 12'></polyline>
                </svg>
                <span className='ml-3 '>Quizz (1 credits) </span>
              </li>
            </ul>
          </div>
          <a
            href='#'
            className='font-semibold text-lg px-5 py-3  leading-6 text-secondary  bg-indigo-100  rounded-md   hover:bg-indigo-200 -800 focus:outline-none focus:shadow-outline focus:border-indigo-300'>
            Sign up for free
          </a>
        </div>
        <div className='relative p-8 border border-secondary w-96  border-opacity-30  rounded-xl bg-secondary bg-opacity-10   shadow-gray-600/10 flex flex-col'>
          <div className='flex-1'>
            <h3 className='text-xl font-semibold '>Pro</h3>
            <p className='absolute top-0 py-1.5 px-4 bg-primary text-white rounded-full text-xs font-semibold uppercase tracking-wide  transform -translate-y-1/2'>
              Most popular
            </p>
            <p className='mt-4 flex items-baseline '>
              <span className='text-5xl font-semibold tracking-tight'>$12</span>
              <span className='ml-1 text-xl font-semibold'>/month</span>
            </p>
            <p className='mt-6 '>
              You want to learn and have a personal assistant
            </p>
            <ul role='list' className='mt-6 space-y-6'>
              <li className='flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='flex-shrink-0 w-6 h-6 text-primary'
                  aria-hidden='true'>
                  <polyline points='20 6 9 17 4 12'></polyline>
                </svg>
                <span className='ml-3 '>30 credits</span>
              </li>
              <li className='flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='flex-shrink-0 w-6 h-6 text-primary'
                  aria-hidden='true'>
                  <polyline points='20 6 9 17 4 12'></polyline>
                </svg>
                <span className='ml-3 '>Powered by GPT-4 (more accurate)</span>
              </li>
              <li className='flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='flex-shrink-0 w-6 h-6 text-primary'
                  aria-hidden='true'>
                  <polyline points='20 6 9 17 4 12'></polyline>
                </svg>
                <span className='ml-3 '>Generate video (2 credits)</span>
              </li>
              <li className='flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='flex-shrink-0 w-6 h-6 text-primary'
                  aria-hidden='true'>
                  <polyline points='20 6 9 17 4 12'></polyline>
                </svg>
                <span className='ml-3 '>Quizz (1 credits) </span>
              </li>
              <li className='flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='flex-shrink-0 w-6 h-6 text-primary'
                  aria-hidden='true'>
                  <polyline points='20 6 9 17 4 12'></polyline>
                </svg>
                <span className='ml-3 '>Analytics on the quizz</span>
              </li>
            </ul>
          </div>
          <a
            href='#'
            className='font-semibold text-lg px-5 py-3  mt-8 leading-6 text-white bg-gradient-to-b from-secondary  to-primary rounded-md transition-transform duration-300 transform hover:brightness-90 focus:outline-none focus:shadow-outline'>
            Sign up now!
          </a>
        </div>
      </div>
    </div>
  )
}

export default CallToActionCard
