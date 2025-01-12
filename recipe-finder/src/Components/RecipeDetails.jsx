const RecipeDetails = ({ recipe }) => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">{recipe.strMeal}</h1>
    <img
      src={recipe.strMealThumb}
      alt={recipe.strMeal}
      className="w-full max-h-60 object-cover my-4"
    />
    <h2 className="text-lg font-semibold">Ingredients</h2>
    <ul>
      {Array.from({ length: 20 }).map((_, index) => {
        const ingredient = recipe[`strIngredient${index + 1}`];
        const measure = recipe[`strMeasure${index + 1}`];
        return ingredient ? <li key={index}>{`${measure} ${ingredient}`}</li> : null;
      })}
    </ul>
    <h2 className="text-lg font-semibold mt-4">Instructions</h2>
    <p>{recipe.strInstructions}</p>
    {recipe.strYoutube && (
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Video Tutorial</h2>
        <iframe
          width="100%"
          height="315"
          src={recipe.strYoutube.replace("watch?v=", "embed/")}
          title="Recipe video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )}
  </div>
);

export default RecipeDetails;

