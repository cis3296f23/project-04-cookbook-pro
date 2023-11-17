import React, { useState } from "react";
import { Row, Col, Container, Spinner } from "reactstrap";
import MealCard from "../components/mealCard";
import MealPlanBar from "../components/mealPlanBar";
import SavedMeals from "../components/savedMeals";
import SearchBox from "../components/searchBox.js";
import MealDataManager from "../managers_and_parsers/MealDataManager.js";

/*
TODO: view more recipes after the inital query
we can do this with pagination or with infinte scroll.
https://www.npmjs.com/package/react-infinite-scroll-component
there's a library that makes infinite scroll pretty simple

we should work on this after spoonacular api requests are moved to the backend
*/

const SearchPage = () => {
  //searchResults will have 3 states we try to use, which is "initial page load", not an array, or array with results
  const [searchResults, setSearchResults] = useState("initial page load");
  const [query, setQuery] = useState("");

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const mealDataManager = new MealDataManager();

  const handleNewSearch = async () => {
    try {
      // Wait for the query to complete and get the results
      const spoonacularQueryResults =
        await mealDataManager.queryRecipeFromSpoonacular(
          query,
          oldResults.length
        );

      onSearch(searchResults.concat(spoonacularQueryResults));
    } catch (error) {
      console.error(error); // Handle errors if the Promise is rejected
    }
  };

  //conditionally render the results
  let results;

  //if page loaded
  if (searchResults == "initial page load") {
    results = (
      <Col className="d-flex m-5 p-0 justify-content-center">
        <p className="text-secondary">search something</p>
      </Col>
    );
    //if there are results then put it into results varible to render
  } else if (Array.isArray(searchResults)) {
    results = <SearchResults results={searchResults} />;
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
          <SearchBox
            onSearch={handleSearchResults}
            query={query}
            setQuery={setQuery}
          />
        </Container>
      </Row>
      <Row>
        <Col className="col-2">
          <SavedMeals />
        </Col>

        <Container className="d-flex col-8 flex-wrap">{results}</Container>

        <Col className="col-2">
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
      <>
        {results.map((meal) => (
          <MealCard meal={meal} />
        ))}
      </>
    );
  }
}

export default SearchPage;
