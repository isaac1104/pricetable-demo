import React, { Component } from "react";
import { connect } from "react-redux";

class ProductDetail extends Component {
  render() {
    const { name, sku, ourPrice, listPrice } = this.props;

    const renderPrices = () => {
      if (!ourPrice) {
        return (
          <div>
            <h3 className="text-success">Please select one of the options to see our great deal!</h3>
          </div>
        );
      } else {
        return (
          <div className="d-flex">
            <h4 className="text-danger">List Price: <del>${listPrice}.00</del></h4>
            <h4 className="text-success">Our Price: ${ourPrice}.00 </h4>
            <h4 className="text-muted">You Save: {Math.floor(((listPrice - ourPrice) / listPrice) * 100)}%</h4>
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
