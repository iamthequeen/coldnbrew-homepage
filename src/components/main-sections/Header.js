import React from 'react'
import HeroInfoColumns from '../small-sections/HeroInfoColumns'


function Header() {
  return (
    <header>
     <div className="col">
       <div className="header-text">
   <h1>Choose your coffee maker with CnB</h1>
     <p>Buy the best and premium coffee makers</p>
     <hr/>
       <HeroInfoColumns/>
       </div>
       </div>
      <div className="col">
        <img src={"images/heroImg.jpg"} alt="" className="header-img"/>
     </div>
       
 </header>
  )
}

export default Header