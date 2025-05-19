import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CountryData from "./components/CountryData";

const App = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      if (!query) return;

      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${query}`
        );
        if (!response.ok) throw new Error("Country not found");
        const data = await response.json();
        setCountries(data);
        setError("");
      } catch (err) {
        setCountries([]);
        setError(err.message);
      }
    };

    fetchCountries();
  }, [query]);

  return (
    <div className="container">
      <h1>Country Search</h1>
      <SearchBar setQuery={setQuery} />
      <CountryData countries={countries} error={error} />
    </div>
  );
};

export default App;
