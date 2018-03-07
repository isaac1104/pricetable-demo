import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class FormField extends Component {
  render() {
    const { type, ourPrice, listPrice, label, selected } = this.props;
    return (
      <div>
        <input
          type={type}
          name="option"
          value={ourPrice}
          onClick={() => this.props.changePrice(ourPrice, listPrice)}
          selected={selected}
        />
        <label>{label}</label>
      </div>
    );
  }
}

export default connect(null, actions)(FormField);
