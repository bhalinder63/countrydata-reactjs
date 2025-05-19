import React from "react";

const CountryData = ({ countries, error }) => {
  if (error) {
    return <p className="error">{error}</p>;
  }

  if (countries.length === 0) {
    return <p>No country data available. Try searching above.</p>;
  }

  return (
    <div className="country-list">
      {countries.map((country) => (
        <div key={country.cca3} className="country-card">
          <h2>{country.name.common}</h2>
          <img
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            width={150}
          />
          <p>
            <strong>Capital:</strong> {country.capital?.[0]}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountryData;
