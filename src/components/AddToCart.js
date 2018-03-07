import React, { Component } from "react";
import { connect } from "react-redux";

class AddToCart extends Component {
  render() {
    return (
      <button
        className="btn btn-outline-success"
        onClick={() => console.log(this.props.ourPrice, this.props.listPrice)}
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
