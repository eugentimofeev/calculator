import React from "react";

import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Container } from "@material-ui/core";

import {ReactComponent as LogoIcon} from "../icons/logo.svg";

const useStyles = makeStyles({
    header: {
		width: "100%",
		height: "60px",
        backgroundColor: theme => theme.palette.primary.main,
    },
    container: {
        height: "100%",
    },
    row: {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    link: {
        display: "flex",
		alignItems: "center",
        gap: "10px",
        height: "100%",
        width: 'max-content',
        color: "#fff",
        fontWeight: 500,
        fontSize: "20px",
        userSelect: "none",
        textTransform: "uppercase",
        outline: "none",
		"&:hover": {
			textDecoration: "none",
			color: "#fff",
		},
        "&:focus-visible": {
            textDecoration: "underline",
        },
    },
});

export default function Header({title, link}) {
    const   theme = useTheme(),
            classes = useStyles(theme);

	return (
        <div className={classes.header}>
            <Container className={classes.container}>
                <div className={classes.row}>
                    <a className={classes.link} target="_blank" rel="noreferrer" href={link}>
                        <LogoIcon/> 
                        <span>{title}</span>
                    </a>
                </div>	
            </Container>	
        </div>
	);
}