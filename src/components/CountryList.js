import React from "react";

const CountryList = ({ countries }) => {
  if (countries.length === 0) {
    return <p>No countries found.</p>;
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.cca3}>
          <img
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
            width="30"
          />
          {country.name.common}
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
