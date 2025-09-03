const IngredientList = ({ ingredients, addToStack }) => {
  return (
    <div>
      <h2>Available Ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={`${ingredient.name} - ${ingredient.color}`}>
            {ingredient.name} - {ingredient.color}
            <button onClick={() => addToStack(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;


