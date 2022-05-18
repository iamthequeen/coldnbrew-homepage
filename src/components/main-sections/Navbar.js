import React, { useState } from 'react'

function Navbar() {
  
    const [active, setActive] = useState(false)
    
    const handleChange = e => {
  
   if (e.target) setActive(prevActive => !prevActive)
     
    }
    
    active ? document.body.classList.add('active') : 
    document.body.classList.remove('active')
  
    return (
    <nav>
        <div className="mobile-menu-container">
    <label htmlFor="checkbox"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172" fill="#000000">
        <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" mixBlendMode= "normal">
          <path d="M0,172v-172h172v172z" fill="none"></path>
          <g fill="#ffffff">
            <path d="M14.33333,35.83333v14.33333h143.33333v-14.33333zM14.33333,78.83333v14.33333h143.33333v-14.33333zM14.33333,121.83333v14.33333h143.33333v-14.33333z"></path>
          </g>
        </g>
      </svg></label>
    <input type="checkbox" id="checkbox" onChange={handleChange}/>
    <ul class="mobile-menu">
      <li><a href="#0">About</a></li>
      <li><a href="#0">Pricing</a></li>
      <li><a href="#0">Features</a></li>
      <li><a href="#0">Contact</a></li>
    </ul>
  </div>
        
      <ul className="main-menu">
        <li><a href="#0">ColdnBrew</a></li>
        <div className="main-links">
        <li><a href="#0">About</a></li>
        <li><a href="#0">Pricing</a></li>
        <li><a href="#0">Features</a></li>
        <li><a href="#0">Contact</a></li>
          </div>
      </ul>
    </nav>
    )
  }

export default Navbar