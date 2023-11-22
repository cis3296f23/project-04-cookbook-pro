import firestore from "./FirebaseConverter.js";
import getRecipeFirestore from "./../firebase/getRecipe.js";
import putRecipeFirestore from "./../firebase/putRecipe.js";
import getListenerFirestore from "./../firebase/setListener.js";
import FirebaseConverter from "./FirebaseConverter.js";
import PutRecipe from "./../firebase/putRecipe.js";

import {
  query,
  collection,
  doc,
  getFirestore,
  setDoc,
  where,
  getDocs,
} from "firebase/firestore";
import { firebaseApp } from "./../firebase/firebaseConfig.js";
import { getAdditionalUserInfo } from "firebase/auth";

const db = getFirestore(firebaseApp);

const fb = new FirebaseConverter();
const recipeConverter = fb.recipeConverter;
const ingredientsConverter = fb.ingredientsConverter;

class RecipeDataFacade {
  constructor() {
    let recipeResultsListener = null;
    this.searchList;
    this.query;
    this.recipeTitles;
    this.results = [];
    this.resultSliceSize = 10;
  }

  /**
   * set the query that you want to do a search on
   * @param {String} query
   */
  async setQuery(query) {
    this.query = query.toLowerCase();
    try {
      this.searchList = await getRecipeFirestore("queryData", "recipeTitles");
    } catch (error) {
      console.error("couldn't get search list: " + error);
    }

    this.recipeTitles = Object.keys(await this.searchList);
  }

  /**
   * after the query is set do a search for that query. returns 20 recipes unless less than 20 recipes that match the query.
   * subsequent calls will return new recipes until there are no more or when the query is changed
   * @returns list of recipes
   */
  async search(queryString) {
    //if we have a new query find all the recipes for that search
    if (queryString != this.query) {
      console.log("new query");
      //set the query
      try {
        await this.setQuery(queryString);
      } catch (error) {
        console.error("couldn't set the query: " + error);
      }

      //get our results
      this.results = [];
      this.recipeTitles.forEach((value) => {
        if (value.toLowerCase().match(this.query)) {
          this.results.push(this.searchList[value]);
        }
      });

      console.log("total results=" + this.results.length);
    } else {
      console.log("same query");
    }
    //return a slice of the results

    //if there were no results
    if (this.results.length == 0) {
      console.log("this is where we get spoonacular data");
      return "no more results";
    }

    //slice our results
    const resultsSlice = this.results.slice(0, this.resultSliceSize);
    this.results = this.results.slice(
      this.resultSliceSize,
      this.results.length
    );

    const resultsArray = [];
    resultsSlice.forEach((id) => {
      resultsArray.push(Number(id));
    });

    console.log("resultsArray=" + resultsArray);

    const q = query(collection(db, "recipes"), where("id", "in", resultsArray));

    const data = await getDocs(q);

    const recipeData = [];

    data.forEach((recipe) => {
      //console.log("recipe=" + recipe);
      recipeData.push(fb.recipeConverter.fromFirestore(recipe));
    });

    return recipeData;
  }

  async putQuery(collection, titleList) {
    console.log("putting");
    const ref = doc(db, collection, "recipeTitles").withConverter(
      fb.queryConverter
    );
    await setDoc(ref, titleList);
  }

  //do regex on a big string of recipe titles
  //get the associated recipe ids for each title
  //when we get a batch of 20 matches grab those from firebase to go to infinite scroll
  //trim the big string down
  //prepare next batch of 20 matches
}

export default RecipeDataFacade;
