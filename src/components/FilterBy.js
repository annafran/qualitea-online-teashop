import React from "react";

const FilterBy = ({ products }) => {
    const filterProducts = (event) => {
        const selectValue = event.target.value;
        if (selectValue === "teabags") {
            setProducts(
                products.filter(
                    (product) => product.metadata.category === "teabags"
                )
            );
        } else if (selectValue === "teaware") {
            setProducts(
                products.filter(
                    (product) => product.metadata.category === "teaware"
                )
            );
        } else {
            setProducts(products);
        }
    };

    return (
        <div className="filter">
            <label htmlFor="filterProducts">Filter by: </label>
            <select id="filterProducts" onChange={filterProducts}>
                <option value="all">All</option>
                <option value="teabags">Tea bags</option>
                <option value="teaware">Tea accessories</option>
            </select>
        </div>
    );
};

export default FilterBy;
