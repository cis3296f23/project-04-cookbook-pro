/**
 * Renders a search box component with filtering options.
 * @param {Object} props - React props containing search-related data and functions.
 * @param {Function} props.onSearch - Function to trigger the search based on query and filters.
 * @param {string} props.query - The current search query.
 * @param {Function} props.setQuery - Function to update the search query.
 * @returns {JSX.Element} - Returns a search box component with filtering options.
 */
import React, { useState } from "react";
import MealDataManager from "../managers_and_parsers/MealDataManager.js";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

import SearchBoxFilter from "./searchBoxFilter.js";

const mealDataManager = new MealDataManager();

const SearchBox = ({ onSearch, query, setQuery }) => {
  // State variables for dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown function
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  // Function to handle input change in the search box
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // State variables for different filters (diet, intolerance, meal types)
  const [dietFilterOptions, setDietFilterOptions] = useState({
    Vegan: false,
    Vegetarian: false,
    "Gluten Free": false,
    Ketogenic: false,
    Pescetarian: false,
    Paleo: false,
  });

  const [intoleranceFilterOptions, setIntoleranceFilterOptions] = useState({
    Dairy: false,
    Egg: false,
    Gluten: false,
    Grain: false,
    Peanut: false,
    Seafood: false,
    Sesame: false,
    Shellfish: false,
    Soy: false,
    Sulfite: false,
    "Tree Nut": false,
    Wheat: false,
  });


  const [mealTypes, setMealTypes] = useState({
    "Main Course": false,
    "Side Dish": false,
    Dessert: false,
    Appetizer: false,
    Salad: false,
    Bread: false,
    Breakfast: false,
    Soup: false,
    Beverage: false,
    Sauce: false,
    Marinade: false,
    Fingerfood: false,
    Snack: false,
    Drink: false
  })

  const handleSearch = async () => {
    try {
      // Clear previous search results
      onSearch("yayspin! :D this string doesn't mean anything");

      // Wait for the query to complete and get the results
      const spoonacularQueryResults = await mealDataManager.queryRecipeFromSpoonacular(query, 0);

      // Pass the search results to the parent component
      onSearch(spoonacularQueryResults);
    } catch (error) {
      console.error(error); // Handle errors if the Promise is rejected
    }
  };

  return (
    <InputGroup className="w-50 min-width: 300px; shadow-lg" id="search-box">
      {/* Dropdown for filters */}
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Filter</DropdownToggle>
        <DropdownMenu>
          {/* Dropdown content with different filter options */}
          <Container className="m-2">
            <Row>
              <Col>
                <h6>Diets</h6>
                <SearchBoxFilter
                  setfilterOptions={setDietFilterOptions}
                  filterOptions={dietFilterOptions}
                />
              </Col>
              <Col>
                <h6>Allergies</h6>
                <SearchBoxFilter
                  setfilterOptions={setIntoleranceFilterOptions}
                  filterOptions={intoleranceFilterOptions}
                />
              </Col>
              <Col>
                <h6>Type</h6>
                <SearchBoxFilter
                  setfilterOptions={setMealTypes}
                  filterOptions={mealTypes}
                />
              </Col>
            </Row>
          </Container>
        </DropdownMenu>
      </Dropdown>

      {/* Input field for search query */}
      <Input
        type="text"
        placeholder="Enter your search"
        value={query}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />

      {/* Button to trigger the search */}
      <Button color="primary" onClick={handleSearch}>
        Search🔍
      </Button>
    </InputGroup>
  );
};

export default SearchBox;
