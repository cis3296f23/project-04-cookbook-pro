/**
 * convert to and from firebase and JSON recipe object
 */

import { Recipe } from "../CustomObjects/Recipe.js";

class FirebaseConverter {
  constructor() {}

  // Firestore data converter for Ingredients
  ingredientsConverter = {
    toFirestore: (ingredients) => {
      return {
        name: ingredients.name,
        quantity: ingredients.quantity,
        unit: ingredients.unit,
      };
    },
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new Ingredients(data.name, data.quantity, data.unit);
    },
  };

  /**
   *
   * Firestore data converter for CustomMeal
   * @function toFirestore convert to firestore object
   * @function fromFirestore convert to JSON
   */
  recipeConverter = {
    toFirestore: (recipe) => {
      return {
        cuisine: recipe.cuisine,
        dishType: recipe.dishType,
        id: recipe.id,
        image: recipe.image,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        name: recipe.name,
        servings: recipe.servings,
        summary: recipe.summary,
        isSaved: recipe.isSaved
      };
    },

    fromFirestore: (snapshot) => {
      const data = snapshot.data();
      return new Recipe(
        data.cuisine,
        data.dishType,
        data.id,
        data.image,
        data.ingredients,
        data.instructions,
        data.name,
        data.servings,
        data.summary,
        data.isSaved
      );
    },
  };
}
export default FirebaseConverter;
