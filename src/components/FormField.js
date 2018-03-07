import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class FormField extends Component {
  render() {
    const { type, ourPrice, label } = this.props;
    return (
      <div>
        <input
          type={type}
          name="option"
          value={ourPrice}
          onClick={() => this.props.changePrice(ourPrice)}
        />
        <label>{label}</label>
      </div>
    );
  }
}

function mapStateToProps({ price }) {
  return {
    price
  };
}

export default connect(mapStateToProps, actions)(FormField);
