import React from "react";

const CountryData = ({ Country, error }) => {
  if (error) {
    return <p className="error">{error}</p>;
  }

  if (Country.length === 0) {
    return <p>No country data available. Try searching above.</p>;
  }

  const country = Country[0];

  return (
    <div className="country-card">
      <h2>{country.name.common}</h2>
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        width={150}
      />
      <p>
        <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
    </div>
  );
};

export default CountryData;
