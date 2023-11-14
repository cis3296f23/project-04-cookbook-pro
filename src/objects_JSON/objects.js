class CustomMeal{
    constructor(mealName, ingredients, instructions){
        this.mealName = mealName;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
}

class PrefabMeal{
    constructor(mealName, ingredients, instructions, mealImage){
        this.mealName = mealName;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.mealImage = mealImage;
    }
}

class Ingredient{
    constructor(name, quantity, unit){
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
    }
}

export {CustomMeal,PrefabMeal,Ingredient};

// //TESTING
// const readline = require('readline');
// async function createCustomMeal() {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//         terminal : false
//     });

//     const mealName = await askQuestion('Enter the meal name: ');
//     const instructions = await askQuestion('Enter the instructions: ');
//     const ingredientsMap = new Map();

//     while (true) {
//         const name = await askQuestion('Enter ingredient name (or type "done" to finish): ');
//         if (name.toLowerCase() === 'done') {
//             break;
//         }

//         const quantity = parseFloat(await askQuestion('Enter quantity: '));
//         const unit = await askQuestion('Enter unit: ');

//         const ingredientKey = name.toLowerCase();
//         if (ingredientsMap.has(ingredientKey)) {
//             ingredientsMap.get(ingredientKey).quantity += quantity;
//         } else {
//             ingredientsMap.set(ingredientKey, new Ingredients(name, quantity, unit));
//         }
//     }

//     rl.close();

//     // Convert the map values back to an array of ingredients
//     const ingredients = Array.from(ingredientsMap.values());

//     return new CustomMeal(mealName, ingredients, instructions);
// }

// function askQuestion(question) {
//     return new Promise(resolve => {
//         const rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });

//         rl.question(question, answer => {
//             resolve(answer);
//             rl.close();
//         });
//     });
// }

// createCustomMeal().then(customMeal => {
//     const customMealJSON = JSON.stringify(customMeal, null, 2);
//     console.log(customMealJSON);
// });

