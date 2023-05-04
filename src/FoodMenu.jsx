import React from 'react'

function FoodMenu({id, price, desc, picture, title, type}) {
  return (
    <div className='box'>
      <img src={picture} alt={title} />
      <div className="info">
        <h3>{title}</h3>
        <div className="price">
            <h5>{price}</h5>
        </div>
      </div>
      <p>{desc}</p>
    </div>
  )
}

export default FoodMenu
