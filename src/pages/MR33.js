import React from "react";
import ProductImage from "../components/ProductImage";
import FormField from "../components/FormField";

const MR33 = () => {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-lg-6">
          <ProductImage/>
        </div>
        <div className="col-lg-6">
          <FormField
            type="radio"
            label="None"
          />
          <FormField
            type="radio"
            label="None"
          />
          <FormField
            type="radio"
            label="None"
          />
        </div>
      </div>
    </div>
  );
}

export default MR33;
