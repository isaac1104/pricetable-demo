import React, { Component } from "react";
import { connect } from "react-redux";

class ProductDetail extends Component {
  render() {
    const { name, sku, ourPrice, listPrice } = this.props;

    const renderPrices = () => {
      if (!ourPrice) {
        return (
          <div>
            <h3 className="text-success">Want to check out our great deals?</h3>
            <h4 className="text-danger">Please select on of the options to see prices</h4>
          </div>
        );
      } else {
        return (
          <div>
            <h3 className="text-success">Our Price: ${ourPrice}.00 </h3>
            <h4 className="text-danger">List Price: <del>${listPrice}.00</del></h4>
          </div>
        );
      }
    }

    return (
      <div>
        <h2 className="display-4">{name}</h2>
        <div className="text-info">
          <h4>SKU: {sku}</h4>
        </div>
        {renderPrices()}
        <div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ price }) {
  return {
    ourPrice: price.ourPrice,
    listPrice: price.listPrice
  }
}

export default connect(mapStateToProps, null)(ProductDetail);
