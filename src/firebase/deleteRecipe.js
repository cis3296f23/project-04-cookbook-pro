import { doc, deleteDoc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "./firebaseConfig.js";

const db = getFirestore(firebaseApp);

/**
 * Deletes a specific recipe document from a Firestore collection.
 * @param {string} collection - The collection where the recipe document exists.
 * @param {string} recipeID - The ID of the recipe document to delete.
 */
async function deleteRecipe(collection, recipeID) {
  // Construct the reference to the specific recipe document
  const recipeDocRef = doc(db, collection, recipeID);

  try {
    // Delete the recipe document
    await deleteDoc(recipeDocRef);
  } catch (error) {
    console.error("Error deleting recipe:", error);
    throw error;
  }
}

export default deleteRecipe;
