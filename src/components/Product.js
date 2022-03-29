import React from "react";
import { checkout } from "../services/checkout";

const Product = ({ image, name, description, price }) => {
    const onClick = () => {
        checkout();
    };

    return (
        <li className="product-grid-item">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>
                <span>Price: {price}</span>
            </p>
            <button onClick={onClick}>Buy now</button>
        </li>
    );
};

export default Product;
