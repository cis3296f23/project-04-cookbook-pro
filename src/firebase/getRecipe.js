import { doc, getDoc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "./firebaseConfig.js";
import FirebaseConverter from "../managers_and_parsers/FirebaseConverter.js";

const db = getFirestore(firebaseApp);

const fb = new FirebaseConverter();
const recipeConverter = fb.recipeConverter;

/**
 * Retrieves a specific recipe document from a Firestore collection.
 * @param {string} collection - The collection where the recipe document exists.
 * @param {string} recipeID - The ID of the recipe document to retrieve.
 * @returns {Promise<object|null>} A Promise that resolves to the retrieved recipe data (object) or null if the document doesn't exist.
 */
async function GetRecipes(collection, recipeID) {
  const docRef = doc(db, collection, recipeID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = recipeConverter.fromFirestore(docSnap);
    return data;
  } else {
    console.log("No such document!");
    return null;
  }
}

export default GetRecipes;
