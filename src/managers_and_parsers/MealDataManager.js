// MealDataManager will handle generating meal data from two sources:
// 1. The Spoonacular API
// 2. The FirebaseDB
// Ingredients as well as Meals will be handled by this manager (for now)
import {PrefabMeal} from '../objects_JSON/objects.js';
class MealDataManager {
    // spoonacularParser = new SpoonacularParser();
    constructor() {
        // https://spoonacular.com/food-api/console#Dashboard
        this.spoonacularURL = new URL("https://api.spoonacular.com/recipes");
        this.spoonacularApi = process.env.REACT_APP_SPOONACULAR_API_KEY;
    }

    async queryRecipeFromSpoonacular(query) {
        const searchQuery = new URLSearchParams();
        searchQuery.append('apiKey', this.spoonacularApi);
        searchQuery.append('query', query); // Assuming query is a string, adjust accordingly
    
        const fullUrl = `${this.spoonacularURL}/complexSearch?${searchQuery.toString()}`;
    
        try {
            const response = await fetch(fullUrl);
            const data = await response.json();
    
            const searchResultsList = data.results.map(recipe => {
                // Instantiate PrefabMeal for each result
                const mappedResult = new PrefabMeal(
                    recipe.title,
                    recipe.extendedIngredients,
                    recipe.instructions,
                    recipe.image
                );
    
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
