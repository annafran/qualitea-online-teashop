const getProducts = async () => {
  const url = `${process.env.REACT_APP_API_URL}/products`;

  const response = await fetch(url);
  const products = await response.json();

  return products;
};

export { getProducts };
