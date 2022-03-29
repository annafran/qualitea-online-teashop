import React from "react";
import { checkout } from "../services/checkout";

const Product = ({ image, name, description, price }) => {
    const onClick = () => {
        checkout();
    };

    return (
        <li className="productCard">
            <img className="productPhoto" src={image} alt={name} />
            <div className="textContainer">
                <h3 className="productName">{name}</h3>
                <p>{description}</p>
                <p>
                    <span>Price: {price}</span>
                </p>
            </div>
            <button className="button" onClick={onClick}>
                Buy now
            </button>
        </li>
    );
};

export default Product;
