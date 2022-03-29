import React from "react";

const Header = ({ logo, headerImage }) => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" alt="logo" src={logo} />
            </div>
            <div className="imageBannerContainer"></div>
        </div>
    );
};

export default Header;
