import React, { useState } from "react";

const SearchBar = ({ setQuery }) => {
  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (input.trim()) {
      setQuery(input.trim().toLowerCase());
    } else {
      alert("Please enter a country name");
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for a country..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
