import React from "react";
import { Grid, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  salaryTitle: {
    fontSize: "25px"
  },
  salary: {
    fontSize: "20px"
  },
  salaryAdditional: {
    fontSize: "20px"
  },
  salaryBtn: {
    margin: "10px 0 10px 0"
  }
});

const Salary = props => {
  const classes = useStyles();
  return (
    <Grid container direction="column" alignItems="center">
      <div className={classes.salaryTitle}>Ваша зарплата</div>
      <div className={classes.salary}>{props.calcSalary}</div>
      <Grid container spacing={5} className={classes.salaryAdditional}>
        <Grid container justify="center" item xs={3}>
          <div>Кол. часов по графику: {props.calcGraphHours}</div>
        </Grid>
        <Grid container justify="center" item xs={3}>
          <div>Текущее кол. часов: {props.calcTrueHours}</div>
        </Grid>
        <Grid container justify="center" item xs={3}>
          <div>Кол. часов по доп. ставке: {props.calcAdditionalHours}</div>
        </Grid>
        <Grid container justify="center" item xs={3}>
          <div>Продажи: {props.calcSales}</div>
        </Grid>
      </Grid>
      <Button
        className={classes.salaryBtn}
        variant="outlined"
        color="primary"
        onClick={props.resetSate}
      >
        Сброс настроек
      </Button>
    </Grid>
  );
};

export default Salary;
