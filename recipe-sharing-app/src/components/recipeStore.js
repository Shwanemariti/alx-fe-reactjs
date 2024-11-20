import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  
  // Action to add a recipe
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe]
  })),

  // Action to set multiple recipes (e.g., for initializing the store)
  setRecipes: (recipes) => set({ recipes }),

  // Action to update a recipe by ID
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  // Action to delete a recipe by ID
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== recipeId)
  }))
}));
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Action to set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to filter recipes based on the search term
  filterRecipes: () => set((state) => {
    const filtered = state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    );
    return { filteredRecipes: filtered };
  }),

  // Action to add a new recipe
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
  })),
}));

export default useRecipeStore;

