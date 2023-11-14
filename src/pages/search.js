import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import MealCard from '../components/mealCard';
import MealPlanBar from '../components/mealPlanBar';
import SavedMeals from '../components/savedMeals';
import SearchBox from '../components/searchBox.js';
import '../styles.css';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    console.log('Received search results in SearchPage:', results);
    setSearchResults(results);
  };

  return (
    <Container id='content-container'>
      <Row id='search-bar'>
        <h1>Search for recipes:</h1>
        <SearchBox onSearch={handleSearchResults} />
      </Row>
      <Row>
        <Col sm={{ size: 2 }}><SavedMeals /></Col>
        <Col sm={{ size: 8 }}>
          {/* Pass the search results to the SearchResults component */}
          <SearchResults results={searchResults} />
        </Col>
        <Col sm={{ size: 2 }}><MealPlanBar /></Col>
      </Row>
    </Container>
  );
};

function SearchResults({ results }) {
  if (!results || results.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <Container>
      {results.map((meal, index) => (
        <div key={index}>
          {/* Render a MealCard for each search result */}
            <MealCard
                mealName={meal.mealName}
                ingredients={meal.ingredients}
                instructions={meal.instructions}
                mealImage={meal.mealImage}
            />
        </div>
      ))}
    </Container>
  );
}

export default SearchPage;
