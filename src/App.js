/**
 * Root component of the React application.
 * Uses React Router for navigation and routing.
 * @returns {JSX.Element} - Returns the root component of the React application.
 */
import "bootstrap/dist/css/bootstrap.css";
import React, { StrictMode } from "react";
import "./css/styles.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/header.js";
import Home from "./pages/home.js";
import Search from "./pages/search.js";
import MealPlans from "./pages/mealPlans.js";
import Recipes from "./pages/recipes.js";
import ShoppingList from "./pages/shoppingList.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import HasNav from "./components/hasNav.js";

function App() {
  return (
    // React Router manages navigation and rendering of different components based on routes
    <Router>
      {/* 
        Navbar included with a HasNav wrapper for conditional rendering based on routes
        */}
      <HasNav>
        <Navbar />
      </HasNav>
      {/* Routes for different pages/components */}
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
