import React, { useState } from "react";
import { Row, Col, Container } from "reactstrap";
import MealCard from "../components/mealCard";
import MealPlanBar from "../components/mealPlanBar";
import SavedMeals from "../components/savedMeals";
import SearchBox from "../components/searchBox.js";
import "../styles.css";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <Container id="content-container">
      <Row id="search-bar">
        <h1>Search for recipes:</h1>
        <SearchBox onSearch={handleSearchResults} />
      </Row>
      <Row>
        <Col sm={{ size: 2 }}>
          <SavedMeals />
        </Col>
        <Col sm={{ size: 8 }}>
          {/* Pass the search results to the SearchResults component */}
          <SearchResults results={searchResults} />
        </Col>
        <Col sm={{ size: 2 }}>
          <MealPlanBar />
        </Col>
      </Row>
    </Container>
  );
};

function SearchResults({ results }) {
  if (!results || results.length === 0) {
    return <p>No results found.</p>;
  }
  
  return (
    <Container className="m-0 p-0">
      {results.map((meal, index) => (
        <div className="py-2" key={index}>
          <MealCard meal={meal} />
        </div>
      ))}
    </Container>
  );
}

export default SearchPage;
