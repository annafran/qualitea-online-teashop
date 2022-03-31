const Search = ({ setSearch }) => {
  const onChange = (event) => {
    if (event.target.value.length >= 2) {
      setSearch(event.target.value);
    }
  };

  return (
    <div className="search">
      <input
        type="search"
        id="search"
        name="search"
        className="searchInput"
        placeholder="Search for a product"
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
