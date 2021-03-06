const Search = ({ setSearch }) => {
  const onChange = (event) => {
    if (event.target.value.length === 0 || event.target.value.length >= 2) {
      setSearch(event.target.value.toLowerCase());
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
