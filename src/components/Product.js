import React from "react";

const Product = ({ image, name, description, price }) => {
    return (
        <li className="product-grid-item">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>
                <span>Price: {price}</span>
            </p>
            <button>Buy now</button>
        </li>
    );
};

export default Product;
