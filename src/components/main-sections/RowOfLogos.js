import React from 'react'

function RowOfLogos() {
    const logosData = [
      {
        id: 1,
        name: "Mr. Coffee",
        imgSrc: "images/logos/mr-coffee.png"
      },
      {
        id: 2,
        name: "New Holland Coffee Co",
        imgSrc: "images/logos/new-holland-coffee.png"
      },
      {
        id: 3,
        name: "Frontier Organic Coffee",
        imgSrc: "images/logos/frontier-organic-coffee.png"
      },
      {
        id: 4,
        name: "Gloria Jean's coffee",
        imgSrc: "images/logos/gloria-jeans-coffees.png"
      },
      {
        id: 5,
        name: "Kauai Coffee",
        imgSrc: "images/logos/kauai-coffee.png"
      }
    ]
    
    const logos = logosData.map(logo => (
    <div className="logo">
      <img src={logo.imgSrc} alt={logo.name} className="logo-img"/>
    </div>
    ))
    
    return (
    <section className="logos">
      {logos}
    </section>
    )
  }

export default RowOfLogos