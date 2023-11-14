import { doc, getDoc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "./firebaseConfig.js";

const db = getFirestore(firebaseApp);
const docRef = doc(db, "recipes", "716429");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

function getRecipes() {
  const jsonData = JSON.stringify(docSnap.data());

  return jsonData;
}

export default getRecipes;
