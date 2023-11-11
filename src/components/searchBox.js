import React, { useState } from 'react';
import MealManager from '../firebase/MealManager';

const mealManager = new MealManager();

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Assuming you want to perform a search using MealManager here
    const searchResults = mealManager.search(query);
    mealManager.getFoodRecipe(query);

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
