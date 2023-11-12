
import React from 'react';
import GetRecipes from '../firebase/getRecipes.js';

const recipeJSON = GetRecipes();
 
const Recipes = () => {

    return (
        <div>
            <h1>Create or edit a recipe</h1>
            <p>{recipeJSON}</p>
        </div>
    );
};
 
export default Recipes;