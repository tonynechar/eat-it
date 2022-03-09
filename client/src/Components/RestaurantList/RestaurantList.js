import React from 'react';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import { v4 as uuidv4 } from 'uuid';
import './RestaurantList.css';

function RestaurantList({ restaurants, category }) {

  const categorizedRestaurants = restaurants.map(restaurant => {
    if (restaurant.categories.includes(category) || category === '') {
      return <RestaurantItem key={uuidv4()} restaurant={restaurant} />;
    }
    return null;
  });

  return (
    <div className='restaurant-list'>
      {categorizedRestaurants}
    </div>
  )
}

export default RestaurantList