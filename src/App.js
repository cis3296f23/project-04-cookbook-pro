import 'bootstrap/dist/css/bootstrap.css';
import React, { StrictMode } from "react";
import "./styles.css";
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig'; // Your Firebase config file

const app = initializeApp(firebaseConfig);


//single page application stuff
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

//import my header navbar
import Navbar from "./components/header.js";

//pages
import Home from './pages/home.js';
import Search from './pages/search.js';
import MealPlans from './pages/mealPlans.js';
import Recipes from './pages/recipes.js';
import ShoppingList from './pages/shoppingList.js';
import SignIn from './pages/signin.js';

function App() {
    return (
        //a router watches the url for changes and will re-render the page
        <Router>
            <Navbar />
            <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/search" exact element={<Search />} />
            <Route path="/meal-plans" exact element={<MealPlans />} />
            <Route path="/recipes" exact element={<Recipes />} />
            <Route path="/shopping-list" exact element={<ShoppingList />} />
            <Route path="/sign-in" exact element={<SignIn />} />
            </Routes>
        </Router>

    );
}
 
export default App;