import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes available. Add one!</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};
import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);

  // If there are no filtered recipes, show all recipes by default
  useEffect(() => {
    if (filteredRecipes.length === 0 && recipes.length > 0) {
      useRecipeStore.getState().filterRecipes(); // Perform initial filtering
    }
  }, [recipes, filteredRecipes]);

  return (
    <div>
      {filteredRecipes.length === 0
        ? <p>No recipes found.</p>
        : filteredRecipes.map((recipe) => (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          ))
      }
    </div>
  );
};

export default RecipeList;

