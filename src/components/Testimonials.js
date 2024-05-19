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
    <div className='text-gray-600  pt-8 ' id='reviews'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
        <div className='mb-10 space-y-4 px-6 md:px-0'>
          <h2 className='text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl'>
            We have some{' '}
            <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
              Fans
            </span>
          </h2>
        </div>

        <div className='md:columns-2 lg:columns-3 gap-8 space-y-8'>
          <div className='aspect-auto p-8 border border-secondary border-opacity-30  rounded-3xl bg-secondary bg-opacity-10   shadow-gray-600/10 '>
            <div className='flex gap-4'>
              <img
                className='w-12 h-12 rounded-full '
                src='https://randomuser.me/api/portraits/women/12.jpg'
                alt='user avatar'
                width='400'
                height='400'
                loading='lazy'
              />
              <div>
                <h6 className='text-lg font-medium text-gray-700 '>
                  Daniella Doe
                </h6>
                <p className='text-sm text-gray-500 '>Mobile dev</p>
              </div>
            </div>
            <p className='mt-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus
              libero aspernatur laborum cum, a suscipit, ratione ea totam ullam!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>

          <div className='hidden md:block aspect-auto p-8 border border-secondary border-opacity-30  rounded-3xl bg-secondary bg-opacity-10   shadow-gray-600/10 '>
            <div className='flex gap-4'>
              <img
                className='w-12 h-12 rounded-full '
                src='https://randomuser.me/api/portraits/women/14.jpg'
                alt='user avatar'
                width='200'
                height='200'
                loading='lazy'
              />
              <div>
                <h6 className='text-lg font-medium text-gray-700 '>Jane doe</h6>
                <p className='text-sm text-gray-500 '>Marketing</p>
              </div>
            </div>
            <p className='mt-8'>
              {' '}
              Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non
              cumque quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>

          <div className='hidden md:block aspect-auto p-8 border border-secondary border-opacity-30  rounded-3xl bg-secondary bg-opacity-10   shadow-gray-600/10 '>
            <div className='flex gap-4'>
              <img
                className='w-12 h-12 rounded-full'
                src='https://randomuser.me/api/portraits/women/18.jpg'
                alt='user avatar'
                width='200'
                height='200'
                loading='lazy'
              />
              <div>
                <h6 className='text-lg font-medium text-gray-700 '>
                  Yanick Doe
                </h6>
                <p className='text-sm text-gray-500 '>Developer</p>
              </div>
            </div>
            <p className='mt-8'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>

          <div className='hidden md:block aspect-auto p-8 border border-secondary border-opacity-30  rounded-3xl bg-secondary bg-opacity-10   shadow-gray-600/10 '>
            <div className='flex gap-4'>
              <img
                className='w-12 h-12 rounded-full'
                src='https://randomuser.me/api/portraits/women/2.jpg'
                alt='user avatar'
                width='200'
                height='200'
                loading='lazy'
              />
              <div>
                <h6 className='text-lg font-medium text-gray-700 '>Jane Doe</h6>
                <p className='text-sm text-gray-500 '>Mobile dev</p>
              </div>
            </div>
            <p className='mt-8'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>

          <div className='aspect-auto p-8 border border-secondary border-opacity-30  rounded-3xl bg-secondary bg-opacity-10   shadow-gray-600/10 '>
            <div className='flex gap-4'>
              <img
                className='w-12 h-12 rounded-full'
                src='https://randomuser.me/api/portraits/women/62.jpg'
                alt='user avatar'
                width='200'
                height='200'
                loading='lazy'
              />
              <div>
                <h6 className='text-lg font-medium text-gray-700 '>Andy Doe</h6>
                <p className='text-sm text-gray-500 '>Manager</p>
              </div>
            </div>
            <p className='mt-8'>
              {' '}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>

          <div className='aspect-auto p-8 border border-secondary border-opacity-30  rounded-3xl bg-secondary bg-opacity-10   shadow-gray-600/10 '>
            <div className='flex gap-4'>
              <img
                className='w-12 h-12 rounded-full '
                src='https://randomuser.me/api/portraits/women/19.jpg'
                alt='user avatar'
                width='400'
                height='400'
                loading='lazy'
              />
              <div>
                <h6 className='text-lg font-medium text-gray-700 '>
                  Yanndy Doe
                </h6>
                <p className='text-sm text-gray-500 '>Mobile dev</p>
              </div>
            </div>
            <p className='mt-8'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto laboriosam deleniti aperiam ab veniam sint non cumque
              quis tempore cupiditate. Sint libero voluptas veniam at
              reprehenderit, veritatis harum et rerum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
