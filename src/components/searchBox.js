import React, { useState } from 'react';
import MealDataManager from '../managers_and_parsers/MealDataManager.js';

const mealDataManager = new MealDataManager();

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Assuming you want to perform a search using MealDataManager here
    var spoonacularQueryResults = mealDataManager.queryRecipeFromSpoonacular(query);
    console.log(spoonacularQueryResults);
    // Pass the search results to the parent component
    onSearch(searchResults);
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