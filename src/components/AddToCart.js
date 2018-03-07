import React, { Component } from "react";
import { connect } from "react-redux";

class AddToCart extends Component {
  render() {
    return (
      <button
        type="submit"
        className="btn btn-outline-success"
        onClick={() => alert(`List Price - $${this.props.listPrice} Our Price - $${this.props.ourPrice}`)}
      >
        ADD TO CART
      </button>
    );
  }
}

function mapStateToProps({ price }) {
  return {
    ourPrice: price.ourPrice,
    listPrice: price.listPrice
  };
}

export default connect(mapStateToProps, null)(AddToCart);
