import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (searchQuery.trim() === "") return;

    fetch(`https://restcountries.com/v3.1/name/${searchQuery}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Country not found");
        }
        return res.json();
      })
      .then((data) => {
        setCountries(data);
        setError(null);
      })
      .catch((err) => {
        setCountries([]);
        setError(err.message);
      });
  };

  return (
    <div className="container">
      <h1>Country Search</h1>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <CountryList countries={countries} />
    </div>
  );
};

export default App;
