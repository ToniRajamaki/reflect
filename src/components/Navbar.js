import '../styles/Navbar.css'
import React from 'react'

const Navbar = () => {

  return (
    <nav className='flex w-full absolute flex-wrap items-center justify-between z-50 p-3 bg-transparent bg-opacity-0 '>
      <div
      className='bg-indigo-100  rounded-md p-2 bg-opacity-70'>
        <img
          src='https://github.com/ToniRajamaki/reflect/blob/main/public/logo_reflect.png?raw=true'
          alt='logo'
          width={200}
        />
      </div>
      <div className='toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 '>
        <a
          href='#home'
          className='font-semibold text-lg block md:inline-block xl:mx-4 hover:text-secondary px-3 hover:border-b-2 hover:border-secondary hover:-translate-y-1 transition-all  py-3 '>
          Home
        </a>
        <a
          href='#services'
          className='font-semibold text-lg block md:inline-block xl:mx-4 hover:text-secondary px-3 hover:border-b-2 hover:border-secondary hover:-translate-y-1 transition-all  py-3 '>
          Services
        </a>
        <a
          href='#aboutus'
          className='font-semibold text-lg block md:inline-block xl:mx-4 hover:text-secondary px-3 hover:border-b-2 hover:border-secondary hover:-translate-y-1 transition-all  py-3 '>
          About us
        </a>
        <a
          href='#gallery'
          className='font-semibold text-lg block md:inline-block xl:mx-4 hover:text-secondary px-3 hover:border-b-2 hover:border-secondary hover:-translate-y-1 transition-all  py-3 '>
          Gallery
        </a>
        <a
          href='#contactUs'
          className='font-semibold text-lg block md:inline-block xl:mx-4 hover:text-secondary px-3 hover:border-b-2 hover:border-secondary hover:-translate-y-1 transition-all  py-3 '>
          Visit Us
        </a>
      </div>

      <div className='toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded'>
        <a href='tel:+123'>
          <div className='flex justify-end '>
          <a
          href='#'
          className='font-semibold text-lg px-5 py-3  leading-6 text-secondary  bg-indigo-100  rounded-md   hover:bg-indigo-200 -800 focus:outline-none focus:shadow-outline focus:border-indigo-300'>
          Join us!
        </a>
          </div>
        </a>
      </div>

      <div className='flex md:hidden'>
        <button id='hamburger'>
          <img
            className='toggle block'
            src='https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png'
            width='40'
            height='40'
          />
          <img
            className='toggle hidden'
            src='https://img.icons8.com/fluent-systems-regular/2x/close-window.png'
            width='40'
            height='40'
          />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
