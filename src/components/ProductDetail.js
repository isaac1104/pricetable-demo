import React, { Component } from "react";
import { connect } from "react-redux";

class ProductDetail extends Component {
  render() {
    const { name, sku, ourPrice, listPrice } = this.props;

    return (
      <div>
        <h2 className="display-4">{name}</h2>
        <div className="text-info">
          <h4>SKU: {sku}</h4>
        </div>
        <div>
          <h3 className="text-success">Our Price: ${ourPrice} </h3>
          <h4 className="text-danger">List Price: <del>${listPrice}</del></h4>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
