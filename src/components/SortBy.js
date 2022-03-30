import React from "react";

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
        <option value="low">Price: Low</option>
        <option value="high">Price: High</option>
      </select>
    </div>
  );
};

export default SortBy;
