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

const mealDataManager = new MealDataManager();

const SearchBox = ({ onSearch }) => {
    
  //state varibles
  const [query, setQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  //state functions
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      // Wait for the query to complete and get the results
      const spoonacularQueryResults =
        await mealDataManager.queryRecipeFromSpoonacular(query);

      // Pass the search results to the parent component
      onSearch(spoonacularQueryResults);
    } catch (error) {
      console.error(error); // Handle errors if the Promise is rejected
    }
  };

  return (
    <InputGroup className="w-50" id="search-box">
      <Input
        type="text"
        placeholder="Enter your search"
        value={query}
        onChange={handleInputChange}
      />

      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <Button color="primary" onClick={handleSearch}>
          Search
        </Button>

        <DropdownToggle caret color="primary" />

        <DropdownMenu>
          <DropdownItem header>Filter Results</DropdownItem>
          <Container className="m-2">
            <Form>
              <FormGroup check>
                <Input type="checkbox" />
                <Label check>Vegan</Label>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" />
                <Label check>Vegetarian</Label>
              </FormGroup>
            </Form>
          </Container>
        </DropdownMenu>
      </Dropdown>
    </InputGroup>
  );
};

export default SearchBox;
