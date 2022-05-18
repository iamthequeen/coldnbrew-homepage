import React from 'react'

function ProductSpotlight() {
  return (
  <section>
    <h2>We provide the stylish design and best quality just for you!</h2>
      <div className="two-cols">
        
        <div className="col">
          <img src="https://images.unsplash.com/photo-1557551541-ba7165b5f764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="teapot-coffee-img"/>
          <img src="" alt=""/>
          <div className="pointer"></div>
        </div>
        
        <div className="col">
          <div className="text-of-col">
          <h3>Teapot Coffee</h3>
          <p>Full Spectrum CBD Oil</p>
          <div className="two-cols">
            <div className="col">
              <h4>$120.99</h4>
              <p>Special Price</p>
            </div>
            <div className="col">
              <h4>2 Colors</h4>
              <p>Black and White</p>
            </div>
          </div>
          
          <p>We're thrilled about our light roast. It was our first coffee we ever roasted, so it has a special place in our hearts.</p>
            </div>
          <div className="btn-links">
            <a className="black-btn" href="#0">Buy Now</a>
            <a href="#0">
            <div className="last-link-container">
              
            <span>See More</span>
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
      </div>
  </section>
  )
}

export default ProductSpotlight