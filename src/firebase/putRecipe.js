import { doc, getDoc, setDoc, getFirestore, toFirestore, fromFirestore } from "firebase/firestore";
import { firebaseApp } from "./firebaseConfig.js";

const db = getFirestore(firebaseApp);

const recipeConverter = {

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
            summary: recipe.summary
        };
    },

    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
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
            )
        }
    }


/**
 * 
 * @param {Recipe} recipe 
 */
async function PutRecipe(recipe){
    const ref = doc(db, "recipes", String(recipe.id)).withConverter(recipeConverter);
    await setDoc(ref, recipe);
}

export default PutRecipe;