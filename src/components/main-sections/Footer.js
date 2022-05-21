import React from 'react'

function Footer()  {
    const textColData = [
      {
        heading: "Address",
        firstLine: "1090 Richmond Avenue,",
        secondLine: "Houston, Texas 7704 USA"
      },
      {
        heading: "Contact",
        firstLine: "+1 627 8907 1264",
        secondLine: "coldbrew@mail.com"
      },
      {
        heading: "Office",
        firstLine: "Monday - Saturday",
        secondLine: "9AM - 10PM"
      }
    ]
    
    const socialIconsData = [
      {
        name: "Instagram",
        imgSrc: "images/logos/instagram.png"
      },
      {
        name: "Telegram",
        imgSrc: "images/logos/telegram.png"
      },
      {
        name: "LinkedIn",
        imgSrc: "images/logos/linkedin.png"
      },
      {
        name: "Twitter",
        imgSrc: "images/logos/twitter.png"
      }
    ]
    
    const otherCols = textColData.map(textCol => (
    <div className="col">
      <h3>{textCol.heading}</h3>
        <p>{textCol.firstLine}</p>
        <p>{textCol.secondLine}</p>
    </div>
    ))
    
    const socialMedia = socialIconsData.map(item => (
    <div className="social-media">
        <a href="#0"><img src={item.imgSrc} alt={item.name} className="social-icon"/></a>
    </div>
    ))
    
    return (
    <footer>
      <h2>ColdnBrew.</h2>
        <div className="columns">
          <div className="col">
            <p>Subscribe to our newsletter</p>
            <div className="input-and-btnlink">
              <input type="email" placeholder="Your email address"/>
              <a href="#0" >
              <div className="btn-link orange-btn">
                <div className="arrow-container">
            <button type="button" className="oh">  
    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 16">
      <path class="stem" d="M5.4995 14.5V0"/>
      <path class="leaf" d="M5.4995 15c-.5-3-2.9-5.6-4.5-6"/>
      <path class="leaf" d="M5.4995 15c.5-3 2.9-5.6 4.5-6"/>
    </svg>
  </button>
          </div>
              </div>
                
              </a>
            </div>
          </div>  
          {otherCols}
        </div>
        <hr/>
        <div id="footer-bottom" className="columns">
        <div className="columns social-icons">
          {socialMedia}
        </div>
          <div>
          <p>&copy; 2021 Copyright.<span>coldnbrew.co</span></p>
            
          </div>
          </div> 
    </footer>
    )
  }

export default Footer