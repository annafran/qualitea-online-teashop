import Product from "./Product";
import formatAmount from "../utils/formatAmount";

const Products = ({ products }) => {
    return (
        <ul className="product-grid">
            {products.map((product) => (
                <Product
                    key={product.id}
                    image={product.images[0]}
                    name={product.name}
                    description={product.description}
                    price={formatAmount(product.prices[0].unit_amount)}
                />
            ))}
        </ul>
    );
};
