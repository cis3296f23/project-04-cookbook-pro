
import React from 'react';
import { Card, ListInlineItem } from 'reactstrap';
import MealCard from '../components/mealCard';
import MealPlanBar from '../components/mealPlanBar';
import SavedMeals from '../components/savedMeals';
 
const SearchPage = () => {

    const cardWidth = { width: '18rem' };

    return (
        <>

        <div class="d-flex flex-column justify-content-center">
            <h1>Search for recipes</h1>
        </div>
        
        <div class="d-flex justify-content-center">
            
            <div class="d-flex flex-column">
                <div class="d-flex flex-row">
                    <div class="p-2"><MealCard/></div>
                    <div class="p-2"><MealCard/></div>
                    <div class="p-2"><MealCard/></div>
                </div>
                <div class="d-flex flex-row">
                    <div class="p-2"><MealCard/></div>
                    <div class="p-2"><MealCard/></div>
                    <div class="p-2"><MealCard/></div>
                </div>
                <div class="d-flex flex-row">
                    <div class="p-2"><MealCard/></div>
                    <div class="p-2"><MealCard/></div>
                    <div class="p-2"><MealCard/></div>
                </div>
                
            </div>
        </div>

            
        </>
        
    );
};
 
export default SearchPage;