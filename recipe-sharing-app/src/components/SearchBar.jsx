import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes(); // Trigger the filtering of recipes whenever the search term changes
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
