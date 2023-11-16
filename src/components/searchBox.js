import React, { useState } from "react";
import MealDataManager from "../managers_and_parsers/MealDataManager.js";
import {
  Label,
  FormGroup,
  Form,
  UncontrolledDropdown,
  Dropdown,
  DropdownMenu,
  ButtonDropdown,
  DropdownItem,
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

  //true/false search parameters, we can add as many as we want
  const [filterOptions, setfilterOptions] = useState({vegan: false, vegetarian: false, glutenFree: false});

  const [dropdownOpen, setDropdownOpen] = useState(false);

  //state functions
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

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
  }

  return (
    <InputGroup className="w-50 shadow-lg" id="search-box">
      <Input
        type="text"
        placeholder="Enter your search"
        value={query}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />

      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <Button color="primary" onClick={handleSearch}>
        Search🔍
        </Button>

        <DropdownToggle caret>Filter </DropdownToggle>

        <DropdownMenu>
          <Container className="m-2">
            <SearchBoxFilter setfilterOptions={setfilterOptions} filterOptions={filterOptions}/>
          </Container>
        </DropdownMenu>
      </Dropdown>
    </InputGroup>
  );
};

export default SearchBox;
