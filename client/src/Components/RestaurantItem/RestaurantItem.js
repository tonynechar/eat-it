import React from 'react';
import { useNavigate } from "react-router-dom";
import './RestaurantItem.css';

function RestaurantItem({ restaurant }) {
  let navigate = useNavigate();
  let categoriesText = [];
  for (let i = 0; i < restaurant.categories.length; i++) {
    categoriesText.push(restaurant.categories[i].slice(0, -3));
  }

  // <span> - </span>{restaurant.categories[1]}

  // console.log(categoriesText);

  // let additionalCategories = [];
  // for (let i = 1; i < categoriesText.length; i++) {
  //   additionalCategories.append(<span> - </span>categoriesText[i]);
  // }

  return (
  
    <div className='restaurant-item-container' onClick={() => {navigate(`/restaurants/${restaurant.restaurantName.toLowerCase()}`)}}>
      <img src={restaurant.restaurantImage} alt=''/>
      <div className='restaurant-item-subcontainer'>
        <p className='name'>{restaurant.restaurantName}</p>
        {/* <p>{restaurant.categories[0]}{}</p> */}

      </div>
    </div>

    // <div>

    // </div>
  )
}

export default RestaurantItem