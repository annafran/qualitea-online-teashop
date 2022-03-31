import { React, useEffect, useState } from "react";
import "./App.css";
import logo from "./images/transparentLogo.png";
import Products from "./components/Products";
import Header from "./components/Header";
import FilterBy from "./components/FilterBy";
import SortBy from "./components/SortBy";
import filterByCategory from "./utils/filterByCategory";
import sortProducts from "./utils/sortProducts";
import { getProducts } from "./services/getProducts";

function App() {
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
    <div>
      <Header logo={logo} />
      <div className="toolbar">
        <FilterBy setFilterBy={setFilterBy} />
        <SortBy setSortBy={setSortBy} />
      </div>
      <Products products={filteredProducts} />
    </div>
  );
}

export default App;
