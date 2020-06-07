import React, {Component} from 'react';
import {FormControl, InputLabel, Select, FormHelperText, MenuItem} from '@material-ui/core/';

import './select.css';

export default class Choises extends Component {



    renderItems(obj) {
        let arr = [];

        for (let prop in obj) arr.push(<MenuItem key={prop} value={obj[prop]}>{prop}</MenuItem >) 

        return arr
        
    }    

    valueChange = (e) => {
        this.props.onSelectChange(e.target.value, e.target.name)
    }

    render() {
        const {label = 'none', text = '', value, values, name} = this.props;
        
        const menuItems = this.renderItems(values);

        return (
            <FormControl>
                <InputLabel htmlFor="age-native-helper">{label}</InputLabel>
                <Select value={value} onChange={this.valueChange} name={name}> 
                    {menuItems}
                </Select>
                <FormHelperText>{text}</FormHelperText>
            </FormControl>
        )
    }
}