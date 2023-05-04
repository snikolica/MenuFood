import { useState } from 'react'
import {menu} from './Menu'
import FoodMenu from './FoodMenu';
import NavFood from './NavFood';

const navigateFood = new Set(menu.map((type)=> {
  return type.type
}))
const typeFood = ['all', ...navigateFood]
// console.log(typeFood);

function App() {
const [menuFood, setMenuFood] = useState(menu);
const [navFood, setNavFood] = useState(typeFood)

const filterFood = (type) => {
if (type === 'all') {
  setMenuFood(menu)
  return;
}
const newItems = menu.filter((item)=> item.type === type)
setMenuFood(newItems)
}

  return (
    <div className='container'>
<h1>Menu</h1>
<div className="underline"></div>
<NavFood navFood={navFood} filterFood={filterFood} />
<div className="foodMenu">
{menuFood.map((food) => {
  return   <FoodMenu key={food.id} {...food} />
})}
  </div>
    </div>
  )
}

export default App
