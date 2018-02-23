import React from "react";

const FormField = field => {

  const { meta } = field;

  return (
    <div>
      <label>{field.label}</label>
      <select
        className="form-control"
        type={field.type}
      />
    </div>
  );
}

export default FormField;
