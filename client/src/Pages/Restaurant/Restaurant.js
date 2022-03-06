import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../Services/ApiService';
import './Restaurant.css';

function Restaurant() {
  
  const params = useParams();
  const [currentRestaurant, setCurrentRestaurant] = useState({});

  useEffect(() => {
    apiService.getOneRestaurant(params.restaurantName, params._id)
    .then(data => setCurrentRestaurant(data));
  }, [params]);

  return (
    <div>
      {currentRestaurant.restaurantName}
    </div>
  
  )
}

export default Restaurant