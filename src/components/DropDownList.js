import React from "react";
import './DropDownList.scss';

function DropDownList(props) {
  return (
    <div className="row header">
      <div className="col">
        <div className="form-group">
        <label for="select-layout">Please select the Layout Generator's value:</label>
          <select id="select-layout" className="form-control" name="drop down list" defaultValue="none" onChange={props.handleChange}>
            <option value="none" disabled hidden>-</option>
            <option value="xl">XL</option>
            <option value="2XL">2XL</option>
            <option value="4L">4L</option>
            <option value="XL/2L">XL/2L</option>
            <option value="XL/L/2SM">XL/L/2SM</option>
            <option value="4SM/L/2XL">4SM/L/2XL</option>
            <option value="2SM/XL/L/4SM">2SM/XL/L/4SM</option>
          </select>
      </div>
      </div>
    </div>
  );
}

export default DropDownList;