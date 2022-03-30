import { React, useEffect, useState } from "react";
import "./App.css";
import headerImage from "./images/headerImage.jpg";
import logo from "./images/transparentLogo.png";
import Products from "./components/Products";
import Header from "./components/Header";
import FilterBy from "./components/FilterBy";
import SortBy from "./components/SortBy";
import filterByCategory from "./utils/filterByCategory";
import sortProducts from "./utils/sortProducts";

// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";

function App() {
    // use the products variable to read all of your products
    // and display them on your page
    const [products, setProducts] = useState([]);
    const [filterBy, setFilterBy] = useState("all");
    const [sortBy, setSortBy] = useState("low");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            setProducts(await getProducts());
        };

        loadData();
    }, []);

    useEffect(() => {
        const loadData = () => {
            const filtered = filterByCategory(products, filterBy);
            const sorted = sortProducts(filtered, sortBy);
            setFilteredProducts([...sorted]);
        };

        loadData();
    }, [filterBy, sortBy, products]);

    return (
        <div className="container">
            <Header logo={logo} headerImage={headerImage} />
            <div className="toolbar">
                <FilterBy setFilterBy={setFilterBy} />
                <SortBy setSortBy={setSortBy} />
            </div>
            <Products products={filteredProducts} />
        </div>
    );
}

export default App;
