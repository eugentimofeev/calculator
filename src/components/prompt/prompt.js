import React, { Component } from "react";
import { Button } from "@material-ui/core/";
import { withStyles  } from "@material-ui/core/styles";

const styles = {
    wrapRight: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        marginLeft: "5px"
    },
    wrapLeft: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        marginRight: "5px"
    },
    wrapRightCheck: {
        position: "relative",
        display: "flex",
    },
    wrapLeftCheck: {
        position: "relative",
        display: "flex",
    },
    btn: {
        height: "25px",
        minWidth: "25px",
        padding: "0",

    },
    overlayShow: {
        display: "block",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex: 100
    },
    overlayHide: {
        display: "none",
    },
    promptShowRight: {
        display: "block",
        position: "absolute",
        left: "75px",
        minHeight: "200px",
        minWidth: "200px",
        padding: "10px",
        backgroundColor: "white",
        border: "2px solid #009189",
        borderRadius: "5px",
        zIndex: 101,
        "&::before": {
            display: "block",
            content: '""',
            position: "absolute",
            left: "-66px",
            top: "50%",
            transform: "translateY(-50%)",
            border: "22px solid transparent",
            borderRight: "42px solid #009189"
        },
        "&::after": {
            display: "block",
            content: '""',
            position: "absolute",
            left: "-60px",
            top: "50%",
            transform: "translateY(-50%)",
            border: "20px solid transparent",
            borderRight: "40px solid white"
        }
    },
    promptShowLeft: {
        display: "block",
        position: "absolute",
        right: "75px",
        minHeight: "200px",
        minWidth: "200px",
        padding: "10px",
        backgroundColor: "white",
        border: "2px solid #009189",
        borderRadius: "5px",
        zIndex: 101,
        "&::before": {
            display: "block",
            content: '""',
            position: "absolute",
            right: "-66px",
            top: "50%",
            transform: "translateY(-50%)",
            border: "22px solid transparent",
            borderLeft: "42px solid #009189"
        },
        "&::after": {
            display: "block",
            content: '""',
            position: "absolute",
            right: "-60px",
            top: "50%",
            transform: "translateY(-50%)",
            border: "20px solid transparent",
            borderLeft: "40px solid white"
        }
    },
    promptShowTop: {
        display: "block",
        position: "absolute",
        bottom: "125px",
        right: "-88px",
        minHeight: "200px",
        minWidth: "200px",
        padding: "10px",
        backgroundColor: "white",
        border: "2px solid #009189",
        borderRadius: "5px",
        zIndex: 101,
        "&::before": {
            display: "block",
            content: '""',
            position: "absolute",
            bottom: "-66px",
            right: "50%",
            transform: "translateX(50%)",
            border: "22px solid transparent",
            borderTop: "42px solid #009189"
        },
        "&::after": {
            display: "block",
            content: '""',
            position: "absolute",
            bottom: "-60px",
            right: "50%",
            transform: "translateX(50%)",
            border: "20px solid transparent",
            borderTop: "40px solid white"
        }
    },
    promptHide: {
        display: "none",
    }
}

class Prompt extends Component {
    state = {hide: true}
    
    handleChange = () => {
        this.setState(state => ({
            hide: !state.hide
        }));
    }

    render() {
        const { classes, promptText, position } = this.props;

        let btnPosition, promptPosition;

        switch(position) {
            case "right": 
                btnPosition = classes.wrapRight;
                promptPosition = classes.promptShowRight;
                break;
            case "left":
                btnPosition = classes.wrapLeft;
                promptPosition = classes.promptShowLeft;
                break;
            case "rightCheck": 
                btnPosition = classes.wrapRightCheck;
                promptPosition = classes.promptShowTop;
                break;
            case "leftCheck":
                btnPosition = classes.wrapLeftCheck;
                promptPosition = classes.promptShowTop;
                break;
            default: 
                break;
        }

        return (
            <div className={btnPosition}>
                <Button
                    className={classes.btn}
                    variant="outlined"
                    color="primary"
                    onClick={this.handleChange}
                >?</Button>
                <div className={this.state.hide ? classes.overlayHide : classes.overlayShow} onClick={this.handleChange}></div>
                <div className={this.state.hide ? classes.promptHide : promptPosition}>{promptText}</div>
                
                
            </div>
        );
    }
}

export default withStyles(styles)(Prompt);