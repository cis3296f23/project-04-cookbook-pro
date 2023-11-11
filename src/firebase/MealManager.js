// On search, return meal name, & image to components
class MealManager{
    constructor() {    
        // https://spoonacular.com/food-api/console#Dashboard
        this.spoonacularURL = new URL("https://api.spoonacular.com/recipes");
        // Add event listener in the constructor
    }

    search(query){
        console.log(`Inside MealManager: ${query}`);
    }
    
    apiKey = 'bb4dbc7559964e94a18b6c15e5f88d0e'
    async getFoodRecipe(query){
        const searchResultsList = document.getElementById('search-results');
        const searchQuery = new URLSearchParams();
        searchQuery.append('apiKey', this.apiKey);
        searchQuery.append('query', query);
    
        const fullUrl = `${this.spoonacularURL}/complexSearch?${searchQuery.toString()}`;
    
        console.log(fullUrl);
    
        const response = await fetch(fullUrl);
        const data = await response.json();
    
        console.log(data.results);
    
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
        async function updateMealView(recipeTitle,recipeId) {
            
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
export default MealManager;