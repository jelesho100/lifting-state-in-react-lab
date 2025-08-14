const IngredientList = ({ ingredients, addToStack }) => {
  return (
    <div>
      <h2>Available Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name}
            <button onClick={() => addToStack(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;


