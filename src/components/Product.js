import React from "react";
import { checkout } from "../services/checkout";
import formatAmount from "../utils/formatAmount";

const Product = ({ image, name, description, price }) => {
    const onClick = () => {
        checkout(price.id);
    };

    return (
        <li className="productCard">
            <img className="productPhoto" src={image} alt={name} />
            <div className="textContainer">
                <h2 className="productName">{name}</h2>
                <p className="productDescription">{description}</p>
                <p className="productPrice">
                    {formatAmount(price.unit_amount)}
                </p>
            </div>
            <div className="buttonContainer">
                <button className="button" onClick={onClick}>
                    Buy now
                </button>
            </div>
        </li>
    );
};

export default Product;
