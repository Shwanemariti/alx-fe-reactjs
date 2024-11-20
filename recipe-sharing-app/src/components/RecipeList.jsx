import Link from 'react-router-dom';
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
  const { recipes, filteredRecipes, filteredRecipes } = useRecipeStore((state) =>({
    recipes: state.recipes,
  filteredRecipes: state.filteredRecipes,
  filterRecipes: state.filterRecipes,
  }));

  // filter recipes whenever the search term changes
  useEffect(() => {
    filteredRecipes();
  }, [filterRecipes]);

  const recipesToDisplay = FILTEREDrecipes.length > 0 ? FilteredRecipes : recipes;

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

