import React, { useState } from "react";
import { Row, Col, Container, Spinner } from "reactstrap";
import MealCard from "../components/mealCard";
import MealPlanBar from "../components/mealPlanBar";
import SavedMeals from "../components/savedMeals";
import SearchBox from "../components/searchBox.js";

/*
TODO: view more recipes after the inital query
we can do this with pagination or with infinte scroll.
https://www.npmjs.com/package/react-infinite-scroll-component
there's a library that makes infinite scroll pretty simple

we should work on this after spoonacular api requests are moved to the backend
*/

const SearchPage = () => {

    //searchResults will have 3 states we try to use, which is empty array, not an array, or array with results
  const [searchResults, setSearchResults] = useState("initial page load");

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  //conditionally render the results
  let results;

  //if page loaded
  if(searchResults == "initial page load"){
    results = (
        <Col className="d-flex m-5 p-0 justify-content-center">
          <p>search something</p>
        </Col>

    )
    //if there are results then put it into results varible to render
  } else if (Array.isArray(searchResults)) {
    results = (
      <>
        <Col sm={{ size: 4 }}>
          {/* Pass the search results to the SearchResults component */}
          <SearchResults
            results={searchResults.slice(0, searchResults.length / 2)}
          />
        </Col>
        <Col sm={{ size: 4 }}>
          {/* Pass the search results to the SearchResults component */}
          <SearchResults
            results={searchResults.slice(
              searchResults.length / 2,
              searchResults.length
            )}
          />
        </Col>
      </>
    ); 
    //if there are no results then we want to render a spinner :D
  } else if (!Array.isArray(searchResults)) {
    results = (
        <Col className="d-flex m-5 p-0 justify-content-center">
          <Spinner>Loading</Spinner>
        </Col>
    );
  } 

  return (
    <Container>
      <h1 className="d-flex justify-content-center">Search for recipes</h1>
      <Row>
        <Container className="d-flex justify-content-center">
          <br></br>
          <SearchBox onSearch={handleSearchResults} />
        </Container>
      </Row>
      <Row>
        <Col sm={{ size: 2 }}>
          <SavedMeals />
        </Col>

        {results}

        <Col sm={{ size: 2 }}>
          <MealPlanBar />
        </Col>
      </Row>
    </Container>
  );
};

function SearchResults({ results }) {
  if (!Array.isArray(results)) {
    return;
  } else {
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
}

export default SearchPage;
