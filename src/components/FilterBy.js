const FilterBy = ({ setFilterBy }) => {
  const onChange = (event) => {
    setFilterBy(event.target.value);
  };

  return (
    <div className="filter">
      <label className="label" htmlFor="filterProducts">
        Filter by:{" "}
      </label>
      <select className="select" id="filterProducts" onChange={onChange}>
        <option value="all">All</option>
        <option value="teabags">Tea bags</option>
        <option value="teaware">Tea accessories</option>
      </select>
    </div>
  );
};

export default FilterBy;
