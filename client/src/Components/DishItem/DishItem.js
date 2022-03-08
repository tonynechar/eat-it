import React, { useContext } from 'react'
import { OrderContext } from '../../App';
import { useParams } from 'react-router-dom';
import './DishItem.css';

function DishItem({ dish }) {
  
  const { order, setOrder } = useContext(OrderContext);
  const params = useParams();

  const handleClick = (e, dish) => {
    e.preventDefault();
    if (!order.restaurantId || params._id !== order.restaurantId) {
      const newDish = {
        [dish._id]: 1 
      }
      setOrder({...order, restaurantId: params._id, dishes: Object.assign(order.dishes, newDish)});
    } else if (order.restaurantId && order.dishes.hasOwnProperty(dish._id)) {
      const newDish = order.dishes[dish._id] += 1;
      setOrder({...order, dishes: Object.assign(order.dishes, newDish)});
    } else if (order.restaurantId && !order.dishes.hasOwnProperty(dish._id)) {
      const newDish = {
        [dish._id]: 1 
      }
      setOrder({...order, restaurantId: params._id, dishes: Object.assign(order.dishes, newDish)});
    }
  }

  return (
    <div className='dish-item-container' onClick={(e) => handleClick(e, dish)}>
      <img src={dish.dishImage} alt='' />
      <div className='dish-item-info-container'>
        {dish.dishName}
        <p>${dish.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default DishItem