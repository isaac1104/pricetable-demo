import React from "react";
import ProductImage from "../components/ProductImage";
import ProductDetail from "../components/ProductDetail";
import FormField from "../components/FormField";
import AddToCart from "../components/AddToCart";

const MR33 = () => {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-lg-6">
          <ProductImage
            image="/images/1.jpg"
          />
        </div>
        <div className="col-lg-6">
          <ProductDetail
            name="Meraki MR33 Access Point 802.11ac Wave 2 2x2 MR33-HW"
            sku="MR33-HW"
            ourPrice="433.00"
            listPrice="649.00"
          />
          <FormField
            type="radio"
            label="None"
            ourPrice={433.00}
            listPrice={649.00}
          />
          <FormField
            type="radio"
            label="Cisco Meraki Enterprise Cloud Controller License, 1 Year"
            ourPrice={524.00}
            listPrice={799.00}
          />
          <FormField
            type="radio"
            label="Cisco Meraki Enterprise Cloud Controller License, 3 Year"
            ourPrice={622.00}
            listPrice={949.00}
          />
          <FormField
            type="radio"
            label="Cisco Meraki Enterprise Cloud Controller License, 5 Year"
            ourPrice={720.00}
            listPrice={1099.00}
          />
          <FormField
            type="radio"
            label="Cisco Meraki Enterprise Cloud Controller License, 7 Year"
            ourPrice={838.00}
            listPrice={1099.00}
          />
          <FormField
            type="radio"
            label="Cisco Meraki Enterprise Cloud Controller License, 10 Year"
            ourPrice={1015.00}
            listPrice={1549.00}
          />
          <AddToCart/>
        </div>
      </div>
    </div>
  );
}

export default MR33;
