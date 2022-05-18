import React from 'react'

function SpecialFeatsSection({children}) {
 
    const columnData = [
      {
        id: 1,
        iconCode: children[0],
        title: "Stylish Design",
        description: "A unique and different style from other teapots gives more luxury."
      },
      {
        id: 2,
        iconCode: children[1],
        title: "Premium Quality",
        description: "Premium quality that makes coffee maker more elegant and durable."
      },
       {
        id: 3,
        iconCode: children[2],
        title: "The Best Wood",
        description: "We present the best choice of wood with premium quality and sturdiness."
       }
      ]
    
      const indColumn =
      columnData.map(item => (
      <div key={item.id} className="icon-col">
          <div className="shape-icon-container">     
        {item.iconCode}
            <div className="brown-square"></div>
            </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
      </div>
      ))
      
   
    return (
    <section>
        <div className="section-top">
      <h2>Special features that make you happy and cheer up!</h2>
        <a className="black-btn" href="#0">See more</a>
        </div>
        <div className="columns icon-cols">{indColumn}</div>
    </section>
    )
  }

export default SpecialFeatsSection