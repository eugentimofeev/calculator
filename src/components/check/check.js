import React, { Component } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core/";

export default class Check extends Component {
  valueChange = e => {
    this.props.onCheckboxChange(e.target.checked, e.target.name);
  };

  render() {
    const { label, value, name } = this.props;

    return (
      <FormControlLabel
        value={label}
        control={<Checkbox color="secondary" checked={value} name={name} />}
        label={label}
        labelPlacement="top"
        onChange={this.valueChange}
      />
    );
  }
}
