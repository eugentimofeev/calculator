import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const mainColor = "#0b949c";

const useStyles = makeStyles({
	logo: {
		position: "relative",
		display: "block",
		background: mainColor,
		width: "109px",
		height: "47px"
	},
	sphere: {
		position: "absolute",
		display: "block",
		borderRadius: "50%",
		border: `1px solid ${mainColor}`
	},
	sphere1: {
		zIndex: 50,
		top: "12px",
		left: "0px",
		width: "33px",
		height: "33px",
		backgroundColor: "#ffd447"
	},
	sphere2: {
		zIndex: 45,
		top: "2px",
		left: "26px",
		width: "21px",
		height: "21px",
		backgroundColor: "#ff72ab"
	},
	sphere3: {
		zIndex: 40,
		top: "12px",
		left: "46px",
		width: "33px",
		height: "33px",
		backgroundColor: "#3298dc"
	},
	sphere4: {
		zIndex: 35,
		top: "3px",
		left: "51px",
		width: "11px",
		height: "11px",
		backgroundColor: "#58c7ff"
	},
	sphere5: {
		zIndex: 30,
		top: "3px",
		left: "74px",
		width: "19px",
		height: "19px",
		backgroundColor: "#ff6b4b"
	},
	sphere6: {
		zIndex: 25,
		top: "6px",
		left: "94px",
		width: "9px",
		height: "9px",
		backgroundColor: "#ff9c46"
	},
	sphere7: {
		zIndex: 50,
		top: "20px",
		left: "86px",
		width: "24px",
		height: "24px",
		backgroundColor: "#c796d7"
	},
	rectangle: {
		display: "block",
		position: "absolute",
		border: `1px solid ${mainColor}`
	},
	rectangle1: {
		zIndex: 49,
		top: "13px",
		left: "27px",
		width: "7px",
		height: "7px",
		borderRadius: "0px 50px 50px 0px",
		backgroundColor: "#ffd447",
		transform: "rotate(-40deg)"
	},
	rectangle2: {
		zIndex: 44,
		top: "18px",
		left: "43px",
		width: "12px",
		height: "5px",
		borderRadius: "0px 50px 50px 0px",
		backgroundColor: "#ff72ab",
		transform: "rotate(31deg)"
	},
	rectangle3: {
		zIndex: 39,
		top: "10px",
		left: "55px",
		width: "5px",
		height: "4px",
		borderRadius: "0px 50px 50px 0px",
		backgroundColor: "#58c7ff",
		transform: "rotate(-105deg)"
	},
	rectangle4: {
		zIndex: 31,
		top: "14px",
		left: "72px",
		width: "10px",
		height: "6px",
		borderRadius: "0px 50px 50px 0px",
		backgroundColor: "#ff6b4b",
		transform: "rotate(-35deg)"
	},
	rectangle5: {
		zIndex: 43,
		top: "27px",
		left: "73px",
		width: "14px",
		height: "6px",
		borderRadius: "0px 50px 50px 0px",
		backgroundColor: "#c796d7",
		transform: "rotate(186deg)"
	},
	rectangle6: {
		zIndex: 27,
		top: "9px",
		left: "91px",
		width: "7px",
		height: "4px",
		borderRadius: "0px 50px 50px 0px",
		backgroundColor: "#ff9c46",
		transform: "rotate(-6deg)"
	},
	"@media (max-width: 720px)": {
		logo: {
			width: 83,
			height: 45
		},
		sphere1: {
			width: 25,
			height: 25,
			top: 14
		},
		sphere2: {
			top: 5,
			left: 19,
			width: 16,
			height: 16
		},
		sphere3: {
			top: 13,
			left: 35,
			width: 25,
			height: 25
		},
		sphere4: {
			top: 6,
			left: 38,
			width: 9,
			height: 9
		},
		sphere5: {
			top: 6,
			left: 57,
			width: 14,
			height: 15
		},
		sphere6: {
			top: 9,
			left: 72,
			width: 7,
			height: 7
		},
		sphere7: {
			top: 20,
			left: 66,
			width: 18,
			height: 18
		},
		rectangle1: {
			left: 19,
			width: 7,
			height: 6
		},
		rectangle2: {
			top: 17,
			left: 31,
			width: 10,
			height: 4
		},
		rectangle3: {
			top: 12,
			left: 42,
			width: 4,
			height: 3
		},
		rectangle4: {
			top: 16,
			left: 54,
			width: 8,
			height: 4
		},
		rectangle5: {
			top: 25,
			left: 56,
			width: 14,
			height: 5
		},
		rectangle6: {
			top: 11,
			left: 68,
			width: 7,
			height: 3
		}
	}
});

export default function Logo() {
  	const classes = useStyles();

	return (
		<div className={classes.logo}>
			<div className={classes.sphere + " " + classes.sphere1} />
			<div className={classes.rectangle + " " + classes.rectangle1} />
			<div className={classes.sphere + " " + classes.sphere2} />
			<div className={classes.rectangle + " " + classes.rectangle2} />
			<div className={classes.sphere + " " + classes.sphere3} />
			<div className={classes.rectangle + " " + classes.rectangle3} />
			<div className={classes.rectangle + " " + classes.rectangle4} />
			<div className={classes.rectangle + " " + classes.rectangle5} />
			<div className={classes.sphere + " " + classes.sphere4} />
			<div className={classes.sphere + " " + classes.sphere5} />
			<div className={classes.sphere + " " + classes.sphere6} />
			<div className={classes.rectangle + " " + classes.rectangle6} />
			<div className={classes.sphere + " " + classes.sphere7} />
		</div>
	);
}
