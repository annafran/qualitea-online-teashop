import { React, useEffect, useState } from "react";
import "./App.css";
import Products from "./components/Products";

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
            <h1>Quali-Tea</h1>
            <div className="headerImage">
                <img
                    alt="logo"
                    src="images/Beige Minimalist Botanical Tea Logo.png"
                />
            </div>
            <div>
                <Products />
            </div>
        </div>
    );
}

export default App;
