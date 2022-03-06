import React from 'react';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import './RestaurantList.css';

function RestaurantList({ restaurants, category }) {

  const categorizedRestaurants = restaurants.map(restaurant => {
    if (category === '') {
      return <RestaurantItem key={restaurant._id} restaurant={restaurant} />;
    } else if (restaurant.categories.includes(category)) {
      return <RestaurantItem key={restaurant._id} restaurant={restaurant} />;
    }
  });

  return (
    <div>
      {categorizedRestaurants}
    </div>
  )
}

export default RestaurantList