import React from 'react'

function NavFood({navFood, filterFood}) {
  return (
    <div className='buttons'>
      {navFood.map((food)=> {
       return <button key={food} onClick={()=> filterFood(food) }>{food}</button>
      })}
    </div>
  )
}

export default NavFood
