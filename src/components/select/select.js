import React, { Component } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem
} from "@material-ui/core/";
import Prompt from "../prompt/prompt"


import "./select.css";

export default class Choises extends Component {
  renderItems(obj) {
    let arr = [];

    for (let prop in obj)
      arr.push(
        <MenuItem key={prop} value={obj[prop]}>
          {prop}
        </MenuItem>
      );

    return arr;
  }

  valueChange = e => {
    this.props.onSelectChange(e.target.value, e.target.name);
  };

  render() {
    const { label = "none", text = "", value, values, name,  promptBtnPosition = false, promptText = ""  } = this.props;

    const promptBtnLeft = promptBtnPosition === "left" ? <Prompt promptText={promptText} position="left"/> : null;
    const promptBtnRight = promptBtnPosition === "right" ? <Prompt promptText={promptText} position="right"/> : null;

    const menuItems = this.renderItems(values);

    return (
      <>
        {promptBtnLeft}
        <FormControl>
          <InputLabel color="secondary" htmlFor="age-native-helper">
            {label}
          </InputLabel>
          <Select
            color="secondary"
            value={value}
            onChange={this.valueChange}
            name={name}
          >
            {menuItems}
          </Select>
          <FormHelperText>{text}</FormHelperText>
        </FormControl>
        {promptBtnRight}
      </>
    );
  }
}
