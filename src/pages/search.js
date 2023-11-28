import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Container, Spinner } from "reactstrap";
import MealCard from "../components/mealCard";
import QuickOrder from "../components/quickOrder.js";
import SavedMeals from "../components/savedMeals";
import SearchBox from "../components/searchBox.js";
import InfiniteScroll from "react-infinite-scroll-component";
import recipeDataFacade from "../managers_and_parsers/recipeDataFacade.js";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [resultStatus, setresultStatus] = useState("no results or query");

  const facade = new recipeDataFacade();

  useEffect(() => {
    () => setSearchResults([]);
  }, [searchResults]);

  let oldQuery = query;
  let spinner;
  if (resultStatus == "loading results") {
    spinner = (
      <>
        <Row style={{ height: "20vh" }}></Row>
        <Col className="d-flex m-5 p-0 justify-content-center">
          <Spinner>Loading</Spinner>
        </Col>
      </>
    );
  } else {
    spinner = (
      <Col className="d-flex m-5 p-0 justify-content-center">
        <Spinner>Loading</Spinner>
      </Col>
    );
  }

  const clearResults = () => {
    console.log("clearing results for new query");
    setresultStatus("loading results");
    setSearchResults([]);
  };

  //for infinte scroll
  const search = async () => {
    //setSearchResults("no results");
    const data = await facade.search(query);
    console.log("data length=" + data.length);
    if (data == "no more results") {
      console.log("no reulst");
      setresultStatus(false);
    } else {
      console.log("searchResults=" + searchResults);
      setSearchResults(searchResults.concat(data));
      setresultStatus("got results");
    }
  };

  //conditionally render the results
  let results;

  //if page loaded
  if (resultStatus == "no results or query") {
    results = (
      <>
        <Row style={{ height: "15vh" }}></Row>
        <Col className="d-flex m-5 p-0 justify-content-center">
          <p className="text-secondary">search something</p>
        </Col>
      </>
    );
    //if there are results then put it into results varible to render
  } else if (resultStatus == "loading results") {
    results = spinner;
  } else if (resultStatus == "got results") {
    //nasty way to remove the scroll bar
    results = (
      <Container id="scrollTarget" className="" style={{ overflow: "hidden" }}>
        <InfiniteScroll
          style={{
            width: "104%",
            overflowY: "visible",
            overflowX: "hidden",
          }}
          loader={spinner}
          height={"100vh"}
          scrollableTarget={"scrollTarget"}
          dataLength={searchResults.length}
          next={search}
          hasMore={resultStatus}
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
  }

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
                search={search}
                query={query}
                setQuery={setQuery}
                clearResults={clearResults}
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
