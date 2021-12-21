import React, {useState, useEffect}from 'react';

import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Container, Grid, Button, Tabs, Tab, formatMs} from "@material-ui/core";

import Input from "./UI/input";

const useStyles = makeStyles({
    mainForm: {
        width: '70%',
        height: '150vh'
    }
});

export default function MainForm() {

    const theme = useTheme();
    const classes = useStyles(theme);

    const [mainForm, setMainForm] = useState({
        basicDays: '',
    });

    const onValueChange = () => {

    }

    return (
        <div className={classes.mainForm}>
            <Container className={classes.container}>
                <Grid container spacing={1}>
                    <Grid
                        item
                        container
                        xs={12}
                    >
                        <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                        >
                            сброс настроек
                        </Button>
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                    >
                        <Input
                            name="basicDays"
                            label="Часы по графику"
                            text="Макс значение:  180"
                            value={mainForm.basicDays}
                            maxValue={24}
                            onInputChange={onValueChange}
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                    >3</Grid>
                </Grid>
             
            </Container>
        </div>
    );
}