import React, {Component} from 'react';
import {Grid} from '@material-ui/core';

import Input from '../input/input';


export default class Additional extends Component {

    state = {
        arr: [12, 12, 12, 12]
    }


    hoursChange = (value, id) => {
        
        this.setState(({arr}) => {
            arr[id] = value;
        });

        console.log(this.state.arr)
    }


    renderItems(days, hours) {
        let arr = [];
        
        for (let i = 0; i < days; i++) {

            arr.push(
                <Grid key={i + Math.random()} container justify='center' item xs={3}>
                    <Input
                        label='Часы'
                        text={`${i + 1} смена`} 
                        value={hours}   
                        id={i}
                        onInputChange={this.hoursChange}
                    />
                </Grid>
            )
        }

        return (
            arr
        )
    }  


    render() {
        
        const items = this.renderItems(this.props.days, this.props.hours)

        return (
            <Grid container>
                {items}
            </Grid>
        )
    }
}