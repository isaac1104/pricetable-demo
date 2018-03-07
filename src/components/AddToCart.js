import React, { Component } from "react";
import { connect } from "react-redux";

class AddToCart extends Component {
  render() {
    return (
      <button
        className="btn btn-outline-success"
        onClick={() => console.log(this.props.price)}
      >
        ADD TO CART
      </button>
    );
  }
}

function mapStateToProps({ price }) {
  return {
    price: price.price
  };
}

export default connect(mapStateToProps, null)(AddToCart);
