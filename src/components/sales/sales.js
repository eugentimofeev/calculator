import React, {Component} from 'react';
import {Grid} from '@material-ui/core/';

import Input from '../input/input';
import Check from '../check/check';

export default class Sales extends Component {

	state = {
		routers: 0,
		consoles: 0,
		tvPackages: 0,
		tariffs: 0,
		warranties: 0,
		autopayments: 0,
		salesDouble: false,
		salesAllFine: false,
		salesFine: false
    }   
 
    calculate() {
		let sales = this.state.routers + this.state.consoles + this.state.tvPackages + this.state.tariffs + this.state.warranties + this.state.autopayments;

		if (this.state.salesDouble) {
			sales *= 2;
		} else {
			if (this.state.salesFine) sales -= 500;
		}

        if (this.state.salesAllFine) sales -= sales * 0.1;
        
        return sales
	}

	routersChange = (value) => {
		this.setState({
			routers: value * 100
		})
	}

	consolesChange = (value) => {
		this.setState({
			consoles: value * 100
		})
	}

	tvPackagesChange = (value) => {
		this.setState({
			tvPackages: value * 100
		})
	}

	tariffsChange = (value) => {
		this.setState({
			tariffs: value * 50
		})
	}

	warrantiesChange = (value) => {
		this.setState({
			warranties: value * 100
		})
	}

	autopaymentsChange = (value) => {
		this.setState({
			autopayments: value * 50
		})
	}

	salesDoubleChange = (value) => {
		this.setState({salesDouble: value})
	}

	salesAllFineChange = (value) => {
		this.setState({salesAllFine: value})
	}

	salesFineChange = (value) => {
        this.setState({salesFine: value})
	}

    blockChange = () => {
        
        this.props.onSalesChange(this.calculate());
    }

    
    
    render() {
        return (
            <div
                asd={this.blockChange}
            >
                <Grid container spacing={5}>
                    <Grid container justify='center' item xs={4}>
                        <Input
                            label='Роутеры'
                            text='100р/шт'
                            onInputChange={this.routersChange}
                        />
                    </Grid>
                    <Grid container justify='center' item xs={4}>
                        <Input
                            label='Приставки'
                            text='100р/шт'
                            onInputChange={this.consolesChange}
                        />
                    </Grid>
                    <Grid container justify='center' item xs={4}>
                        <Input
                            label='ТВ пакеты'
                            text='100р/шт'	
                            onInputChange={this.tvPackagesChange}
                        />	
                    </Grid>
				</Grid>

                <Grid container spacing={5}>
                    <Grid container justify='center' item xs={4}>
                        <Input
                            label='Повышение тарифов'
                            text='50р/шт'
                            onInputChange={this.tariffsChange}
                        />
                    </Grid>
                    <Grid container justify='center' item xs={4}>
                        <Input
                            label='Доп. гарантии'
                            text='100р/шт'
                            onInputChange={this.warrantiesChange}
                        />
                    </Grid>
                    <Grid container justify='center' item xs={4}>
                        <Input
                            label='Автоплатежи'
                            text='50р/шт'
                            onInputChange={this.autopaymentsChange}	
                        />	
                    </Grid>
                </Grid>

                <Grid container spacing={5}>
                    <Grid container justify='center' item xs={4}>
                        <Check
                            label='Норма для удвоения'
                            onCheckboxChange={this.salesDoubleChange}
                            night={this.state.salesFine}
                        
                        />
                    </Grid>
                    <Grid container justify='center' item xs={4}>
                        <Check
                            label='Колл. штраф 10%'
                            onCheckboxChange={this.salesAllFineChange}
                        />
                    </Grid>
                    <Grid container justify='center' item xs={4}>
                        <Check
                            label='Инд. штраф 500р'
                            onCheckboxChange={this.salesFineChange}
                            night={this.state.salesDouble}
                        />
                    </Grid>
                </Grid>	
            </div>

        )
    }

}



