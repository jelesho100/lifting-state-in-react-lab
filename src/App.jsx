import React, { useState } from 'react';
import IngredientList from './components/IngredientList/IngredientList.jsx';
import BurgerStack from './components/BurgerStack/BurgerStack.jsx';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [stack, setStack] = useState([]);
  let nextId = 1; 

  function addToStack(ingredient) {
    const newIngredient = { ...ingredient, id: nextId };
    nextId += 1; 
    setStack([newIngredient, ...stack]); 
  }

  function removeFromStack(indexToDelete) {
  setStack(prev => prev.filter((_, i) => i !== indexToDelete));
}

  return (
    <main>
      <h1>Burger Stacker</h1>
      <IngredientList ingredients={availableIngredients} addToStack={addToStack} />
      <BurgerStack ingredients={stack} removeFromStack={removeFromStack} />
    </main>
  );
};

export default App;



