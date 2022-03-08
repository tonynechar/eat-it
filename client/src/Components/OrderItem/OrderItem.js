import React from 'react'
import './OrderItem.css';

function OrderItem({ item }) {

  return (
    <div className='order-item-container'>
      <img src={item.dishImage} alt='' />
      <div className='order-item-info-container'>
        <h4>{item.dishName}</h4>
        <p>${item.price.toFixed(2)}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    </div>
  )
}

export default OrderItem