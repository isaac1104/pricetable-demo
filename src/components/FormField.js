import React from "react";

const FormField = field => {
  return (
    <div>
      <label>{field.label}</label>
      <input
        className="form-control"
        type={field.type}
        name="option"
      />
    </div>
  );
}

export default FormField;
