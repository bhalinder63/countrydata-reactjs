import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <h1>Country Search</h1>
      <SearchBar />
    </div>
  );
}

export default App;
