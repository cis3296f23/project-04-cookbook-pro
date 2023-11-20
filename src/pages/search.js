import React, { useState } from "react";
import { Row, Col, Container, Spinner } from "reactstrap";
import MealCard from "../components/mealCard";
import QuickOrder from "../components/quickOrder.js";
import SavedMeals from "../components/savedMeals";
import SearchBox from "../components/searchBox.js";
import MealDataManager from "../managers_and_parsers/MealDataManager.js";
import InfiniteScroll from "react-infinite-scroll-component";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState("initial page load");
  const [query, setQuery] = useState("");
  const [numResults, setNumResults] = useState(-1);

  const handleSearchResults = (results) => {
    setSearchResults(results.resultsList);
    setNumResults(results.totalResults);
  };

  const mealDataManager = new MealDataManager();

  let spinner;
  if (typeof searchResults === "string") {
    console.log("string");
    spinner = (
      <>
        <Row style={{ height: "20vh" }}></Row>
        <Col className="d-flex m-5 p-0 justify-content-center">
          <Spinner>Loading</Spinner>
        </Col>
      </>
    );
  } else {
    console.log("not string");
    spinner = (
      <Col className="d-flex m-5 p-0 justify-content-center">
        <Spinner>Loading</Spinner>
      </Col>
    );
  }
  //for infinte scroll
  async function fetchMoreResults() {
    console.log("fetching more");
    try {
      
      //setMoreResults(true);
      // Wait for the query to complete and get the results
      const spoonacularQueryResults =
        await mealDataManager.queryRecipeFromSpoonacular(
          query,
          searchResults.length
        );

      setSearchResults(
        searchResults.concat(spoonacularQueryResults.resultsList)
      );

    } catch (error) {
      console.error("error: " + error); // Handle errors if the Promise is rejected
    }
  };

  //conditionally render the results
  let results;

  //if page loaded
  if (searchResults == "initial page load") {
    results = (
      <>
        <Row style={{ height: "15vh" }}></Row>
        <Col className="d-flex m-5 p-0 justify-content-center">
          <p className="text-secondary">search something</p>
        </Col>
      </>
    );
    //if there are results then put it into results varible to render
  } else if (Array.isArray(searchResults)) {
    //nasty way to remove the scroll bar
    results = (
      <Container className="" style={{ overflow: "hidden" }}>
        <InfiniteScroll
          style={{
            height: "93vh",
            width: "104%",
            overflowY: "visible",
            overflowX: "hidden",
          }}
          dataLength={searchResults.length}
          next={fetchMoreResults()}
          hasMore={true}
          endMessage={
            <Col className="d-flex m-5 p-0 justify-content-center">
              <p className="text-secondary">
                Total {searchResults.length} results
              </p>
            </Col>
          }
        >
          <Row style={{ height: "15vh" }}></Row>
          <Container className="d-flex col-12 flex-wrap m-0">
            {searchResults.map((meal, index) => (
              <MealCard key={index} meal={meal} />
            ))}
          </Container>
        </InfiniteScroll>
      </Container>
    );

    //if there are no results then we want to render a spinner :D
  } else if (!Array.isArray(searchResults)) {
    results = spinner;
  }

  ///, linearGradient: "(to bottom, rgba(255,0,0,0), rgba(255,0,0,1));"
  //background-color: rgba(255,0,0,0.1);
  //bg-primary bg-gradient
  //style={{
  //     height: "25vh",
  //     backgroundImage:
  //       "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))",
  //   }}

  return (
    <Container>
      <Container className="position-fixed z-1">
        <Container
          className=""
          style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
        >
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
        </Container>
        <Row
          className=""
          style={{
            height: "1vh",
            backgroundColor: "rgba(255,255,255,0.9)",
          }}
        ></Row>
        <Row className="d-flex justify-content-center">
          <Col
            className="col-8"
            style={{
              height: "3vh",
              backgroundImage:
                "linear-gradient(to bottom, rgba(255,255,255,.9), rgba(255,255,255,0))",
            }}
          ></Col>
        </Row>
      </Container>

      <Row>
        <Col className="col-2">
          <Row className="" style={{ height: "15vh" }}></Row>
          <SavedMeals />
        </Col>
        <Container className="col-8">{results}</Container>

        <Col className="col-2">
          <Row className="" style={{ height: "15vh" }}></Row>
          <QuickOrder />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;
