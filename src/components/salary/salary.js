import React from 'react';
import { Grid, Button} from '@material-ui/core/';

import './salary.css';

const Salary = (props) => {
    
    return (
        
    






        <div className='salary'>
            <div className='salary__text'>
                Ваша зарплата 
            </div>
            <div className="salary__calc">{props.calcSalary}</div>
            <Grid container spacing={5}>
                <Grid container justify='center' item xs={3}><div>Кол. часов по графику: {props.calcGraphHours}</div></Grid>
                <Grid container justify='center' item xs={3}><div>Текущее кол. часов: {props.calcTrueHours}</div></Grid>
                <Grid container justify='center' item xs={3}><div>Кол. часов по доп. ставке: {props.calcAdditionalHours}</div></Grid>
                <Grid container justify='center' item xs={3}><div>Продажи: {props.calcSales}</div></Grid>
            </Grid>
            <Button variant="contained" color="primary" onClick={props.resetSate}>Сброс настроек</Button>
        </div>
    )
} 

export default Salary;