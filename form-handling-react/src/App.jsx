import BrowserRouter as Router, Route, Routes from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        {/* Add Recipe Form */}
        <AddRecipeForm />

        {/* Recipe List */}
        <h2>Recipe List</h2>
        <RecipeList />

        {/* Routes for Recipe Details */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
import React from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};
import React, { useEffect } from 'react';
import { useRecipeStore } from './store/recipeStore';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  useEffect(() => {
    // Example data to simulate recipe fetching
    useRecipeStore.setState({
      recipes: [
        { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish' },
        { id: 2, title: 'Chicken Alfredo', description: 'Creamy pasta with chicken' },
        { id: 3, title: 'Salmon Salad', description: 'Fresh salmon with greens' }
      ]
    });
  }, []);

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      
      <div>
        <h2>Recipes</h2>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
            <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
          </div>
        ))}
      </div>

      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};
import React from 'react';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
    return (
        <div>
            <h1>User Registration</h1>
            <RegistrationForm />
        </div>
    );
};
import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

const App = () => {
    return (
        <div>
            <h1>User Registration</h1>
            <h2>Controlled Form</h2>
            <RegistrationForm />
            <h2>Formik Form</h2>
            <FormikForm />
        </div>
    );
};
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <h1>React Query Demo</h1>
            <PostsComponent />
        </QueryClientProvider>
    );
}
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

<QueryClientProvider client={queryClient}>
    <PostsComponent />
    <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>

export default App;







