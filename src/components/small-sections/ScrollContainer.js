import React from 'react'

function ScrollContainer() {
    const word = "Scroll to Explore"
    const wordArr = word.split("")
    let circleLetters = wordArr.map((item, index) => (
       <span style={{transform: `rotate(${index *9}deg)` }} className="ind-letter">{item}</span>
    ))
                                    
      return (
      <div className="scroll-container">
          <div className="main-shape"></div>
          <div className="words-and-circle">
            <div className="arrow-background"></div>
            <div className="arrow-container">
              <button type="button" className="oh">  
      <svg class="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 16">
        <path class="stem" d="M5.4995 14.5V0"/>
        <path class="leaf" d="M5.4995 15c-.5-3-2.9-5.6-4.5-6"/>
        <path class="leaf" d="M5.4995 15c.5-3 2.9-5.6 4.5-6"/>
      </svg>
    </button>
            </div>
            
            <div className="scrolling-words">
              <div className="rotation-container">
              <span id="words-in-circle">
                {circleLetters}
              </span>
              <div className="semi-circle"></div>
            </div>
              </div> 
          </div>
      </div>
      )
    }

export default ScrollContainer