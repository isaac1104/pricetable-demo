import React, { Component } from "react";
import { connect } from "react-redux";

class AddToCart extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.props.ourPrice || !this.props.listPrice) {
      alert("Please make a selection!");
    } else {
      alert(`List Price - $${this.props.listPrice} Our Price - $${this.props.ourPrice}`);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button
          type="submit"
          className="btn btn-outline-success"
        >
          ADD TO CART
        </button>
    </form>
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
