import React, {Component} from 'react';
import {Grid, Container, Tabs, Tab} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../header/header';
import Footer from '../footer/footer';
import Choises from '../select/select';
import Input from '../input/input';
import Check from '../check/check';
import Salary from '../salary/salary';
import TabPanel from '../tabPanel/tabPanel';


import './app.css';

const initialState = {
	activeTab: 0,

	rating: '',
	assessment: '',
	rank: '',

	hours: '',
	days: '',

	removedHours: '',
	addedHours: '',

	exam: false,
	base: false,
	newbies: false,
	night: false,

	routers: '',
	consoles: '',
	tvPackages: '',

	tariffs: '',
	warranties: '',
	autopayments: '',

	salesDouble: false,
	salesAllFine: false,
	salesFine: false
}

export default class App extends Component {

	state = initialState;
		
	tabsChange = (e, newValue) => {

		this.setState({activeTab: newValue})
	};	

	onValueChange = (value, name) => {
		this.setState({ [name]: value });
	};

	calcSalary() {
		let rate;

		if (this.state.night) {
			if (this.state.exam) rate = 125;
			else rate = 110;
		} else {
			if (this.state.exam) rate = 103;
			else rate = 95;
		}
		
		let base = rate * (this.calcTrueHours() - this.calcAdditionalHours());
		
		base += +this.state.rating +
			this.calcAdditionalHours() * 1.5 * rate +
			base * (this.state.assessment + +this.state.rank) +
			base * ((this.state.base ? 0.1 : 0) + +this.state.rank) +
			base * (this.state.newbies ? 0.05 : 0) +
			this.calcSales();

		return Math.round(base * 100) / 100;
	}

	calcGraphHours() {
		return this.state.days * this.state.hours;
	}

	calcTrueHours() {
		return this.calcGraphHours() - this.state.removedHours + this.state.addedHours;
	}

	calcAdditionalHours() {
		const diff = this.calcTrueHours() - this.calcGraphHours();
		if (diff > 0) return diff;
		else return 0;
	}

	calcSales() {
		let sales = this.state.routers * 100 + this.state.consoles * 100 + this.state.tvPackages * 100 + 
					this.state.tariffs * 50 + this.state.warranties *100 + this.state.autopayments * 50;

		if (this.state.salesDouble) {
			sales *= 2;
		} else {
			if (this.state.salesFine) sales -= 500;
		}

        if (this.state.salesAllFine) sales -= sales * 0.1;
        
        return sales
	}

	resetSate = () => {
		const {activeTab} = this.state;

		this.setState(initialState);

		this.setState({activeTab: activeTab});
	};

	render() {

		return (
			<>
				<Header/>
				<Container >
					<Tabs
						value={this.state.activeTab}
						onChange={this.tabsChange}
						indicatorColor="primary"
						textColor="primary"
						centered
					>
						<Tab label="Главные пункты" />
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

					<TabPanel
						value={this.state.activeTab}
						index={0}
					>
						<Grid container spacing={5}>
							<Grid container justify='center' item xs={4}>
								<Choises
									name="rating"
									label='Статус'
									text='Лучшие/Хорошие/Остальные'
									value={this.state.rating}
									values={{
										'Остальные': 0,
										'Хорошие': 3000,
										'Лучшие': 8000
									}}
									onSelectChange={this.onValueChange}	 
								/>
							</Grid>
							<Grid container justify='center' item xs={4}>
								<Choises
									name="assessment"
									label='Оценка'
									text='Оценка за звонки'
									value={this.state.assessment}
									values={{
										'Меньше 4.7': 0,			// 0
										'Больше-равно 4.7': 0.1,	//10%
										'Больше-равно 4.9': 0.2		//20%
									}}
									onSelectChange={this.onValueChange}
								/>
							</Grid>
							<Grid container justify='center' item xs={4}>
								<Choises
									name="rank"
									label='Рейтинг'
									text='Новая рейтинговая система'
									value={this.state.rank}
									values={{						// к премии за решение записей и оценку по звонкам
										'Специалист или ниже': 0,	//+0%
										'Опытный': 0.02,			//+2%
										'Эксперт': 0.05,			//+5%
										'Лучший из лучших': 0.07	//+7%
									}}
									onSelectChange={this.onValueChange}
								/>
							</Grid>
						</Grid>
					
						<Grid container spacing={5}>
							<Grid container justify='center' item xs={6}>
								<Input
									name="hours"
									label='Кол. часов по графику'
									text='Можно использовать колесико мыши'
									value={this.state.hours}
									onInputChange={this.onValueChange}
								/>
							</Grid>
							<Grid container justify='center' item xs={6}>
								<Input
									name="days"
									label='Кол. смен по графику'
									text='Можно использовать колесико мыши'
									value={this.state.days}
									onInputChange={this.onValueChange}
								/>
							</Grid>
						</Grid>

						<Grid container spacing={5}>
							<Grid container justify='center' item xs={6}>
								<Input
									name="removedHours"
									label='Убрать часы'
									text='Можно использовать колесико мыши'
									value={this.state.removedHours}
									onInputChange={this.onValueChange}
								/>
							</Grid>
							<Grid container justify='center' item xs={6}>
								<Input
									name="addedHours"
									label='Добавить часы(доп. смены)'
									text='Можно использовать колесико мыши'
									value={this.state.addedHours}
									onInputChange={this.onValueChange}
								/>
							</Grid>
						</Grid>

						<Grid container spacing={5}>
				
							<Grid container justify='center' item xs={3}>
								<Check
									name="exam"
									label='Экзамен по сетям'
									onCheckboxChange={this.onValueChange}
									value={this.state.exam}
								/>
							</Grid>
							<Grid container justify='center' item xs={3}>
								<Check
									name="base"
									label='Работа с базой'
									onCheckboxChange={this.onValueChange}
									value={this.state.base}
								/>
							</Grid>
							<Grid container justify='center' item xs={3}>
								<Check
									name="newbies"
									label='Помощь новичкам'
									onCheckboxChange={this.onValueChange}
									value={this.state.newbies}
								/>
							</Grid>
							<Grid container justify='center' item xs={3}>
								<Check
									name="night"
									label='Ночник'
									onCheckboxChange={this.onValueChange}
									value={this.state.night}
								/>
							</Grid>
						</Grid>
					</TabPanel>

					<TabPanel
						value={this.state.activeTab}
						index={1}
					>
						<Grid container spacing={5}>
							<Grid container justify='center' item xs={4}>
								<Input
									name="routers"
									label='Роутеры'
									text='100р/шт'
									onInputChange={this.onValueChange}
									value={this.state.routers}
								/>
							</Grid>
							<Grid container justify='center' item xs={4}>
								<Input
									name="consoles"
									label='Приставки'
									text='100р/шт'
									onInputChange={this.onValueChange}
									value={this.state.consoles}
								/>
							</Grid>
							<Grid container justify='center' item xs={4}>
								<Input
									name="tvPackages"
									label='ТВ пакеты'
									text='100р/шт'	
									onInputChange={this.onValueChange}
									value={this.state.tvPackages}
								/>	
							</Grid>
						</Grid>

						<Grid container spacing={5}>
							<Grid container justify='center' item xs={4}>
								<Input
									name="tariffs"
									label='Повышение тарифов'
									text='50р/шт'
									onInputChange={this.onValueChange}
									value={this.state.tariffs}
								/>
							</Grid>
							<Grid container justify='center' item xs={4}>
								<Input
									name="warranties"
									label='Доп. гарантии'
									text='100р/шт'
									onInputChange={this.onValueChange}
									value={this.state.warranties}
								/>
							</Grid>
							<Grid container justify='center' item xs={4}>
								<Input
									name="autopayments"
									label='Автоплатежи'
									text='50р/шт'
									onInputChange={this.onValueChange}	
									value={this.state.autopayments}
								/>	
							</Grid>
						</Grid>

						<Grid container spacing={5}>
							<Grid container justify='center' item xs={4}>
								<Check
									name="salesDouble"
									label='Норма для удвоения'
									onCheckboxChange={this.onValueChange}
									value={this.state.salesDouble}
								
								/>
							</Grid>
							<Grid container justify='center' item xs={4}>
								<Check
									name="salesAllFine"
									label='Колл. штраф 10%'
									onCheckboxChange={this.onValueChange}
									value={this.state.salesAllFine}
								/>
							</Grid>
							<Grid container justify='center' item xs={4}>
								<Check
									name="salesFine"
									label='Инд. штраф 500р'
									onCheckboxChange={this.onValueChange}
									value={this.state.salesFine}
								/>
							</Grid>
						</Grid>				
					</TabPanel>
				</Container>

				<Footer/>
			</>
		);
	}
}  
