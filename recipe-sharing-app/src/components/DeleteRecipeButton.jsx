import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(id);
    alert('Recipe deleted!');
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};
import useRecipeStore from '../recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button onClick={() => deleteRecipe(recipeId)}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;


export default DeleteRecipeButton;
