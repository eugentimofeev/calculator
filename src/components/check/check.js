import React, { Component } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";

const styles = {
	fixWidht: {
		width: "auto"
	},
	"@media (max-width: 599px)": {
		fixWidht: {
			width: 182,
			flexDirection: "row",
			margin: 0,
		},
	}
};

class Check extends Component {
	valueChange = e => {
		this.props.onCheckboxChange(e.target.checked, e.target.name);
	};

	render() {
		const {
			classes,
			label,
			value,
			name,
			disabled = false
		} = this.props;

		return (
			<FormControlLabel
				className={classes.fixWidht}
				value={label}
				control={<Checkbox color="secondary" checked={value} name={name} />}
				label={label}
				labelPlacement="top"
				onChange={this.valueChange}
				disabled={disabled}
			/>
		);
	}
}
export default withStyles(styles)(Check);
