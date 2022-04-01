const NumberProducts = ({ number }) => {
  return (
    <div className="numberProductsContainer">
      <p className="numberProducts">
        {number} product{number === 1 ? "" : "s"}
      </p>
    </div>
  );
};

export default NumberProducts;
