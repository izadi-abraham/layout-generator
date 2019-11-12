import React from "react";

function DropDownList(props) {
  return (
    <div className="row">
      <div className="col">
        <label>
          Pick your favorite flavor:
          <select onChange={props.handleChange}>
            <option value="xl/2l">xl/2l</option>
            <option value="4sm/xl/2l">4sm/xl/2l</option>
            <option value="l/4sm/xl">l/4sm/xl</option>
            <option value="2sm/l/4xl">2sm/l/4xl</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default DropDownList;