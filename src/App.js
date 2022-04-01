import { React, useEffect, useState } from "react";
import "./App.css";
import logo from "./images/transparentLogo.png";
import Products from "./components/Products";
import Header from "./components/Header";
import FilterBy from "./components/FilterBy";
import SortBy from "./components/SortBy";
import Search from "./components/Search";
import filterByCategory from "./utils/filterByCategory";
import sortProducts from "./utils/sortProducts";
import { getProducts } from "./services/getProducts";
import getProductsBySearch from "./utils/getProductsBySearch";
import Credits from "./components/Credits";
import NumberProducts from "./components/NumberProducts";

function App() {
  const [products, setProducts] = useState([]);
  const [filterBy, setFilterBy] = useState("all");
  const [sortBy, setSortBy] = useState("low");
  const [query, setSearch] = useState("");
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

  useEffect(() => {
    const loadData = () => {
      const searched = getProductsBySearch(products, query);
      setFilteredProducts([...searched]);
    };

    loadData();
  }, [products, query]);

  return (
    <div>
      <Header logo={logo} />
      <div className="toolbar">
        <FilterBy setFilterBy={setFilterBy} />
        <SortBy setSortBy={setSortBy} />
        <Search setSearch={setSearch} query={query} />
        <NumberProducts number={filteredProducts.length} />
      </div>
      <Products products={filteredProducts} />
      <Credits />
    </div>
  );
}

export default App;
