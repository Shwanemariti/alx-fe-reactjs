const RecipeCard = ({ recipe }) => {
  const { strMealThumb, strMeal, strCategory, strArea } = recipe;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={strMealThumb} alt={strMeal} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{strMeal}</h2>
        <p className="text-sm text-gray-500">{strCategory} | {strArea}</p>
      </div>
    </div>
  );
};
