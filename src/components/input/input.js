import React, { Component } from "react";
import { TextField } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";

const styles = {
	fixWidht: {
		width: 182
	},
	promptBtnWrapp: {
		display: "flex",
		alignItems: "center"
	},
	btn: {
		height: "25px",
		minWidth: "25px",
		padding: "0",
		margin: "0 10px 0 10px"
	}
};

class Input extends Component {
	handleWheel = (e, maxValue, someEvent) => {

		if (document.activeElement !== e.target) return;

		let value = e.target.value;

		if (e.deltaY > 0) value--;
		else value++;

		if (value < 0 || value > maxValue || isNaN(value)) return;


		if (someEvent) someEvent(value);

		this.props.onInputChange(value, e.target.name);
	};

	handleChange = (e, maxValue, someEvent) => {
		let value = e.target.value;

		if (value < 0 || value > maxValue || isNaN(value)) return;

		
		if (someEvent) someEvent(value);

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
			someEvent,
		} = this.props;

		return (
			<TextField
				type={window.innerWidth < 500 ? "number" : "text"}
				className={classes.fixWidht}
				color="secondary"
				name={name}
				value={value}
				label={label}
				helperText={text}
				onChange={e => this.handleChange(e, maxValue, someEvent)}
				onWheel={e => this.handleWheel(e, maxValue, someEvent)}
				onFocus={window.innerWidth < 500 ? null : this.bodyBlock}
				onBlur={this.bodyUnBlock}
				onKeyUp={e => {
					if (e.keyCode === 13) e.target.blur();
				}}
			/>
		);
	}
}
export default withStyles(styles)(Input);
