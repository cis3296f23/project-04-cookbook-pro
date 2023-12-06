/**
 * MealDataManager handles generating meal data from Spoonacular API and FirebaseDB.
 * Handles ingredients and meals.
 */
import { Recipe } from "../CustomObjects/Recipe.js";
import { Ingredient } from "../CustomObjects/Ingredient.js";
import PutRecipe from "../firebase/putRecipe.js";

class MealDataManager {
  constructor() {
    /**
     * Spoonacular API URL.
     * @type {URL}
     */
    this.spoonacularURL = new URL("https://api.spoonacular.com/recipes");

    /**
     * Spoonacular API key.
     * @type {string}
     */
    this.spoonacularApi = process.env.REACT_APP_SPOONACULAR_API_KEY;
  }

  /**
   * Queries recipe data from Spoonacular API.
   * @param {string} query - The search query (food).
   * @param {number} offset - Used for infinite scroll.
   * @returns {Promise<{ resultsList: Recipe[], totalResults: number }>} An object containing the list of search results and the total number of results.
   */
  async queryRecipeFromSpoonacular(query, offset) {
    const searchQuery = new URLSearchParams();
    /*
        addRecipeInformation	boolean	false	If set to true, you get more information about the recipes returned.
        offset                  number	0	    The number of results to skip (between 0 and 900).
        number  	            number	10	    The number of expected results (between 1 and 100).
        fillIngredients	        boolean	false	Add information about the ingredients and whether they are used or missing in relation to the query.
        */
    searchQuery.append("apiKey", this.spoonacularApi);
    searchQuery.append("query", query); // Assuming query is a string, adjust accordingly
    searchQuery.append("addRecipeInformation", true);
    searchQuery.append("offset", offset); //use this offset for infinite scrolling
    searchQuery.append("number", 20); //ask for 100 recipes instead of 10
    searchQuery.append("fillIngredients", true); //get ingredient info

    const fullUrl = `${
      this.spoonacularURL
    }/complexSearch?${searchQuery.toString()}`;

    /*
        using the search params from above we get these properities of a recipe
        recipe keys=["vegetarian","vegan","glutenFree","dairyFree","veryHealthy","cheap","veryPopular","sustainable","lowFodmap","weightWatcherSmartPoints","gaps","preparationMinutes","cookingMinutes","aggregateLikes","healthScore","creditsText","sourceName","pricePerServing","extendedIngredients","id","title","readyInMinutes","servings","sourceUrl","image","imageType","summary","cuisines","dishTypes","diets","occasions","analyzedInstructions","spoonacularScore","spoonacularSourceUrl","usedIngredientCount","missedIngredientCount","missedIngredients","likes","usedIngredients","unusedIngredients"]
        */

    try {
      
      const response = await fetch(fullUrl);
      const data = await response.json();

      const searchResultsList = data.results.map((recipe) => {
        // Parse each ingredient to fit out custom ingredient object
        const mappedIngredients = recipe.extendedIngredients.map(
          (ingredient) => {
            const ing = new Ingredient(
              ingredient.amount,
              ingredient.id,
              ingredient.nameClean ? ingredient.nameClean : ingredient.name,
              ingredient.unit
            );
            return ing;
          }
        );

        const mappedResult = new Recipe(
          recipe.cuisines,
          recipe.dishTypes,
          recipe.id,
          recipe.image,
          mappedIngredients,
          recipe.analyzedInstructions,
          recipe.title,
          recipe.servings,
          recipe.summary
        );

        PutRecipe("recipes", mappedResult);

        return mappedResult;
      });

      return {
        resultsList: searchResultsList,
        totalResults: data.totalResults,
      };
    } catch (error) {
      console.error("Error fetching Recipe data:", error);
      throw error;
    }
  }
}

export default MealDataManager;
