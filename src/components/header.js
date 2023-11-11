import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar } from 'reactstrap';

export default () => {

    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">CookBook Pro</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link" href="\meal-plans">Meal Plans</a>
                <a class="nav-link" href="\search">Search</a>
                <a class="nav-link" href="\recipes">My Recipes</a>
                <a class="nav-link" href="\shopping-list">Shopping List</a>
                <a class="nav-link" href="\sign-in">Sign In</a>
            </div>
            </div>
        </div>
        </nav>

    )


};