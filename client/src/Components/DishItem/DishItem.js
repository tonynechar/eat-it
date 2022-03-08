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
      setOrder(Object.assign(order, { dishes: [] }));
      dish.quantity = 1;
      order.dishes.push(dish);
      setOrder({...order, restaurantId: params._id, dishes: order.dishes});
    } else if (order.restaurantId && order.dishes.some(current => current.dishName === dish.dishName)) {
      dish.quantity += 1;
      setOrder({...order, dishes: order.dishes});
    } else if (order.restaurantId && !order.dishes.some(current => current.dishName === dish.dishName)) {
      dish.quantity = 1;
      order.dishes.push(dish);
      setOrder({...order, dishes: order.dishes});
    }
    console.log(order.dishes);
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