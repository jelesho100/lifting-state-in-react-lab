const BurgerStack = ({ ingredients, removeFromStack }) => {
  return (
    <div>
      <h2>Your Burger</h2>
      <ul>
        {ingredients.length === 0 && <li>No ingredients yet</li>}
        {ingredients.map((ingredient, index) => (
          <li key={`${ingredient.name}-${ingredient.color}-${index}`}>
            {ingredient.name} - {ingredient.color}
            <button onClick={() => removeFromStack(index)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;


