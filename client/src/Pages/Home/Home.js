import React, { useEffect, useState } from 'react';
import RestaurantList from '../../Components/RestaurantList/RestaurantList';
import apiService from '../../Services/ApiService';
import './Home.css';

function Home() {

  const [restaurants, setRestaurants] = useState([]);
  const [category, setCategory] = useState('');
  
  useEffect(() => {
    apiService.getRestaurants()
    .then(data => setRestaurants(data));
  }, []);

  const handleClick = (e, selectedCategory) => {
    e.preventDefault();
    setCategory(selectedCategory);
  }

  return (
    <div>
      <div>
        Search
      </div>
      <div>
        <h3 className='categories-title'>Restaurants</h3>
        <div className='categories-container'>
          <div className='icon-container' onClick={(e) => handleClick(e, '')}>
            <p className='icon'>🍽</p>
            <h4>All</h4>
          </div>
          <div className='icon-container' onClick={(e) => handleClick(e, 'Pizza 🍕')}>
            <p className='icon'>🍕</p>
            <h4>Pizza</h4>
          </div>
          <div className='icon-container' onClick={(e) => handleClick(e, 'Pasta 🍝')}>
            <p className='icon'>🍝</p>
            <h4>Pasta</h4>
          </div>
          <div className='icon-container' onClick={(e) => handleClick(e, 'Burgers 🍔')}>
            <p className='icon'>🍔</p>
            <h4>Burgers</h4>
          </div>
          <div className='icon-container' onClick={(e) => handleClick(e, 'Fast Food 🍟')}>
            <p className='icon'>🍟</p>
            <h4>Fast Food</h4>
          </div>
          <div className='icon-container' onClick={(e) => handleClick(e, 'Healthy 🥗')}>
            <p className='icon'>🥗</p>
            <h4>Healthy</h4>
          </div>
          <div className='icon-container' onClick={(e) => handleClick(e, 'Sushi 🍣')}>
            <p className='icon'>🍣</p>
            <h4>Sushi</h4>
          </div>
          <div className='icon-container' onClick={(e) => handleClick(e, 'Seafood 🐟')}>
            <p className='icon'>🐟</p>
            <h4>Seafood</h4>
          </div>
        </div>
      </div>
      <div>
        <RestaurantList restaurants={restaurants} category={category}/>
      </div>
    </div>
  )
}

export default Home