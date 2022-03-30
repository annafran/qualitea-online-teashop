const sortProducts = (products, sortBy) => {
  products.sort((productA, productB) => {
    const aPrice = productA.prices[0].unit_amount;
    const bPrice = productB.prices[0].unit_amount;
    if (sortBy === "low") {
      return aPrice - bPrice;
    }

    if (sortBy === "high") {
      return bPrice - aPrice;
    }
    return 0;
  });
  return products;
};

export default sortProducts;
