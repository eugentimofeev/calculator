import React, { Component } from "react";
import { TextField } from "@material-ui/core/";
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

class Input extends Component {
	handleWheel = (e, maxValue) => {

		if (document.activeElement !== e.target) return;

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

	bodyBlock = () => {
		const elem = document.querySelector("body"),
			scrollWidth = window.innerWidth - elem.clientWidth;

		const scrollHeight = Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
		);

		if (window.innerHeight < scrollHeight)
			elem.style.paddingRight = `${scrollWidth}px`;
		
		elem.style.overflow = "hidden";
	};

	bodyUnBlock = () => {
		document.querySelector("body").style.overflow = "";
		document.querySelector("body").style.paddingRight = "";
	};

	render() {
		const {
			classes,
			label,
			text,
			value = "",
			name,
			maxValue = 200,
			promptBtnPosition = false,
			promptText = "",
			link = false 
		} = this.props;

		return (
			<div className={classes.promptBtnWrapp}>
				{promptBtnPosition && 
				<Prompt 
					promptText={promptText} 
					link={link} 
					position={promptBtnPosition} 
				/>
				}
				<TextField
					className={classes.fixWidht}
					color="secondary"
					name={name}
					value={value}
					label={label}
					helperText={text}
					onChange={e => this.handleChange(e, maxValue)}
					onWheel={e => this.handleWheel(e, maxValue)}
					onFocus={this.bodyBlock}
					onBlur={this.bodyUnBlock}
				/>
			</div>
		);
	}
}
export default withStyles(styles)(Input);
