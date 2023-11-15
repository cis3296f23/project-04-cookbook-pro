import React, { useState } from "react";
import { Row, Col, Container } from "reactstrap";
import MealCard from "../components/mealCard";
import MealPlanBar from "../components/mealPlanBar";
import SavedMeals from "../components/savedMeals";
import SearchBox from "../components/searchBox.js";
import "../styles.css";

/*
TODO: view more recipes after the inital query
we can do this with pagination or with infinte scroll.
https://www.npmjs.com/package/react-infinite-scroll-component
there's a library that makes infinite scroll pretty simple

we should work on this after spoonacular api requests are moved to the backend
*/

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <Container id="content-container">
        <h1 className="d-flex justify-content-center">Search for recipes</h1>
      <Row id="search-bar">
        <Container className="d-flex justify-content-center">
            
            <br></br>
            <SearchBox onSearch={handleSearchResults} />

        </Container>
      </Row>
      <Row>
        <Col sm={{ size: 2 }}>
          <SavedMeals />
        </Col>
        <Col sm={{ size: 4 }}>
          {/* Pass the search results to the SearchResults component */}
          <SearchResults results={searchResults.slice(0,(searchResults.length)/2)} />
        </Col>
        <Col sm={{ size: 4 }}>
          {/* Pass the search results to the SearchResults component */}
          <SearchResults results={searchResults.slice((searchResults.length)/2, searchResults.length)} />
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
    //return <p>No results found.</p>;
  }
  
  return (
    <Container className="m-0 p-0">
      {results.map((meal, index) => (
        <div className="py-2" key={index}>
          <MealCard meal={meal}/>
        </div>
      ))}
    </Container>
  );
}

export default SearchPage;
