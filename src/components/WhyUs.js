import React from 'react'
import { FaPhoneAlt, FaMedal } from 'react-icons/fa'
import { IoMdCloseCircle, IoShieldCheckmark } from 'react-icons/io'
import FeatureComponent from './FeatureComponent'
import '../styles/WhyUs.css'

const WhyUs = () => {
  return (
  <section className="bg-white-900"
  id='about-us'>
  <div className="grid max-w-screen-xl text-left  px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
    <div data-aos="fade-right" className="mr-auto place-self-center lg:col-span-7">
      <h1
        className="max-w-2xl mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl xl:text-6xl ">
        Build lasting <br /><span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Habits</span> &amp; <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Lifestyle</span>.
      </h1>

      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl -400">Monitor and measure your performance with comprehensive metrics. Optimize your processes for maximum efficiency And actually see the results.
      </p>

      <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">

      <a
        href="#"
        className="font-semibold text-lg px-5 py-3  leading-6 text-white bg-gradient-to-b from-secondary  to-primary rounded-md transition-transform duration-300 transform hover:brightness-90 focus:outline-none focus:shadow-outline"
      >
        Start now
      </a>

      <a
          href='#'
          className='font-semibold text-lg px-5 py-3  leading-6 text-secondary  bg-indigo-100  rounded-md   hover:bg-indigo-200 -800 focus:outline-none focus:shadow-outline focus:border-indigo-300'>
          Get free template
        </a>

      </div>
    </div>

    <div data-aos="fade-left" className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
      <img src="https://demo.themesberg.com/landwind/images/hero.png" alt="hero image" />
    </div>

  </div>
</section>
  )
}

export default WhyUs
