class SpoonacularParser {

    constructor(){

    }
    
    // Firestore data converter for Ingredients
    ingredientsConverter = {
        toFirestore: (ingredients) => {
            return {
                name: ingredients.name,
                quantity: ingredients.quantity,
                unit: ingredients.unit
            };
        },
        fromFirestore: (snapshot, options) => {
            const data = snapshot.data(options);
            return new Ingredients(data.name, data.quantity, data.unit);
        }
    };

    // Firestore data converter for CustomMeal
    customMealConverter = {
        toFirestore: (customMeal) => {
            return {
                mealName: customMeal.mealName,
                ingredients: customMeal.ingredients,
                instructions: customMeal.instructions
            };
        },
        fromFirestore: (snapshot, options) => {
            const data = snapshot.data(options);
            return new CustomMeal(data.mealName, data.ingredients, data.instructions);
        }
    };
}
export default SpoonacularParser;