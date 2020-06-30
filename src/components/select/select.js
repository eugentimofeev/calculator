import React, { Component } from "react";
import {
	FormControl,
	InputLabel,
	Select,
	FormHelperText,
	MenuItem
} from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import Prompt from "../prompt/prompt";

const styles = {
	fixWidht: {
		width: 182
	},
	promptBtnWrapp: {
		display: "flex",
		alignItems: "center"
	}
};
class Choises extends Component {
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
		const {
			classes,
			label = "none",
			text = "",
			value,
			values,
			name,
			promptBtnPosition = false,
			promptText = "",
			link = false
		} = this.props;

		const menuItems = this.renderItems(values);

		return (
			<div className={classes.promptBtnWrapp}>
				<Prompt 
					promptText={promptText} 
					link={link} 
					position={promptBtnPosition} 
				/>
				<FormControl className={classes.fixWidht}>
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
			</div>
		);
	}
}

export default withStyles(styles)(Choises);
