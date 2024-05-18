import React from 'react'
import '../styles/Achievements.css'
import AnimatedNumbers from 'react-animated-numbers'

function Achievements() {
  return (
    <div className='achievement section-content'>
      <h1>
        Our <span className='highlight'>Achievement</span>
      </h1>
      <p className='subheader'>
        Our Journey Of Success Is A Testament To The Collective Efforts And
        Determination Of Our Team
      </p>

      <div className='figures-container'>
        <div className='figure'
        >
          <AnimatedNumbers
            includeComma
            className='after-content'
            transitions={(index) => ({
              type: 'spring',
              duration: 1 + 0.4,
            })}
            fontStyle={{
              fontSize: '3em',
              fontWeight: '500',
              color: 'var(--main)',
            }}
            animateToNumber={8000}
          />

          <p>Active Member</p>
        </div>
        <div className='figure'>
          <AnimatedNumbers
            includeComma
            className='after-content'
            transitions={(index) => ({
              type: 'spring',
              // stiffness:200,
              duration: 2 + 0.4,
            })}
            fontStyle={{
              fontSize: '3em',
              fontWeight: '500',
              color: 'var(--main)',
            }}
            animateToNumber={100}
          />
          <p>Bike Models</p>
        </div>

        <div className='figure'>
          <AnimatedNumbers
            includeComma
            className='after-content'
            transitions={(index) => ({
              type: 'spring',
              // stiffness:200,
              duration: 3 + 0.4,
            })}
            fontStyle={{
              fontSize: '3em',
              fontWeight: '500',
              color: 'var(--main)',
            }}
            animateToNumber={20000}
          />
          <p>Positive Rating</p>
        </div>
      </div>
    </div>
  )
}

export default Achievements
