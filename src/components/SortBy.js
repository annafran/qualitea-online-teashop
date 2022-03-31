const SortBy = ({ setSortBy }) => {
  const onChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="sortBy">
      <label className="label" htmlFor="sort">
        Sort by:{" "}
      </label>
      <select className="select" id="sort" onChange={onChange}>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortBy;
