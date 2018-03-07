import React from "react";
import ProductImage from "../components/ProductImage";
import ProductDetail from "../components/ProductDetail";
import FormField from "../components/FormField";
import AddToCart from "../components/AddToCart";

const AP122 = () => {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-lg-6">
          <ProductImage
            image="/images/2.png"
          />
        </div>
        <div className="col-lg-6">
          <ProductDetail
            name="Aerohive 122 Series"
            sku="AH-AP-122-AC-FCC"
          />
          <FormField
            type="radio"
            label="Aerohive AP122 with no bundles"
            ourPrice={175.00}
            listPrice={229.00}
          />
          <FormField
            type="radio"
            label="AP122 Access Point and 1 year NG Cloud Services Subscription"
            ourPrice={335.00}
            listPrice={404.00}
          />
          <FormField
            type="radio"
            label="AP122 Access Point and 3 year NG Cloud Services Subscription"
            ourPrice={480.00}
            listPrice={579.00}
          />
          <FormField
            type="radio"
            label="AP122 Access Point and 5 year NG Cloud Services Subscription"
            ourPrice={625.00}
            listPrice={754.00}
          />
          <AddToCart/>
        </div>
      </div>
    </div>
  );
}

export default AP122;
