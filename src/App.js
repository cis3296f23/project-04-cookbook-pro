import "bootstrap/dist/css/bootstrap.css";
import React, { StrictMode } from "react";
import "./styles.css";

//single page application stuff
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//import my header navbar
import Navbar from "./components/header.js";

//pages
import Home from "./pages/home.js";
import Search from "./pages/search.js";
import MealPlans from "./pages/mealPlans.js";
import Recipes from "./pages/recipes.js";
import ShoppingList from "./pages/shoppingList.js";
//import SignIn from "./pages/signin.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import HasNav from "./components/hasNav.js";

function App(){
  return( 
  <Router>
    <HasNav>
      <Navbar/>
    </HasNav>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/search" exact element={<Search />} />
      <Route path="/meal-plans" exact element={<MealPlans />} />
      <Route path="/recipes" exact element={<Recipes />} />
      <Route path="/shopping-list" exact element={<ShoppingList />} />
      <Route path="/Login" exact element={<Login />} />
      <Route path="/SignUp" exact element={<SignUp />} />
    </Routes>
  </Router>
  );
}

export default App;
