import React from 'react';
import {Row, Col, Container } from 'reactstrap';
import MealCard from '../components/mealCard';
import MealPlanBar from '../components/mealPlanBar';
import SavedMeals from '../components/savedMeals';
import SearchBox from '../components/searchBox.js';
import '../styles.css';
 
const SearchPage = () => {

    return (
        <Container id='content-container'>
            <Row id='search-bar'>
                {/* <div id='search-bar'> */}
                    <h1>Search for recipes:</h1>
                    <SearchBox onSearch={SearchResults} />
                {/* </div> */}
            </Row>
            <Row>
                {/* size adds up to 12 */}
                <Col sm={{size:2}}><SavedMeals /></Col>
                <Col sm={{size:8}}><SearchResults /></Col>
                <Col sm={{size:2}}><MealPlanBar /></Col>
            </Row>

        </Container>
        
    );
};

function SearchResults() {
    return(
        <Container>
            <Row md="2">
                <Col><MealCard/></Col>
                <Col><MealCard/></Col>
            </Row>
            <Row md="2">
                <Col><MealCard/></Col>
                <Col><MealCard/></Col>
            </Row>
        </Container>
    )
}
 
export default SearchPage;