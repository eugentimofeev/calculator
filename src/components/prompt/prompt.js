import React, { Component } from "react";
import { Button, Popover } from "@material-ui/core/";
import { withStyles  } from "@material-ui/core/styles";

const styles = {
    wpapNotTop: {
        display: "flex",
        alignItems: "center",
        margin: "0 16px 0 16px"
    },
    wpapTop: {
        display: "flex",
        alignItems: "top"
    },
    btn: {
        height: "25px",
        minWidth: "25px",
        padding: "0",

    },
}

class Prompt extends Component {
    state = {anchorEl: null}

    handleClick = (event) => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null})
    };

    render() {
        const { classes, promptText, position } = this.props;
        const open = Boolean(this.state.anchorEl);
        const id = open ? 'simple-popover' : undefined;

        let secondPosition;

        switch(position) {
            case "right": 
                secondPosition = "left";
                break;
            case "left":
                secondPosition = "right";
                break;
            case "top": 
                secondPosition = "center";
                break;
            default: 
                break;
        }

        return (
            <div className={position === "top" ? classes.wpapTop : classes.wpapNotTop}>
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
                        vertical: position === "top" ? position : 'center',
                        horizontal: position === "top" ? 'center' : position,
                    }}
                    transformOrigin={{
                        vertical: position === "top" ? 'bottom' :'center',
                        horizontal: secondPosition,
                    }}
                >
                    <div>{promptText}</div>
                </Popover>
            </div>
        )
    }
}

export default withStyles(styles)(Prompt);