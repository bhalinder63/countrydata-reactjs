import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (input.trim()) {
      setQuery(input.trim().toLowerCase());
    } else {
      alert("Please enter a country name");
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      if (!query) return;

      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${query}`
        );
        if (!response.ok) throw new Error("Country not found");
        const data = await response.json();
        console.log("Fetched countries:", data);
      } catch (error) {
        console.error("Error fetching countries:", error.message);
      }
    };

    fetchCountries();
  }, [query]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a country..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
