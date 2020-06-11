import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";

const mainColor = "#009189";

const useStyles = makeStyles({
  header: {
    width: "100%",
    height: "60px",
    backgroundColor: "#009189",
    padding: "5px 0 0 0",
    color: "white",
    fontSize: "20px"
  },
  title: {
    paddingTop: "8px"
  },
  about: {
    paddingTop: "8px"
  },
  logo: {
    position: "relative",
    display: "block",
    background: mainColor,
    width: "120px",
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
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Container>
        <Grid container spacing={0}>
          <Grid container justify="flex-start" item xs={6}>
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
            <div className={classes.title}>
              Калькулятор ЗП для сотрудников СЗК
            </div>
          </Grid>
          <Grid container justify="flex-end" item xs={6}>
            <div className={classes.about}>О сайте</div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Header;
