import React from 'react'

function HeroInfoColumns() {
    const columnData = [
      {
        id: 1,
        number: "120K",
        title: "Testimonials",
        description: "Testimonials from various customers who trust us"
      },
      {
        id: 2,
        number: "340+",
        title: "Exclusive Product",
        description: "Premium materials with various stylish models"
      }
    ]
    
    const indColumn = columnData.map(item => (
      <div className="header-mini-col" key={item.id}>
        <span className="big-number">{item.number}</span>
        <p>{item.title}</p>
        <p>{item.description}</p>
      </div>
    ))
      
    return (
    <div className="columns two-cols">
      {indColumn}
    </div>
    )
  }

export default HeroInfoColumns