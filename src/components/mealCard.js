
import React from 'react';
import { Card } from 'reactstrap';
 
const MealCard = () => {

    const cardWidth = { width: '18rem' };

    return (
        <>
        <div class="card" style={cardWidth}>
            <img src="./food.png" class="card-img-top" alt="food"/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </>
        
    );
};
 
export default MealCard;