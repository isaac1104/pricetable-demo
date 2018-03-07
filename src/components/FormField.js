import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class FormField extends Component {

  componentWillUnmount() {
    this.props.resetPrice();
  }

  render() {

    const style = {
      marginRight: "15px"
    }

    const { type, ourPrice, listPrice, label } = this.props;
    return (
      <div>
        <input
          style={style}
          type={type}
          name="option"
          value={ourPrice}
          onClick={() => this.props.changePrice(ourPrice, listPrice)}
        />
        <label>{label}</label>
      </div>
    );
  }
}

export default connect(null, actions)(FormField);
