import React from "react";

const SortBy = ({ setSortBy }) => {
    const onChange = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <div className="sortBy">
            <label htmlFor="sort">Sort by: </label>
            <select id="sort" onChange={onChange}>
                <option value="low">Price: Lowest first</option>
                <option value="high">Price: Highest first</option>
            </select>
        </div>
    );
};

export default SortBy;
