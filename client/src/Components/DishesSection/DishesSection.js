import React from 'react';
import DishItem from '../DishItem/DishItem';
import { v4 as uuidv4 } from 'uuid';

function DishesSection({ section }) {

  const dishes = section.dishes.map(dish => {
    return <DishItem key={uuidv4()} dish={dish} />;
  });

  return (
    <div>
      <h3>{section.categoryName}</h3>
      {dishes}
    </div>
  )
}

export default DishesSection