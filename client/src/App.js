import React, { useState } from 'react';
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

export const OrderContext = React.createContext(null);

function App() {

  const [order, setOrder] = useState({restaurantId: '', dishes: {}, userInfo: {}});

  return (
    <OrderContext.Provider value={{order, setOrder}}>
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
    </OrderContext.Provider>
  )
}

export default App