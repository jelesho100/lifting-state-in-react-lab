const BurgerStack = ({ ingredients, removeFromStack }) => {
  return (
    <div>
      <h2>Your Burger</h2>
      <ul>
        {ingredients.length === 0 && <li>No ingredients yet</li>}
        {ingredients.map((ingredient) => (
          <li key={ingredient.name}>
            {ingredient.name}
            <button onClick={() => removeFromStack(ingredient.name)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;


