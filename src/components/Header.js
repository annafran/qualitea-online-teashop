import React from "react";
import headerImage from "../images/headerImage.jpg";
import logo from "../images/logo.png";

const Header = () => {
    return (
        <div>
            <h1>Quali-Tea</h1>
            <div className="logo">
                <img alt="logo" src={logo} />
            </div>
            <div className="headerImage">
                <img alt="tea banner" src={headerImage} />
            </div>
        </div>
    );
};

export default Header;
