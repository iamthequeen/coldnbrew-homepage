import React from 'react'

function RowOfLogos() {
    const logosData = [
      {
        id: 1,
        name: "Mr. Coffee",
        imgSrc: "https://cdn.freebiesupply.com/logos/large/2x/mr-coffee-logo-png-transparent.png"
      },
      {
        id: 2,
        name: "New Holland Coffee Co",
        imgSrc: "https://www.newhollandcoffee.com/wp-content/uploads/2017/05/New-Holland-Coffee_logo-300x252.png"
      },
      {
        id: 3,
        name: "Frontier Organic Coffee",
        imgSrc: "https://www.kindpng.com/picc/m/714-7145310_frontier-organic-coffee-logo-png-transparent-frontier-natural.png"
      },
      {
        id: 4,
        name: "Gloria Jean's coffee",
        imgSrc: "https://assets.simon.com/tenantlogos/2225.png"
      },
      {
        id: 5,
        name: "Kauai Coffee",
        imgSrc: "https://cdn.freebiesupply.com/logos/large/2x/kauai-coffee-logo-png-transparent.png"
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