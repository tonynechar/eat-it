import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Order from './Pages/Order/Order';
import Restaurant from './Pages/Restaurant/Restaurant';
import Dish from './Pages/Dish/Dish';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <div className='main-container'>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
  
          <Route path="/restaurants/:restaurantName/:_id" element={<Restaurant />} />
          <Route path="/dish/:dishName" element={<Dish />} />
  
        </Routes>
      </div>
      <Navbar />
    </div>
  )
}

export default App