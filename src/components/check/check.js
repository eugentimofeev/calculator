import React, { Component } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core/";
import Prompt from "../prompt/prompt";
import { withStyles } from "@material-ui/core/styles";

const styles = {
	fixWidht: {
		width: "auto"
	},
	promptBtnWrapp: {
		display: "flex",
	},
	"@media (max-width: 599px)": {
		fixWidht: {
			width: 182,
			flexDirection: "row",
			margin: 0,
		},
		promptBtnWrapp: {
			alignItems: "center",
			marginBottom: 15
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
			promptBtnPosition = false,
			promptText = "",
			link = false,
			disabled = false
		} = this.props;

		return (
			<div className={classes.promptBtnWrapp}>
				<Prompt 
					promptText={promptText} 
					link={link} 
					position={promptBtnPosition} 
				/>
				<FormControlLabel
					className={classes.fixWidht}
					value={label}
					control={<Checkbox color="secondary" checked={value} name={name} />}
					label={label}
					labelPlacement="top"
					onChange={this.valueChange}
					disabled={disabled}
				/>
			</div>
		);
	}
}
export default withStyles(styles)(Check);
