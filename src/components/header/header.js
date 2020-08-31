import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Container, Zoom } from "@material-ui/core";
import Logo from "../logo/logo";

import { ReactComponent as Vk } from "../svg/vk.svg";
import { ReactComponent as Telegram } from "../svg/telegram.svg";
import { ReactComponent as Youtube } from "../svg/youtube.svg";

const mainColor = "#0b949c";

const styles = {
	header: {
		textTransform: "uppercase",
		width: "100%",
		height: "60px",
		backgroundColor: `${mainColor}`,
		padding: "5px 0 0 0",
		color: "white",
		fontSize: "20px"
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
	titleSmall: {
		display: "none"
	},
	social: {
		display: "flex",
		justifyContent: "space-evenly"
	},
	socialLink: {
		width: 40,
		height: 40,
		display: "block"
	},
	socialSvg: {
		width: 40,
		height: 40,
	},
	showAboutFalse: {
		display: "block",
		position: "fixed",
		top: 0,
		right: 0,
		borderRadius: "50%",
		width: "0",
		height: "0",
		backgroundColor: `${mainColor}`,
		zIndex: 20,
		transition: ".5s ease"
	},
	showAboutTrue: {
		display: "block",
		position: "fixed",
		top: 0,
		right: 0,
		borderRadius: "50%",
		width: "180vw",
		height: "180vw",
		transform: "translate(25%, -25%)",
		backgroundColor: `${mainColor}`,
		zIndex: 20,
		transition: ".5s ease"
	},
	aboutTextShow: {
		position: "relative",
		display: "flex",
		alignItems: "center",
		zIndex: 21,
		height: 47,
		cursor: "pointer",
		"& span:nth-child(1)": {
			position: "absolute",
			top: "50%",
			left: "50%",
			display: "block",
			backgroundColor: "white",
			width: 50,
			height: 5,
			borderRadius: "20px",
			transform: "translateY(-50%) translateX(-50%) rotate(0) scaleX(0)",
			transition: "0.5s ease"
		},
		"& span:nth-child(2)": {
			display: "block",
			textAlign: "center",
			transform: "scaleY(1)",
			transition: "0.5s ease"
		},
		"& span:nth-child(3)": {
			position: "absolute",
			top: "50%",
			left: "50%",
			display: "block",
			backgroundColor: "white",
			width: 50,
			height: 5,
			borderRadius: "20px",
			transform: "translateY(-50%) translateX(-50%) rotate(0) scaleX(0)",
			transition: "0.5s ease"
		}
	},
	aboutTextHide: {
		position: "relative",
		display: "flex",
		alignItems: "center",
		zIndex: 21,
		height: 47,
		cursor: "pointer",
		"& span:nth-child(1)": {
			position: "absolute",
			top: "50%",
			left: "50%",
			display: "block",
			backgroundColor: "white",
			width: "50px",
			height: "5px",
			borderRadius: "20px",
			transform: "translateY(-50%) translateX(-50%) rotate(-405deg) scaleX(1)",
			transition: "0.5s ease"
		},
		"& span:nth-child(2)": {
			display: "block",
			textAlign: "center",
			transform: "scaleY(0) rotate(360deg)",
			transition: "0.5s ease"
		},
		"& span:nth-child(3)": {
			position: "absolute",
			top: "50%",
			left: "50%",
			display: "block",
			backgroundColor: "white",
			width: "50px",
			height: "5px",
			borderRadius: "20px",
			transform: "translateY(-50%) translateX(-50%) rotate(405deg) scaleX(1)",
			transition: "0.5s ease"
		}
	},
	about: {
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		position: "fixed",
		top: 60,
		left: 0,
		right: 0,
		bottom: 0,
		overflowX: "hidden",
		overflowY: "auto",
		width: "100%",
		height: "auto",
		zIndex: 25,
		paddingTop: 50,
		"& span": {
			width: 550,
			textAlign: "center",
			marginBottom: "20px"
		}
	},
	hide: { display: "none" },
	overflowTrue: {
		overflow: "hidden"
	},
	"@media (max-width: 720px)": {
		header: {
			fontSize: 17
		}
	},
	"@media (max-width: 599px)": {
		header: {
			fontSize: 16
		},
		titleBig: {
			display: "none"
		},
		titleSmall: {
			display: "flex"
		},
		about: {
			"& span": {
				width: "100%",
				padding: "0 10px 0 10px"
			}
		},
		socialLink: {
			width: 30,
			height: 30,
		},
		socialSvg: {
			width: 30,
			height: 30,
		},
		showAboutTrue: {
			width: "180vh",
			height: "180vh"
		},
		aboutTextHide: {
			"& span:nth-child(3)": {
				width: 35,
				height: 4
			},
			"& span:nth-child(1)": {
				width: 35,
				height: 4
			}
		}
  	}
};

class Header extends Component {
  	state = { showAbout: false };

	handleChange = () => {
		this.setState({ showAbout: !this.state.showAbout }, () => {
			document
			.querySelector("body")
			.classList.toggle(this.props.classes.overflowTrue);
		});
	};

	render() {
		const { classes } = this.props;

		return (
		<div className={classes.header}>
			<Container>
			<Grid container spacing={0}>
				<Grid container justify="flex-start" item xs={9} sm={10}>
				<a href="https://calculator.eugentimofeev.ru/" 
					className={classes.headerLogo}
					>
					<Logo />
					<div className={classes.title + " " + classes.titleBig}>
						Калькулятор ЗП для сотрудников СЗК
					</div>
					<div className={classes.title + " " + classes.titleSmall}>
						ЗП для СЗК
					</div>
				</a>
	
				</Grid>
				<Grid container justify="flex-end" item xs={3} sm={2}>
				<div
					className={
					this.state.showAbout
						? classes.aboutTextHide
						: classes.aboutTextShow
					}
					onClick={this.handleChange}
				>
					<span />
					<span>О сайте</span>
					<span />
				</div>
				<div
					className={
					this.state.showAbout
						? classes.showAboutTrue
						: classes.showAboutFalse
					}
				/>
				<div
					className={this.state.showAbout ? classes.about : classes.hide}
				>
					<Zoom in={this.state.showAbout} timeout={500}>
						<span>
							Обновление от 31.08.20
						</span>
					</Zoom>
					<Zoom in={this.state.showAbout} timeout={500}>
						<span>
							Сайт создан специально для сотрудников СЗК, дабы облегчить
							расчет ЗП. Также благодаря данному калькулятору можно
							ставить планы на месяц и улучшать свои показатели на работе.
						</span>
					</Zoom>
					<Zoom in={this.state.showAbout} timeout={750}>
						<span>
							Сайт разработан с помощью библеотеки React с использованием
							React ui фреймворка Material-ui.
						</span>
					</Zoom>
					<Zoom in={this.state.showAbout} timeout={1000}>
						<span>
							Если у Вас есть пожелания или идеи для сайта, то можно их
							оставить по ссылкам ниже.
						</span>
					</Zoom>
					<Zoom in={this.state.showAbout} timeout={1250}>
						<span className={classes.social}>
							<a href="https://vk.com/becko1"
								target="_blank"
								rel="noreferrer noopener"
								className={classes.socialLink}
							>
								<Vk className={classes.socialSvg}/>
							</a>
							<a href="https://t.me/EugenTimofeev" 
								target="_blank"
								rel="noreferrer noopener"
								className={classes.socialLink}
							>
								<Telegram className={classes.socialSvg}/>
							</a>
							<a
								href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
								target="_blank"
								rel="noreferrer noopener"
								className={classes.socialLink}
							>
								<Youtube className={classes.socialSvg}/>
							</a>
						</span>
					</Zoom>
				</div>
				</Grid>
			</Grid>
			</Container>
		</div>
		);
	}
}

export default withStyles(styles)(Header);
