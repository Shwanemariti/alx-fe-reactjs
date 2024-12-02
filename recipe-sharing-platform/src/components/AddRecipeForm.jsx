import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = 'Recipe title is required.';
    }
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else if (ingredients.split(',').length < 2) {
      newErrors.ingredients = 'Please provide at least two ingredients, separated by commas.';
    }
    if (!steps.trim()) {
      newErrors.steps = 'Preparation steps are required.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log('Recipe Submitted:', { title, ingredients, steps });
      // Handle form submission logic here (e.g., save to state or send to a server)
      setTitle('');
      setIngredients('');
      setSteps('');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg
