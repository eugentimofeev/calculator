import React from "react";
import { Grid, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	toUpperCase: {
		textTransform: "uppercase",
		fontFamily: "Roboto"
	},
	salaryTitle: {
		fontSize: 20,
		marginTop: 10
	},
	salary: {
		fontSize: "20px"
	},
	salaryAdditional: {
		fontSize: 17,
		marginTop: 10
	},
	salaryBtn: {
		margin: "10px 0 10px 0"
	},
	"@media (max-width: 576px)": {
		salaryTitle: {
			fontSize: 18
		},
		salary: {
			fontSize: 18
		},
		salaryAdditional: {
			fontSize: 14
		}
	}
});

const Salary = props => {
	  const classes = useStyles();
	  
	return (
		<Grid
			container
			direction="column"
			alignItems="center"
			className={classes.toUpperCase}
		>
			<div className={classes.salaryTitle}>Ваша зарплата</div>
			<div className={classes.salary}>{props.calcSalary}</div>
			<Grid container spacing={2} className={classes.salaryAdditional}>
				<Grid container justify="center" item xs={6} md={3}>
					<div>Кол. часов по графику: {props.calcGraphHours}</div>
				</Grid>
				<Grid container justify="center" item xs={6} md={3}>
					<div>Текущее кол. часов: {props.calcTrueHours}</div>
				</Grid>
				<Grid container justify="center" item xs={6} md={3}>
					<div>Кол. часов по доп. ставке: {props.calcAdditionalHours}</div>
				</Grid>
				<Grid container justify="center" item xs={6} md={3}>
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
