import React from "react";

const Header = ({ logo, headerImage }) => {
    return (
        <div className="header">
            <div className="companyBranding">
                <div className="logoContainer">
                    <img className="logo" alt="logo" src={logo} />
                </div>
                <div className="companyNameContainer">
                    <h1 className="companyName">Quali-Tea</h1>
                </div>
            </div>
            <div className="imageBannerContainer"></div>
        </div>
    );
};

export default Header;
