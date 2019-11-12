import React from "react";

function DropDownList(props) {
  return (
    <div className="row">
      <div className="col">
        <label>
          Please select the Layout Generator's value:
          <select name="drop down list" defaultValue="none" onChange={props.handleChange}>
            <option value="none" disabled hidden>-</option>
            <option value="xl">XL</option>
            <option value="2XL">2XL</option>
            <option value="4L">4L</option>
            <option value="XL/2L">XL/2L</option>
            <option value="XL/L/2SM">XL/L/2SM</option>
            <option value="4SM/L/2XL">4SM/L/2XL</option>
            <option value="SM/XL/L/3SM">4SM/L/2XL</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default DropDownList;