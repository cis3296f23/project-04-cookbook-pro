
import React from 'react';
import { Card } from 'reactstrap';
 
const MeanPlanBar = () => {

    const cardWidth = { width: '15rem' };

    return (
        <>
        <div class="card" style={cardWidth}>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Monday</li>
                <li class="list-group-item">Tuesday</li>
                <li class="list-group-item">Wednesday</li>
                <li class="list-group-item">Thursday</li>
                <li class="list-group-item">Friday</li>
                <li class="list-group-item">Saturday</li>
                <li class="list-group-item">Sunday</li>
            </ul>
        </div>
        </>
        
    );
};

export default MeanPlanBar;