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
} from "reactstrap";

import SearchBoxFilter from "./searchBoxFilter.js";

const mealDataManager = new MealDataManager();

/**
 *
 * @param {function} param0
 * @param {function} param1
 * @returns
 */
const SearchBox = ({ onSearch }) => {
  //state varibles
  const [query, setQuery] = useState("");
  const [intoleranceDropdownOpen, setIntoleranceDropdownOpen] = useState(false);
  const [dietDropdownOpen, setDietDropdownOpen] = useState(false);

  //state functions
  const dietToggle = () => setDietDropdownOpen((prevState) => !prevState);

  const intoleranceToggle = () =>
    setIntoleranceDropdownOpen((prevState) => !prevState);

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
    diary: false,
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

  const handleSearch = async () => {
    try {
      //clear search results
      onSearch("yayspin! :D this string doesn't mean anything");

      // Wait for the query to complete and get the results
      const spoonacularQueryResults =
        await mealDataManager.queryRecipeFromSpoonacular(query);

      // Pass the search results to the parent component
      onSearch(spoonacularQueryResults);
    } catch (error) {
      console.error(error); // Handle errors if the Promise is rejected
    }
  };

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <InputGroup className="w-50 min-width: 300px; shadow-lg" id="search-box">
      <Input
        type="text"
        placeholder="Enter your search"
        value={query}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />

      <Button color="primary" onClick={handleSearch}>
        Search🔍
      </Button>

      <Dropdown isOpen={dietDropdownOpen} toggle={dietToggle}>
        <DropdownToggle caret>Diet </DropdownToggle>
        <DropdownMenu>
          <Container className="m-2">
            <SearchBoxFilter
              setfilterOptions={setDietFilterOptions}
              filterOptions={dietFilterOptions}
            />
          </Container>
        </DropdownMenu>
      </Dropdown>

      <Dropdown isOpen={intoleranceDropdownOpen} toggle={intoleranceToggle}>
        <DropdownToggle caret>Allergy </DropdownToggle>
        <DropdownMenu>
          <Container className="m-2">
            <SearchBoxFilter
              setfilterOptions={setIntoleranceFilterOptions}
              filterOptions={intoleranceFilterOptions}
            />
          </Container>
        </DropdownMenu>
      </Dropdown>
    </InputGroup>
  );
};

export default SearchBox;
