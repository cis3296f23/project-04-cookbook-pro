
import React from 'react';
import { Card } from 'reactstrap';
 
const savedMeals = () => {

    const cardWidth = { width: '15rem' };

    return (
        <>
        <div class="card" style={cardWidth}>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
        </div>
        </>
        
    );
};

function makeMeals (mealList){

    mealList.map(() => {


    })

}
 
export default savedMeals;