import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar } from 'reactstrap';

export default () => {

    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid justify-content-start">
                <a class="navbar-brand" href="/">CookBook Pro</a>
                <div class="navbar-nav">
                    <a class="nav-link" href="\meal-plans">Meal Plans</a>
                    <a class="nav-link" href="\search">Search</a>
                    <a class="nav-link" href="\recipes">Recipes</a>
                    <a class="nav-link" href="\shopping-list">Shopping List</a>
                </div>
            </div>
        </nav>
    )

};