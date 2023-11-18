import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  toFirestore,
  fromFirestore,
} from "firebase/firestore";
import { firebaseApp } from "./firebaseConfig.js";
import FirebaseConverter from "../managers_and_parsers/FirebaseConverter.js";

const db = getFirestore(firebaseApp);

const fb = new FirebaseConverter();
const recipeConverter = fb.recipeConverter;

/**
 * @param {String} collection the collection to save into
 * @param {Recipe} recipe the recipe/meal you want to save
 *
 */
async function PutRecipe(collection, recipe) {
    console.log(recipe);

//   const ref = doc(db, collection, String(recipe.id)).withConverter(
//     recipeConverter
//   );
//   await setDoc(ref, recipe);
}

export default PutRecipe;
