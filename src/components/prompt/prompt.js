import React, { Component } from "react";
import { Button, Popover } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";

const styles = {
	wrapp: {
		display: 'flex',
		alignItems: 'center',
	},
	"@media (max-width: 599px)": {
		wrapp: {
			order: -1
		},
	},
	btn: {
		height: "25px",
		minWidth: "25px",
		padding: "0",
		margin: "0 10px 0 10px"
	},
	prompt: {
		maxWidth: 400,
		padding: 15,
		textAlign: "justify",
		"& a": {
			textDecoration: "none",
			color: "#00C35A"
		}
	}
};

class Prompt extends Component {
	state = { anchorEl: null };

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		const { classes, text, link } = this.props;
		const open = Boolean(this.state.anchorEl);
		const id = open ? "simple-popover" : undefined;
	
		return (
		<div className={classes.wrapp}>
			<Button
				aria-describedby={id}
				className={classes.btn}
				variant="outlined"
				color="primary"
				onClick={this.handleClick}
			>
				?
			</Button>
			<Popover
				id={id}
				open={open}
				anchorEl={this.state.anchorEl}
				onClose={this.handleClose}
				anchorOrigin={{
					vertical: "top",
					horizontal: "center"
				}}
				transformOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
			>
			<div className={classes.prompt}>
				{text}

				{link ? (
				<a href={link} target="_blank" rel="noreferrer noopener">
				{" "}
					Доп. информация
				</a>
				) : null}
			</div>
			</Popover>
		</div>
		);
	}
}

export default withStyles(styles)(Prompt);