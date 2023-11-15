// MealDataManager will handle generating meal data from two sources:
// 1. The Spoonacular API
// 2. The FirebaseDB
// Ingredients as well as Meals will be handled by this manager (for now)
import { Recipe } from "../CustomObjects/Recipe.js";
import { Ingredient } from "../CustomObjects/Ingredient.js";
import PutRecipe from '../firebase/putRecipe.js'
class MealDataManager {
  // spoonacularParser = new SpoonacularParser();
  constructor() {
    // https://spoonacular.com/food-api/console#Dashboard
    this.spoonacularURL = new URL("https://api.spoonacular.com/recipes");
    this.spoonacularApi = process.env.REACT_APP_SPOONACULAR_API_KEY;
  }

  async queryRecipeFromSpoonacular(query) {
    //add in these parameters
    /*
        addRecipeInformation	boolean	false	If set to true, you get more information about the recipes returned.
        offset                  number	0	    The number of results to skip (between 0 and 900).
        number  	            number	10	    The number of expected results (between 1 and 100).
        fillIngredients	        boolean	false	Add information about the ingredients and whether they are used or missing in relation to the query.
        */
    const searchQuery = new URLSearchParams();
    searchQuery.append("apiKey", this.spoonacularApi);
    searchQuery.append("query", query); // Assuming query is a string, adjust accordingly
    searchQuery.append("addRecipeInformation", true);
    searchQuery.append("offset", 0); //increment offset to get more results of current query
    searchQuery.append("number", 10); //ask for 100 recipes instead of 10
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
        // Instantiate PrefabMeal for each result

        //const keys = JSON.stringify(Object.keys(recipe));
        //console.log("recipe keys=" + keys);
        // Need to change the order in which the Recipe is created
        const mappedResult = new Recipe(
          recipe.cuisines,
          recipe.dishTypes,
          recipe.id,
          recipe.image,
          recipe.extendedIngredients,
          recipe.analyzedInstructions,
          recipe.title,
          recipe.servings,
          recipe.summary
        );

        PutRecipe("recipes", mappedResult);

        return mappedResult;
      });

      return searchResultsList;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}
export default MealDataManager;
