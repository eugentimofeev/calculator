import React, {Component} from 'react';
import {TextField} from '@material-ui/core/';

export default class Input extends Component {

    handleWheel = e => {
        let value = +e.target.value;
    
        if (e.deltaY > 0) value--;
        else value++;
    
        if (value < 0 || value > 24 || isNaN(value)) return;
    
        this.props.onInputChange(value, e.target.name);
      };
    
      handleChange = e => {
        const value = +e.target.value;
    
        if (value < 0 || value > 24 || isNaN(value)) return;
    
        this.props.onInputChange(value, e.target.name);
      };
    
      handleLeave = e => {
        console.log("leave");
      };
    
      handleEnter = e => {
        console.log("enter");
      };
    
    render() {
        const {label, text, value = '', name} = this.props;

        return (
            <TextField 
                name={name}
                value={value}
                label={label} 
                helperText={text} 
                onChange={this.handleChange}
                onWheel={this.handleWheel}
                onMouseEnter={this.handleEnter}
                onMouseLeave={this.handleLeave}
            />
        )
    }
} 