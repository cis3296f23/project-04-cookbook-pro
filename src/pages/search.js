/**
 * @typedef {Object} RecipeResult
 * @property {string} title - The title of the recipe.
 * @property {string} image - URL of the recipe image.
 * @property {string} id - Unique ID of the recipe.
 * Other properties specific to your `MealDataManager` can be added here.
 */

import React, { useState } from "react";
import { Row, Col, Container, Spinner } from "reactstrap";
import MealCard from "../components/mealCard";
import QuickOrder from "../components/quickOrder.js";
import SavedMeals from "../components/savedMeals";
import SearchBox from "../components/searchBox.js";
import MealDataManager from "../managers_and_parsers/MealDataManager.js";
import InfiniteScroll from "react-infinite-scroll-component";

/**
 * SearchPage component for displaying search results of recipes.
 * @returns {JSX.Element} JSX element representing the SearchPage component.
 */
const SearchPage = () => {
  const [searchResults, setSearchResults] = useState("initial page load");
  const [query, setQuery] = useState("");
  const [numResults, setNumResults] = useState(-1);

  /**
   * Handles the search results.
   * @param {Object} results - Object containing search results.
   * @param {RecipeResult[]} results.resultsList - List of recipe search results.
   * @param {number} results.totalResults - Total number of search results.
   */
  const handleSearchResults = (results) => {
    setSearchResults(results.resultsList);
    setNumResults(results.totalResults);
  };

  const mealDataManager = new MealDataManager();

  const spinner = (
    <Col className="d-flex m-5 p-0 justify-content-center">
      <Spinner>Loading</Spinner>
    </Col>
  );

  /**
   * Fetches more search results.
   */
  const fetchMoreResults = async () => {
    try {
      const spoonacularQueryResults =
        await mealDataManager.queryRecipeFromSpoonacular(
          query,
          searchResults.length
        );

      setSearchResults(
        searchResults.concat(spoonacularQueryResults.resultsList)
      );

      if (searchResults.length >= numResults || searchResults.length >= 999) {
        setNumResults(false);
      }
    } catch (error) {
      console.error("error: " + error);
    }
  };

  let results;

  if (searchResults === "initial page load") {
    results = (
      <Col className="d-flex m-5 p-0 justify-content-center">
        <p className="text-secondary">Search something</p>
      </Col>
    );
  } else if (Array.isArray(searchResults)) {
    results = (
      <InfiniteScroll
        dataLength={searchResults.length}
        next={fetchMoreResults}
        hasMore={numResults}
        loader={spinner}
        endMessage={
          <Col className="d-flex m-5 p-0 justify-content-center">
            <p className="text-secondary">
              Total {searchResults.length} results
            </p>
          </Col>
        }
      >
        <Container className="d-flex col-12 flex-wrap mt-3">
          {searchResults.map((meal, index) => (
            <MealCard key={index} meal={meal} />
          ))}
        </Container>
      </InfiniteScroll>
    );
  } else if (!Array.isArray(searchResults)) {
    results = spinner;
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
        <Container className="col-8">{results}</Container>

        <Col className="col-2">
          <QuickOrder />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;
