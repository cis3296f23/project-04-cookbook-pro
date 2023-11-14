import React, { useState } from "react";
import MealDataManager from "../managers_and_parsers/MealDataManager.js";

const mealDataManager = new MealDataManager();

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");

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
    <div id="search-box">
      <input
        type="text"
        placeholder="Enter your search"
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
