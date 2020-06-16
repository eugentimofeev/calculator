import React, { Component } from "react";
import { TextField } from "@material-ui/core/";
import Prompt from "../prompt/prompt"


export default class Input extends Component {

  handleWheel = (e, maxValue) => {
    let value = +e.target.value;

    if (e.deltaY > 0) value--;
    else value++;

    if (value < 0 || value > maxValue || isNaN(value)) return;

    this.props.onInputChange(value, e.target.name);
  };

  handleChange = (e, maxValue) => {
    const value = +e.target.value;

    if (value < 0 || value > maxValue || isNaN(value)) return;

    this.props.onInputChange(value, e.target.name);
  };

  handleLeave = e => {
    console.log("leave");
  };

  handleEnter = e => {
    console.log("enter");
  };

  render() {
    const { label, text, value = "", name, maxValue = 31, promptBtnPosition = false, promptText = "" } = this.props;

    const promptBtnLeft = promptBtnPosition === "left" ? <Prompt promptText={promptText} position="left"/> : null;
    const promptBtnRight = promptBtnPosition === "right" ? <Prompt promptText={promptText} position="right"/> : null;

    return (
      <>
        {promptBtnLeft}
        <TextField
          color="secondary"
          name={name}
          value={value}
          label={label}
          helperText={text}
          onChange={e => this.handleChange(e, maxValue)}
          onWheel={e => this.handleWheel(e, maxValue)}
          onMouseEnter={this.handleEnter}
          onMouseLeave={this.handleLeave}
        />
        {promptBtnRight}
      </>
    );
  }
}
