class CustomMeal{
    constructor(mealName, ingredients, instructions){
        this.mealName = mealName;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
}

class Ingredients{
    constructor(name, quantity, unit){
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        
    }
}

// Firestore data converter for CustomMeal
const customMealConverter = {
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

// Firestore data converter for Ingredients
const ingredientsConverter = {
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

