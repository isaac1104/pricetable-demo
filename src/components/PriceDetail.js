import React from "react";
import PackageOption from "./PackageOption";

const PriceDetail = () => {
  return (
    <div>
      <h6>Meraki MR33 Access Point 802.11ac Wave 2 2x2 MR33-HW</h6>
      <div className="d-flex align-items-center" style={{justifyContent: "space-between"}}>
        <h3>PRICE: $500</h3>
        <h4>MSRP: $600</h4>
        <h3>(You save $$$)</h3>
      </div>
      <div>
        <h2>SKU: MR33-HW</h2>
        <h2>Condition: New</h2>
        <h2>Availability: In Stock</h2>
      </div>
      <h5>Meraki Access Point License:</h5>
      <PackageOption/>
    </div>
  );
}

export default PriceDetail;
