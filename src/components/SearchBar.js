const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(); // Trigger fetch only when Enter is pressed
    }
  };

  return (
    <input
      type="text"
      placeholder="Search countries..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchBar;
