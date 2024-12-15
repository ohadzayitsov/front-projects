import "./IngredientsList.css";
const IngredientsList = ({ ingredients,toggleRecipeShown }) => {
  return (
    <div id="body">
      <h2>Ingredients on hand:</h2>
      {ingredients ? (
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      ) : (
        <div></div>
      )}
       <div className="get-recipe-container">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button className="get-recipe-btn" onClick={toggleRecipeShown}>Get a recipe</button>
      </div>
    </div>
  );
};

export default IngredientsList;
