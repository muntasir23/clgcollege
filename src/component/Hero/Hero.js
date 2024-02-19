import React from 'react'
import './Hero.css'

export default function Hero() {

  return (
    <div className='hero'>
      <div className='square-one'>
        <div  className='square-two'>
          <div  className='square-three'>
            
          </div>
        </div>
      </div>

      <div className='hero-name-section'>
        <h2>Department Of Mathematics. <br/> Chittagong College.</h2>
        {/* <h1>Mathematics</h1> */}

        <p>Mathematics Department is known as a royal department of Chittagong College. It is a highly <br /> facilitated with lab faciliy classroom faciliy etc. </p>

        <div className='hero-btns'>
        <button className='video-show-btn'>
          Our Gallery
        </button>
        <button className='Notice-show-btn'>
          Explore Notices
        </button>
        </div>
      </div>
    </div>
  )
}
