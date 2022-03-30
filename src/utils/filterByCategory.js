const filterByCategory = (products, filterBy) => {
    if (filterBy === "all") {
        return products;
    }
    return products.filter((product) => filterBy === product.metadata.category);
};

export default filterByCategory;
