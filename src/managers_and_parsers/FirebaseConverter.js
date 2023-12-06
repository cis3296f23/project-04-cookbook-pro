/**
 * Converts to and from Firebase and JSON recipe objects.
 */
import { Recipe } from "../CustomObjects/Recipe.js";
import { Ingredient } from "../CustomObjects/Ingredient.js";

/**
 * Class for converting data between Firestore and custom objects.
 */
class FirebaseConverter {
  constructor() {
    // Firestore data converter for Ingredients
    this.ingredientsConverter = {
      /**
       * Convert an Ingredient object to a Firestore object.
       * @param {Ingredient} ingredient - The Ingredient object to convert.
       * @returns {object|null} The Firestore object representation of the Ingredient, or null if the input is undefined or null.
       */
      toFirestore: (ingredient) => {
        if (!ingredient) {
          console.error("Ingredient is undefined or null");
          return null;
        }
        return {
          amount: ingredient.amount,
          id: ingredient.id,
          name: ingredient.name,
          unit: ingredient.unit,
        };
      },
      /**
       * Convert a Firestore snapshot to an Ingredient object.
       * @param {object} snapshot - The Firestore snapshot data.
       * @param {object} options - Options for the snapshot.
       * @returns {Ingredient} The Ingredient object created from Firestore snapshot data.
       */
      fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Ingredient(data.amount, data.id, data.name, data.unit);
      },
    };

    /**
     * Firestore data converter for CustomMeal.
     */
    this.recipeConverter = {
      /**
       * Convert a Recipe object to a Firestore object.
       * @param {Recipe} recipe - The Recipe object to convert.
       * @returns {object|null} The Firestore object representation of the Recipe, or null if the input is undefined or null.
       */
      toFirestore: (recipe) => {
        if (!recipe) {
          console.error("Recipe is undefined or null");
          return null;
        }
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
          isSaved: recipe.isSaved,
        };
      },
      /**
       * Convert a Firestore snapshot to a Recipe object.
       * @param {object} snapshot - The Firestore snapshot data.
       * @returns {Recipe} The Recipe object created from Firestore snapshot data.
       */
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
}
export default FirebaseConverter;
