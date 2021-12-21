import React, {useState, useEffect}from 'react';

import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid, Button, Tabs, Tab} from "@material-ui/core";

const useStyles = makeStyles({
    resultSection: {
        position: 'fixed',
        top: 60,
        right: 0,
        bottom: 0,
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        fontSize: 18,
    },
    resultWindow: {
        width: '50%',
        height: 'max-content',
        padding: 15,
        border: '2px solid #555',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '50px',
    },
    salary: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontWeight: 'bold',
        gap: '5px',
        fontSize: 24,
    },
    resultUl: {
        width: '100%',
    },
    resultLi: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
});

export default function Result() {

    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <div className={classes.resultSection}>
            <div className={classes.resultWindow}>
                
                <div className={classes.salary}>
                    <div>Ваша зарплата:</div>
                    <div>40 000 РУБ</div>
                </div>


                <div className={classes.resultUl}>
                    <div className={classes.resultLi}>
                        <div>Смен по графику:</div>
                        <div>16</div>
                    </div>
                    <div className={classes.resultLi}>
                        <div>Часы по графику:</div>
                        <div>186</div>
                    </div>
                    <div className={classes.resultLi}>
                        <div>Часы по факту:</div>
                        <div>201</div>
                    </div>
                </div>

                <div className={classes.resultUl}>
                    <div className={classes.resultLi}>
                        <div>Доп смены:</div>
                        <div>2</div>
                    </div>
                    <div className={classes.resultLi}>
                        <div>Часы доп смен:</div>
                        <div>24</div>
                    </div>
                </div>

                <div className={classes.resultUl}>
                    <div className={classes.resultLi}>
                        <div>Продажи:</div>
                        <div>6</div>
                    </div>
                    <div className={classes.resultLi}>
                        <div>Сумма продаж:</div>
                        <div>1400</div>
                    </div>
                </div>
            </div>
        </div>
    );
}