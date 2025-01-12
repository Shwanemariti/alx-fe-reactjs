import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import fetchRecipes from "../api";

const HomePage = ({ onRecipeSelect }) => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    const results = await fetchRecipes(query);
    setRecipes(results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} onClick={onRecipeSelect} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
