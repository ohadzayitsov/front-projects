import { useState } from "react";
import "./LandingPage.css";
import IngredientsList from "../../components/IngredientsList/IngredientsList";
import ClaudeRecipe from "../../components/ClaudeRecipe/ClaudeRecipe";

const LandingPage = () => {
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const [recipeShown, setRecipeShown] = useState(false);
  let [currIngredient, setCurrIngredient] = useState("");

  const handleSetIngredient = (event) => {
    setCurrIngredient(event.target.value);
  };
  const toggleRecipeShown = () => {
    setRecipeShown((prevShown) => !prevShown);
  };

  const addIngredient = () => {
    if (currIngredient) {
      setIngredients((prevIngredients) => [...prevIngredients, currIngredient]);
      setCurrIngredient("");
    }
  };

  return (
    <div className="body">
      <div className="input-container">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
          className="ingrediant-input"
          onChange={handleSetIngredient}
          value={currIngredient}
        />
        <button className="add-btn" onClick={addIngredient}>
          + Add ingredient
        </button>
      </div>
      <IngredientsList
        ingredients={ingredients}
        toggleRecipeShown={toggleRecipeShown}
      ></IngredientsList>

      {recipeShown ? <ClaudeRecipe ></ClaudeRecipe> : <div></div>}
    </div>
  );
};

export default LandingPage;
