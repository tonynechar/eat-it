import React from 'react';
import { useNavigate } from "react-router-dom";
import './RestaurantItem.css';

function RestaurantItem({ restaurant }) {
  let navigate = useNavigate();
  let categoriesText = [];
  for (let i = 0; i < restaurant.categories.length; i++) {
    categoriesText.push(restaurant.categories[i].slice(0, -3));
  }

  return (
  
    <div className='restaurant-item-container' onClick={() => {navigate(`/restaurants/${restaurant.restaurantName.toLowerCase().split(' ').join('-')}/${restaurant._id}`)}}>
      <img src={restaurant.restaurantImage} alt=''/>
      <div className='restaurant-item-subcontainer'>
        <p className='name'>{restaurant.restaurantName}</p>
      </div>
    </div>
  )
}

export default RestaurantItem