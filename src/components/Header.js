import React from "react";

const Header = ({ logo, headerImage }) => {
    return (
        <div className="header">
            <div className="companyBranding">
                <div className="logoContainer">
                    <img className="logo" alt="logo" src={logo} />
                </div>
                <h1 className="companyName">Quali-Tea</h1>
            </div>
            <div className="imageBannerContainer">
                <img
                    className="imageBanner"
                    alt="teacup banner"
                    src={headerImage}
                />
            </div>
        </div>
    );
};

export default Header;
