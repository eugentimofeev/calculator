import React, {useState, useEffect} from "react";

import {TextField} from "@material-ui/core/";
import {makeStyles, useTheme} from '@material-ui/core/styles';

const useStyles = makeStyles({
    input: {

    },
});

export default function Input({name, label, helperText, maxValue}) {

    const theme = useTheme();
    const classes = useStyles(theme);

    const [value, setValue] = useState('');

    const onInputChange = ({target}) => {

    };

	return (    
        <TextField
            className={classes.input}
            color="secondary"
            name={name}
            value={value} 
            label={label}
            helperText={helperText}
            size="small"
            autoComplete="off"
            onChange={onInputChange}
        />	
	);
}