import React from 'react'
import OrderItem from '../OrderItem/OrderItem';
import { v4 as uuidv4 } from 'uuid';
import './OrderList.css';

function OrderList({ dishes }) {

  const orderItemComponents = dishes.map(item => {
    return <OrderItem key={uuidv4()} item={item} />
  });

  return (
    <div className='order-list-container'>
      {orderItemComponents}
    </div>
  )
}

export default OrderList