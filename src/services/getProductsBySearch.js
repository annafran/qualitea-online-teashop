const getProductsBySearch = (products, query) => {
  if (!query) {
    return products;
  }
  return products.filter((product) => {
    const productName = product.name.toLowerCase();
    return productName.includes(query);
  });
};

export default { getProductsBySearch };
