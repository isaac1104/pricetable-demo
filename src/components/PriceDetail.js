import React, { Component } from "react";
// import PackageOption from "./PackageOption";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class PriceDetail extends Component {

  formSubmit = value => {
    console.log(value);
  }

  render() {
    const { handleSubmit } = this.props;

    if (!this.props.form.price) {
      return <div></div>
    }

    const { price: { values : { price } } } = this.props.form;

    const priceDiff = () => {
      if (price < 600) {
        return <h3>You save ${600 - price}</h3>
      } else {
        return <div></div>
      }
    }

    return (
      <div>
        <h6>Meraki MR33 Access Point 802.11ac Wave 2 2x2 MR33-HW</h6>
        <div className="d-flex align-items-center" style={{justifyContent: "space-between"}}>
          <h3>PRICE: ${price}</h3>
          <h4>MSRP: <del>$600</del></h4>
          {priceDiff()}
        </div>
        <div>
          <h2>SKU: MR33-HW</h2>
          <h2>Condition: New</h2>
          <h2>Availability: In Stock</h2>
        </div>
        <div>
          <form onSubmit={handleSubmit(this.formSubmit)}>
            <div>
              <label>Meraki Access Point License:</label>
              <div>
                <Field name="price" component="select">
                  <option value="300.00">None</option>
                  <option value="500.00">1-Year Warranty</option>
                  <option value="700.00">3-Year Warranty</option>
                  <option value="1000.00">5-Year Warranty</option>
                </Field>
              </div>
            </div>
            <button className="btn btn-primary btn-md">ADD TO CART</button>
          </form>
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
