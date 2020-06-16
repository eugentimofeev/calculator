import React, { Component } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core/";
import Prompt from "../prompt/prompt"

export default class Check extends Component {
  valueChange = e => {
    this.props.onCheckboxChange(e.target.checked, e.target.name);
  };

  render() {
    const { label, value, name, promptBtnPosition = false, promptText = "" } = this.props;

    const promptBtnLeft = promptBtnPosition === "left" ? <Prompt promptText={promptText} position="top"/> : null;
    const promptBtnRight = promptBtnPosition === "right" ? <Prompt promptText={promptText} position="top"/> : null;

    return (
      <>
        {promptBtnLeft}
        <FormControlLabel
          value={label}
          control={<Checkbox color="secondary" checked={value} name={name}/>}
          label={label}
          labelPlacement="top"
          onChange={this.valueChange}
        />
        {promptBtnRight}
      </>
    );
  }
}
