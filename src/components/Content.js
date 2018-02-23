import React from "react";
import ProductImage from "./ProductImage";
import PriceDetail from "./PriceDetail";

const Content = () => {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-lg-6">
          <ProductImage/>
        </div>
        <div className="col-lg-6">
          <PriceDetail/>
        </div>
      </div>
    </div>
  );
}

export default Content;
