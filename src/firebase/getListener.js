import {
  collection,
  query,
  where,
  onSnapshot,
  getFirestore,
} from "firebase/firestore";
import { firebaseApp } from "./firebaseConfig.js";

const db = getFirestore(firebaseApp);

/**
 * needs a collection name and useState setter 
 * returns an unsubscribe method to stop listening
 * @param {ReactUseStateFunction} setter
 * @param {String} collectionName
 * @returns {Unsubscribe}
 */
function getListener(collectionName, setter) {

  var q = query(collection(db, collectionName));

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const recipes = [];
    querySnapshot.forEach((doc) => {
      recipes.push(doc.data().name);
    });
    setter(recipes);
    console.log("recipes: ", recipes.join(", "));
  });
  return unsubscribe;
}

export default getListener;
