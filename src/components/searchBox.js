import React, { useState } from "react";
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

/**
 *
 * @param {function} param0
 * @param {function} param1
 * @returns
 */
const SearchBox = ({ search, query, setQuery, clearResults }) => {
  //state varibles
  const [dropdownOpen, setDropdownOpen] = useState(false);

  //state functions
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  //true/false search parameters, we can add as many as we want
  //https://spoonacular.com/food-api/docs#Diets
  const [dietFilterOptions, setDietFilterOptions] = useState({
    Vegan: false,
    Vegetarian: false,
    "Gluten Free": false,
    Ketogenic: false,
    Pescetarian: false,
    Paleo: false,
  });

  //https://spoonacular.com/food-api/docs#Intolerances
  const [intoleranceFilterOptions, setIntoleranceFilterOptions] = useState({
    Diary: false,
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
    Drink: false,
  });

  return (
    <InputGroup className="w-50 min-width: 300px; shadow-lg" id="search-box">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Filter </DropdownToggle>
        <DropdownMenu>
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
                <h6>Allergys</h6>
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

      <Input
        type="text"
        placeholder="Enter your search"
        value={query}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            clearResults();
            search();
          }
        }}
      />

      <Button
        color="primary"
        onClick={() => {
          clearResults();
          search();
        }}
      >
        Search🔍
      </Button>
    </InputGroup>
  );
};

export default SearchBox;
