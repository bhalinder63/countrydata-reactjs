import SearchBar from "./components/SearchBar";
import CountryData from "./components/CountryData";

const App = () => {
  return (
    <div className="container">
      <h1>Country Search</h1>
      <SearchBar />
      <CountryData />
    </div>
  );
};

export default App;
