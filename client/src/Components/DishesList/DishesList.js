import React from 'react';
import DishesSection from '../DishesSection/DishesSection';
import { v4 as uuidv4 } from 'uuid';
import './DishesList.css';

function DishesList({ menu }) {

  const sections = menu.map(section => {
    return <DishesSection key={uuidv4()} section={section} />;
  });

  return (
    <div className='dishes-list-container'>
      {sections}
    </div>
  )
}

export default DishesList