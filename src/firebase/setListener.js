import {
  collection,
  query,
  onSnapshot,
  getFirestore,
} from "firebase/firestore";
import { firebaseApp } from "./firebaseConfig.js";

const db = getFirestore(firebaseApp);

/**
 * Sets up a listener for a Firestore collection and updates a React state with the retrieved data.
 * @param {ReactUseStateFunction} setter - The state setter function provided by useState hook.
 * @param {string} collectionName - The name of the Firestore collection.
 * @returns {Unsubscribe} - The unsubscribe method to stop listening to changes.
 */
function getListener(collectionName, setter) {
  // Create a query for the provided collection
  var q = query(collection(db, collectionName));

  // Set up a listener for snapshot changes in the collection
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const recipes = [];
    querySnapshot.forEach((doc) => {
      // Retrieve and process documents from the collection
      if (doc.data().id !== 0) {
        recipes.push(doc.data());
      }
    });
    // Update the state using the provided setter function
    setter(recipes);
  });

  return unsubscribe; // Return the unsubscribe method
}

export default getListener;
