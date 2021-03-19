import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Logo from "../logo/logo";

const mainColor = "#0b949c";

const styles = {
	link: {
		display: 'block',
		width: 'max-content',
		"&:hover": {
			textDecoration: "none",
			color: "#fff",
		},
	},
	header: {
		textTransform: "uppercase",
		width: "100%",
		height: "60px",
		backgroundColor: `${mainColor}`,
		padding: "5px 0 0 0",
		color: "white",
		fontSize: "20px",
		marginBottom: 15
	},
	headerLogo: {
		display: "flex",
		color: "#fff",
		"&:hover": {
		textDecoration: "none",
		color: "#fff",
		},
  	},
	title: {
		display: "flex",
		alignItems: "center",
		marginLeft: 10,
		zIndex: 21
	},
};

class Header extends Component {

	render() {
		const { classes, title, link } = this.props;

		return (
			<div className={classes.header}>
				<Container>	
					<a
						href={link}
						target="_blank"
						rel="noreferrer noopener"
						className={classes.link}
					>
						<div className={classes.headerLogo}>
							<Logo/>
							<div className={classes.title}>
								{title}
							</div>
						</div>
					</a>
				</Container>
			</div>
		);
	}
}

export default withStyles(styles)(Header);