import React, {Component} from "react";
import { Grid, Button } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import AnimatedNumber from "animated-number-react";

const styles = {
	toUpperCase: {
		textTransform: "uppercase",
	},
	salaryTitle: {
		fontSize: 20,
		marginTop: 10
	},
	salary: {
		fontSize: "20px",
	},
	salaryAdditional: {
		fontSize: 15,
	},
	salaryBtn: {
		margin: "10px 0 10px 0"
	},
	textAlignCenter: {
		textAlign: "center",
	},
	column: {
		flexDirection: 'column',
		textAlign: "center",
	},
	"@media (max-width: 576px)": {
		salaryTitle: {
			fontSize: 18
		},
		salary: {
			fontSize: 18
		},
		salaryAdditional: {
			fontSize: 13
		},
	}
}

class Salary extends Component {
	salaryFormatValue = value => `${Number(value).toFixed(2)} РУБ`;
	otherFormatValue = value => Number(value).toFixed();

	render() {

		const { classes } = this.props;

		return (
			<Grid
				container
				direction="column"
				alignItems="center"
				className={classes.toUpperCase}
			>
				<div className={classes.salaryTitle}>Ваша зарплата</div>
				<AnimatedNumber
					className={classes.salary}
					value={this.props.calcSalary}
					formatValue={this.salaryFormatValue}
					duration="350"
				/>
				<Grid container spacing={2} className={classes.salaryAdditional}>
					<Grid container justify="center" className={classes.column} item md={3} xs={6}>
						<div className={classes.textAlignCenter}>Кол. часов по графику </div>
						<AnimatedNumber
							value={this.props.calcGraphHours}
							formatValue={this.otherFormatValue}
							duration="350"
						/>
					</Grid>
					<Grid container justify="center" className={classes.column} item md={3} xs={6}>
						<div className={classes.textAlignCenter}>Текущее кол. часов </div>
						<AnimatedNumber
							value={this.props.calcTrueHours}
							formatValue={this.otherFormatValue}
							duration="350"
						/>
					</Grid> 
					<Grid container justify="center" className={classes.column} item md={3} xs={6}>
						<div className={classes.textAlignCenter}>Кол. часов по доп. ставке </div>
						<AnimatedNumber
							value={this.props.calcAdditionalHours}
							formatValue={this.otherFormatValue}
							duration="350"
						/>
					</Grid>
					<Grid container justify="center" className={classes.column} item md={3} xs={6}>
						<div className={classes.textAlignCenter}>Продажи </div>
						<AnimatedNumber
							value={this.props.calcSales}
							formatValue={this.otherFormatValue}
							duration="350"
						/>
					</Grid>
				</Grid>
				<Button
					className={classes.salaryBtn}
					variant="outlined"
					color="primary"
					onClick={this.props.resetSate}
				>
					Сброс настроек
				</Button>
			</Grid>
		);
	}
};

export default withStyles(styles)(Salary);
