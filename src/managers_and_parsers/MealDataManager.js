// MealDataManager will handle generating meal data from two sources:
// 1. The Spoonacular API
// 2. The FirebaseDB
// Ingredients as well as Meals will be handled by this manager (for now)
class MealDataManager{
    constructor() {
        // https://spoonacular.com/food-api/console#Dashboard
        this.spoonacularURL = new URL("https://api.spoonacular.com/recipes");
        this.spoonacularApi = process.env.REACT_APP_SPOONACULAR_API_KEY;
    }

    async queryRecipeFromSpoonacular(query){
        const searchResultsList = document.getElementById('search-results');
        const searchQuery = new URLSearchParams();
        searchQuery.append('apiKey', this.apiKey);
        searchQuery.append('query', query);

        const fullUrl = `${this.spoonacularURL}/complexSearch?${searchQuery.toString()}`;

        console.log(fullUrl);

        const response = await fetch(fullUrl);
        const data = await response.json();

        console.log(`getFoodRecipe: ${data.results}`);

        // Stores the results for the initial query
        data.results.forEach(function(recipe) {

            const propertyDiv = document.createElement('div');
            propertyDiv.textContent = `${recipe.title}`;
            propertyDiv.setAttribute('id', `recipe_${recipe.id}`);
            propertyDiv.setAttribute('class', `food-list-item`);
            searchResultsList.appendChild(propertyDiv);

        })
        // Use this code when you're able to load the detailed view of a meal from a component
        /*
        searchResults.addEventListener('click', function(event) {
            if (event.target.classList.contains('food-list-item')) {
                const recipeId = event.target.id.split('_')[1]; // Extract recipe ID from the element's ID
                const selectedRecipe = data.results.find(recipe => recipe.id.toString() === recipeId);
    
                if (selectedRecipe) {
                    updateMealView(selectedRecipe.title, recipeId);
                }
            }
        });
        */

        // When a user clicks on an element of the food-list-item class, set the content of the meal-view item to be the Name of the item
        async function updateMealView(recipeTitle,recipeId,data) {

            // https://api.spoonacular.com/recipes/632543/information?apiKey=bb4dbc7559964e94a18b6c15e5f88d0e
            const specificRecipeURL = `${spoonacularURL}/${recipeId.toString()}/information?apiKey=${apiKey}`;

            console.log(specificRecipeURL);
            try {
                const recipeQueryResponse = await fetch(specificRecipeURL);
                const individualRecipeData = await recipeQueryResponse.json();
                mealView.textContent = `Meal Data\n\nSelected Recipe: ${recipeTitle}\n${JSON.stringify(individualRecipeData)}`;
            } catch (error) {
                console.error("Error fetching specific recipe:", error);
            }

        }

    }
}
export default MealDataManager;
