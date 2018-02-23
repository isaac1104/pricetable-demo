import React, { Component } from "react";
import PackageOption from "./PackageOption";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class PriceDetail extends Component {
  render() {
    if (!this.props.form.price) {
      return <div>loading...</div>
    }

    const { price: { values : { price } } } = this.props.form;

    const priceDiff = () => {
      if (price < 600) {
        return <h3 className="text-warning">You save: ${600 - price}</h3>
      } else {
        return <h3 className="text-warning"><del>You save: $0</del></h3>
      }
    }

    return (
      <div>
        <h2 className="display-4">Meraki MR33 Access Point 802.11ac Wave 2 2x2 MR33-HW</h2>
        <div>
          <h3 className="text-success">Our Price: ${price}</h3>
          <h4 className="text-danger">List Price: <del>$600</del></h4>
          {priceDiff()}
        </div>
        <div className="text-info">
          <h4>SKU: MR33-HW</h4>
          <h4>Condition: New</h4>
          <h4>Availability: In Stock</h4>
        </div>
        <div>
          <PackageOption/>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ form }) {
  return {
    form
  }
}

export default reduxForm({ form: "price", initialValues: { price: "300.00" } })(connect(mapStateToProps, {})(PriceDetail));
