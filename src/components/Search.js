const Search = ({ setSearch, number }) => {
  const onChange = (event) => {
    if (event.target.value.length === 0 || event.target.value.length >= 2) {
      setSearch(event.target.value.toLowerCase());
    }
  };

  return (
    <div>
      <div className="search">
        <p className="numberProducts">{number} products</p>
        <input
          type="search"
          id="search"
          name="search"
          className="searchInput"
          placeholder="Search for a product"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Search;
