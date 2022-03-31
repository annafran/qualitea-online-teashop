import Product from "./Product";

const Products = ({ products }) => {
  return (
    <ul className="productGrid">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.images[0]}
          name={product.name}
          description={product.description}
          price={product.prices[0]}
          featured={product.metadata.new}
        />
      ))}
    </ul>
  );
};

export default Products;
