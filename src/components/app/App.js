import React, { Component } from "react";
import { Grid, Container, Tabs, Tab, Fade } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import Prompt from "../prompt/prompt";

import Header from "../header/header";
import Choises from "../select/select";
import Input from "../input/input";
import Check from "../check/check";
import Salary from "../salary/salary";
import TabPanel from "../tabPanel/tabPanel";

const styles = {
	"*:focus": {
		outline: "none"
	},
  	marginB: {
		marginBottom: 20
 	}
};

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#0b949c" 
		},
		secondary: {
			main: "#00C35A"
		}
	}
});

const initialState = {
	activeTab: 0,

	rating: "",
	assessment: "",
	rank: "",

	hours: "",
	days: "",

	removedHours: "",
	addedHours: "",

	base: false,
	newbies: false,
	night: false,

	routers: "",
	consoles: "",
	tvPackages: "",
	video: "",

	tariffs: "",
	warranties: "",
	autopayments: "",

	salesDouble: false,
	salesFine: false
};

class App extends Component {
	state = initialState;

	tabsChange = (e, newValue) => {
		this.setState({ activeTab: newValue });
	};

	onValueChange = (value, name) => {
		this.setState({ [name]: value });
	};

	calcSalary() {
		let rate;

		this.state.night ? rate = 125 : rate = 103;

		let base = rate * (this.calcTrueHours() - this.calcAdditionalHours());

		base +=
			+this.state.rating +
			this.calcAdditionalHours() * 1.5 * rate +
			base * (this.state.assessment + +this.state.rank) +
			base * ((this.state.base ? 0.1 : 0) + +this.state.rank) +
			base * (this.state.newbies ? 0.05 : 0) +
			this.calcSales();

		return base;
	}

	calcGraphHours() {
		return this.state.days * this.state.hours;
	}

	calcTrueHours() {
		return (
			this.calcGraphHours() - this.state.removedHours + +this.state.addedHours
		);
	}

	calcAdditionalHours() {
		const diff = this.calcTrueHours() - this.calcGraphHours();

		if (diff > 0) return diff;
		else return 0;
	}

	calcSales() {
		let sales =
			this.state.routers * 100 +
			this.state.consoles * 200 +
			this.state.tvPackages * 200 +
			this.state.video * 200 +
			this.state.tariffs * 50 +
			this.state.warranties * 100 +
			this.state.autopayments * 50;

		if (this.state.salesDouble) {
			sales *= 2;
		} else {
			if (this.state.salesFine) sales -= 1000;
		}

		return sales;
	}

	resetSate = () => {
		const { activeTab } = this.state;

		this.setState(initialState);

		this.setState({ activeTab: activeTab });
	};

	render() {
		const { classes } = this.props;

		return (
			<ThemeProvider theme={theme}>
				<Header />
				<Container>
					<Tabs
						value={this.state.activeTab}
						onChange={this.tabsChange}
						indicatorColor="primary"
						textColor="primary"
						variant={document.body.clientWidth > 599 ? "standard" : "fullWidth"}
						centered
					>
						<Tab label="Основа" />
						<Tab label="Продажи" />
					</Tabs>

					<Salary
						calcSalary={this.calcSalary()}
						calcGraphHours={this.calcGraphHours()}
						calcTrueHours={this.calcTrueHours()}
						calcAdditionalHours={this.calcAdditionalHours()}
						calcSales={this.calcSales()}
						resetSate={this.resetSate}
					/>

					<TabPanel value={this.state.activeTab} index={0}>
						<Fade in={this.state.activeTab === 0 ? true : false}>
							<div>
								<Grid container spacing={0}>
									<Grid
										className={classes.marginB}
										container
										justify="center"
										item
										xs={12}
										sm={6}
									>
										<Input
											name="hours"
											label="Кол. часов по графику"
											text="Макс. значение - 24"
											value={this.state.hours}
											onInputChange={this.onValueChange}
											maxValue={24}
										/>
										<Prompt
											text="У каждого инженера есть определенное кол. часов в смену, 
												которые указаны в графике. Это то кол. часов, которые Вы 
												должны отработать за смену. Общее кол. часов вычисляется путем перемножения
												количества смен на часы по графику. Общая сумма за часы - общ. кол. часов
												умножается на ставку."
											link="https://karelia.pro/work/corpnews/?module=sector7"
										/>
									</Grid>
									<Grid
										className={classes.marginB}
										container
										justify="center"
										item
										xs={12}
										sm={6}
									>
											<Prompt
												text="У каждого инженера есть определенной кол. смен, 
													которые указаны в графике. Это то кол. смен, которые Вы 
													должны отработать. Общее кол. часов вычисляется путем перемножения
													смен на часы по графику. Общая сумма за часы - общ. кол. часов
													умножается на ставку."
												link="https://karelia.pro/work/corpnews/?module=sector7"
											/>
										<Input
											name="days"
											label="Кол. смен по графику"
											text="Макс. значение - 31"
											value={this.state.days}
											onInputChange={this.onValueChange}
											maxValue={31}
										/>
									</Grid>
									<Grid
										className={classes.marginB}
										container
										justify="center"
										item
										xs={12}
										sm={6}
									>
										<Input
											name="removedHours"
											label="Убрать часы"
											text="Макс. значение - 180"
											value={this.state.removedHours}
											maxValue={180}
											onInputChange={this.onValueChange}
										/>
											<Prompt
												text="Если у Вас были отгулы, или Вы закончили смену 
													раньше графика, то используйте данный пункт,
													чтобы убрать часы."
												link="https://karelia.pro/work/corpnews/?module=sector7"
											/>
									</Grid>
									<Grid
										className={classes.marginB}
										container
										justify="center"
										item
										xs={12}
										sm={6}
									>
										<Prompt
											text="Если у Вас есть доп. смены, или Вы задержались на смене
												, то добавьте часы в данном поле, чтобы увеличить ЗП! Если Вы отработали
												все часы по графику, то все доп. часы будут идти по ставке x1.5!"
											link="https://karelia.pro/work/corpnews/?module=sector7"
										/>
										<Input
											name="addedHours"
											label="Добавить часы"
											text="Макс. значение - 180"
											value={this.state.addedHours}
											maxValue={180}
											onInputChange={this.onValueChange}
										/>
									</Grid>
									<Grid
										className={classes.marginB}
										container
										justify="center"
										item
										xs={12}
										sm={6}
										md={4}
									>
										<Choises
											name="rating"
											label="Статус"
											text="Лучшие/Хорошие/Остальные"
											value={this.state.rating}
											values={{
												Остальные: 0,
												Хорошие: 3000,
												Лучшие: 8000
											}}
											onSelectChange={this.onValueChange}
										/>
										<Prompt
											text="Доп. премия за качество работы за месяц. Если Вы попали в лучших, то
												получите 8000р. к ЗП! Хорошие - 3000р. Остальные - без премии. Следите за 
												своей оценкой, не получайте минусов в рейтинг для достижения лучшего результата."
											link="https://karelia.pro/work/corpnews/?module=sector7"	
										/>
									</Grid>
									<Grid
										className={classes.marginB}
										container
										justify="center"
										item
										xs={12}
										sm={6}
										md={4}
									>
										<Choises
											name="assessment"
											label="Оценка"
											text="Оценка за звонки"
											value={this.state.assessment}
											values={{
												"Меньше 4.7": 0,
												"Больше-равно 4.7": 0.1,
												"Больше-равно 4.9": 0.2
											}}
											onSelectChange={this.onValueChange}
										/>
										<Prompt
											text="Ваша оценка за звонки влияет на процент, который Вы получите к ЗП
												от общей суммы за часы. Если оценка Больше-равна 4.9 - плюс 20%. Больше-равна 4.7
												- 10%. Меньше 4.7 - без премии за оценку."
											link="https://karelia.pro/work/corpnews/?module=sector7"
										/>
									</Grid>
									<Grid
										className={classes.marginB}
										container
										justify="center"
										item
										xs={12}
										md={4}
									>
										<Prompt
											text="Рейтинговая система влияет на процент, который Вы получаете за 
												работу с базой и оценку за звонки. Лучший из лучших - плюс 7% к бонусам. 
												Эксперт - 5%.. Опытный - 2%. Специались и ниже - 
												без доп. бонуса. К примеру, специалист получает 20% за звонки, если его
												оценка выше 4.9, а эксперт получит 25% за туже оценку."
											link="https://karelia.pro/work/wiki/%D0%A0%D0%B5%D0%B9%D1%82%D0%B8%D0%BD%D0%B3_%D0%B8_%D0%B4%D0%BE%D1%81%D1%82%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F"											
										/>
										<Choises
											name="rank"
											label="Ранг"
											text="Новая рейтинговая система"
											value={this.state.rank}
											values={{
												Никто: null,
												Специалист: 0,
												Опытный: 0.02,
												Эксперт: 0.05,
												"Лучший из лучших": 0.07
											}}
											onSelectChange={this.onValueChange}
										/>
									</Grid>
									<Grid container justify="center" item sm={6} md={4}>
										<Check
											name="base"
											label="Работа с базой"
											onCheckboxChange={this.onValueChange}
											value={this.state.base}
										/>
										<Prompt
											text="Выполнение нормы решения записей дает Вам бонус к ЗП в размере
												10% от сумму за часы. Инженеру необходимо решать минимум 2 записи в час.
												Решайте больше записей - помогайте дежурному!"
											link="https://karelia.pro/work/corpnews/?module=sector7"
										/>
									</Grid>
									<Grid container justify="center" item sm={6} md={4}>
										<Check
											name="night"
											label="Ночник"
											onCheckboxChange={this.onValueChange}
											value={this.state.night}
										/>
										<Prompt
											text="У ночника ставка за часы больше. Это сделано для того, чтобы 
												скомпенсировать разницу между  работой ночью и днем. Ставка без экзамена
												по сетям - 110 рублей в час. С экзаменом - 125 рублей."
											link="https://karelia.pro/work/corpnews/?module=sector7"	
										/>
									</Grid>
									<Grid container justify="center" item sm={12} md={4}>
									  	<Prompt
											text="Если Вы опытный инженер, то, возможно, Вы удостоились чести обучать 
												новичка. За обучение и помощь новичка полагается премия - 5% от суммы за часы!"
											link="https://karelia.pro/work/corpnews/?module=sector7"
										/>
										<Check
											name="newbies"
											label="Помощь новичкам"
											onCheckboxChange={this.onValueChange}
											value={this.state.newbies}
										/>
									</Grid>
								</Grid>
							</div>
						</Fade>
					</TabPanel>

					<TabPanel value={this.state.activeTab} index={1}>
						<Fade in={this.state.activeTab === 1 ? true : false}>
							<div>
								<Grid container spacing={0}>
									<Grid
										className={classes.marginB}
										container
										justify="center"
										item
										xs={12}
										sm={6}
									>
										<Input
											name="routers"
											label="Роутеры"
											text="100р/шт"
											onInputChange={this.onValueChange}
											value={this.state.routers}
										/>
									</Grid>
									<Grid
										className={classes.marginB}
										container
										justify="center"
										item
										xs={12}
										sm={6}
									>
										<Input
											name="warranties"
											label="Доп. гарантии"
											text="100р/шт"
											onInputChange={this.onValueChange}
											value={this.state.warranties}
										/>
									</Grid>
									<Grid
										className={classes.marginB}
										container
										justify="center"
										item
										xs={12}
										sm={4}
									>
										<Input
											name="consoles"
											label="Приставки"
											text="200р/шт"
											onInputChange={this.onValueChange}
											value={this.state.consoles}
										/>
									</Grid>
									<Grid
										className={classes.marginB}
										container
										justify="center"
										item
										xs={12}
										sm={4}
									>
										<Input
											name="tvPackages"
											label="ТВ пакеты"
											text="200р/шт"
											onInputChange={this.onValueChange}
											value={this.state.tvPackages}
										/>
									</Grid>
									<Grid
										className={classes.marginB}
										container
										justify="center"
										item
										xs={12}
										sm={4}
									>
										<Input
											name="video"
											label="Видеонаблюдение"
											text="200р/шт"
											onInputChange={this.onValueChange}
											value={this.state.video}
										/>
									</Grid>
									<Grid
										className={classes.marginB}
										container
										justify="center"
										item
										xs={12}
										sm={6}
									>
										<Input
											name="tariffs"
											label="Повышение тарифов"
											text="50р/шт"
											onInputChange={this.onValueChange}
											value={this.state.tariffs}
										/>
									</Grid>
									<Grid
										className={classes.marginB}
										container
										justify="center"
										item
										xs={12}
										sm={6}
									>
										<Input
											name="autopayments"
											label="Автоплатежи"
											text="50р/шт"
											onInputChange={this.onValueChange}
											value={this.state.autopayments}
										/>
									</Grid>
									<Grid container justify="center" item xs={12} sm={6}>
										<Check
											name="salesDouble"
											label="Норма для удвоения"
											onCheckboxChange={this.onValueChange}
											value={this.state.salesDouble}
											disabled={this.state.salesFine ? true : false}
										/>
										<Prompt
											text="На каждый месяц есть норма по продажам и норма для 
												удвоения. Если Вы выполнили норму продаж для удвоения, 
												то сумма за все ваши продажи удваивается!"
											link="https://karelia.pro/work/wiki/%D0%90%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B5_%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D0%B8_%D0%A1%D0%97%D0%9A"
									
										/>
									</Grid>
									<Grid container justify="center" item xs={12} sm={6}>
										<Prompt
											text="На каждый месяц есть норма по продажам и норма для 
												удвоения. Если Вы не выполнили норму, то получаете штраф в 
												1000р к ЗП."
											link="https://karelia.pro/work/wiki/%D0%90%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B5_%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D0%B8_%D0%A1%D0%97%D0%9A"
									
										/>
										<Check
											name="salesFine"
											label="Инд. штраф 1000р"
											onCheckboxChange={this.onValueChange}
											value={this.state.salesFine}
											disabled={this.state.salesDouble ? true : false}
										/>
									</Grid>
								</Grid>
							</div>
						</Fade>
					</TabPanel>
				</Container>
			</ThemeProvider>
		);
	}
}
export default withStyles(styles)(App);
