import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PackageOption extends Component {

  formSubmit = value => {
    alert(`Your total is: $${value.price}`);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <div>
          <label className="text-muted">Meraki Access Point License:</label>
          <div>
            <Field name="price" component="select">
              <option value="300.00">None</option>
              <option value="500.00">1-Year Warranty</option>
              <option value="700.00">3-Year Warranty</option>
              <option value="1000.00">5-Year Warranty</option>
            </Field>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <button className="btn btn-primary btn-md">ADD TO CART</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: "price" })(PackageOption);
