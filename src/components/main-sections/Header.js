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
        <img src="https://images.unsplash.com/photo-1557551541-ba7165b5f764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="header-img"/>
     </div>
       
 </header>
  )
}

export default Header