import React, {Component} from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import Logo from "../logo/logo"

const mainColor = "#009189";

const styles = {
  header: {
    width: "100%",
    height: "60px",
    backgroundColor: "#009189",
    padding: "5px 0 0 0",
    color: "white",
    fontSize: "20px"
  },
  title: {
    paddingTop: "8px",
    zIndex: 21,
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
    transition: "0.5s ease"
  },
  showAboutTrue: {
    display: "block",
    position: "fixed",
    top: 0,
    right: 0,
    borderRadius: "50%",
    width: "150vw",
    height: "150vw",
    transform: "translate(25%, -25%)",
    backgroundColor: `${mainColor}`,
    zIndex: 20,
    transition: "0.5s ease"
  },
  aboutTextShow: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    zIndex: 21,
    height: 47,
    width: 75,
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
      transition: "0.5s ease",
     
    },
    "& span:nth-child(2)": {
      display: "block",
      textAlign: "center",
      transform: "scaleX(1)",
      transition: "0.5s ease",
   
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
      transition: "0.5s ease",
    
    },
  },
  aboutTextHide: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    zIndex: 21,
    height: 47,
    width: 75,
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
      transition: "0.5s ease",
     
    },
    "& span:nth-child(2)": {
      display: "block",
      textAlign: "center",
      transform: "scaleX(0) rotate(360deg)",
      transition: "0.5s ease",
     
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
      transition: "0.5s ease",
   
    },
  },
};

class Header extends Component {

  state = {showAbout: false}

  handleChange = () => {
    this.setState(state => ({
      showAbout: !state.showAbout
    }));
}
  render () {

    const {classes} = this.props;

    return (
      <div className={classes.header}>
        <Container>
          <Grid container spacing={0}>
            <Grid container justify="flex-start" item xs={6}>
              <Logo/>
              <div className={classes.title}>
                Калькулятор ЗП для сотрудников СЗК
              </div>
            </Grid>
            <Grid container justify="flex-end" item xs={6}>


              <div className={this.state.showAbout ? classes.aboutTextHide : classes.aboutTextShow}
                onClick={this.handleChange}
              >
                <span></span>
                <span>О сайте</span>
                <span></span>
              </div>
              <div className={this.state.showAbout ? classes.showAboutTrue : classes.showAboutFalse } />

              
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
};

export default withStyles(styles)(Header);
