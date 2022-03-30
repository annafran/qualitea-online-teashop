import { React, useEffect, useState } from "react";
import "./App.css";
import headerImage from "./images/headerImage.jpg";
import logo from "./images/transparentLogo.png";
import Products from "./components/Products";
import Header from "./components/Header";
import FilterBy from "./components/FilterBy";

// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";

function App() {
    // use the products variable to read all of your products
    // and display them on your page
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const products = await getProducts();
            setProducts(products);
        };

        loadData();
    }, []);

    return (
        <div className="container">
            <Header logo={logo} headerImage={headerImage} />
            <FilterBy products={products} />
            <Products products={products} />
        </div>
    );
}

export default App;
