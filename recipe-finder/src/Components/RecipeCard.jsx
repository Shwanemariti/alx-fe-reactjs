const RecipeCard = ({ recipe, onClick }) => (
  <div
    className="border rounded shadow-md p-4 cursor-pointer"
    onClick={() => onClick(recipe)}
  >
    <img
      src={recipe.strMealThumb}
      alt={recipe.strMeal}
      className="w-full h-40 object-cover rounded"
    />
    <h3 className="text-lg font-semibold mt-2">{recipe.strMeal}</h3>
    <p>{recipe.strCategory} - {recipe.strArea}</p>
  </div>
);

export default RecipeCard;

