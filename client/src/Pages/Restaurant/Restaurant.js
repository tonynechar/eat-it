import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../Services/ApiService';
import DishesList from '../../Components/DishesList/DishesList';
import './Restaurant.css';

function Restaurant() {
  
  const params = useParams();
  const [currentRestaurant, setCurrentRestaurant] = useState({});
  const [menu, setMenu] = useState([]);
  
  useEffect(() => {
    apiService.getOneRestaurant(params.restaurantName, params._id)
    .then(data => {
      setCurrentRestaurant(data);
      setMenu(data.menu);
    });
  }, []);

  return (
    <div>
      <div className='restaurant-image-container'>
        <img src={currentRestaurant.restaurantImage} alt=''/>
      </div>
      <h2>{currentRestaurant.restaurantName}</h2>
      <DishesList menu={menu} />
    </div>
  )
}

export default Restaurant