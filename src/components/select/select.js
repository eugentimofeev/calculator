import React, { Component } from "react";
import {
	FormControl,
	InputLabel,
	Select,
	FormHelperText,
	MenuItem,
} from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";

const styles = {
	fixWidht: {
		width: 182
	},
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

	valueChange = (e,  someEvent) => {

		const value = e.target.value;
		console.log(value);
		if (someEvent) someEvent(value);

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
			someEvent,
		} = this.props;

		const menuItems = this.renderItems(values);

		return (
			<FormControl className={classes.fixWidht}>
				<InputLabel color="secondary" htmlFor="age-native-helper">
					{label}
				</InputLabel>
				<Select
					color="secondary"
					value={value}
					onChange={e => this.valueChange(e, someEvent)}
					name={name}
				>	
					{menuItems}
				</Select>
				<FormHelperText>{text}</FormHelperText>
			</FormControl>
		);
	}
}

export default withStyles(styles)(Choises);
