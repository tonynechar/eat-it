import React from 'react';
import RestaurantList from '../../Components/RestaurantList/RestaurantList';
import './Home.css';

function Home() {
  return (
    <div>
      <div>
        Search
      </div>
      <div>
        <h3>Category</h3>
        <div className='categories-container'>
          <div className='icon-container'>
            <p className='icon'>🍽</p>
            <h4>All</h4>
          </div>
          <div className='icon-container'>
            <p className='icon'>🍕</p>
            <h4>Pizza</h4>
          </div>
          <div className='icon-container'>
            <p className='icon'>🍝</p>
            <h4>Pasta</h4>
          </div>
          <div className='icon-container'>
            <p className='icon'>🍔</p>
            <h4>Burgers</h4>
          </div>
          <div className='icon-container'>
            <p className='icon'>🍟</p>
            <h4>Fast Food</h4>
          </div>
          <div className='icon-container'>
            <p className='icon'>🥗</p>
            <h4>Healthy</h4>
          </div>
          <div className='icon-container'>
            <p className='icon'>🍣</p>
            <h4>Sushi</h4>
          </div>
          <div className='icon-container'>
            <p className='icon'>🐟</p>
            <h4>Seafood</h4>
          </div>
        </div>
      </div>
      <div>
        <RestaurantList />
      </div>
    </div>
  )
}

export default Home