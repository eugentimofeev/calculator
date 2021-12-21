import React, {useState} from "react";

import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";
import {Grid} from "@material-ui/core";

import Header from "./header";
import MainForm from "./mainForm";
import Result from "./result";

//тема
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#0b949c",
        },
        secondary: {
            main: "#00C35A",
        },
    },
});

export default function App() {
    //базовый стейт главной формы
    const basicForm = {
        mac: "",
        ip: "",
        hostname: "",
        vlans: "",
        vendor: "",
        model: "",
        accessPorts: "",
        inputPort: "",
        inputPortDescription: "input",
        rps: false,
        provider: "citylink",
        city: "ptz",
    };

    //стейт 
    const [form, setForm] = useState(basicForm);      

    //сброс формы - меняем стейт на базовый + трем локалсторедж
    const onResetForm = () => {

    };

    //изменение главной формы - меняем стейт формы + записываем новые значения в локалсторедж
    const onFormChange = (data) => {

    };

	return (
		<ThemeProvider theme={theme}>
            <Header 
                title='Калькулятор ЗП для сотрудников СЗК' 
                link="https://karelia.pro/work/"
            />
			<div>
				<MainForm/>
				<Result/>
			</div>
        </ThemeProvider>    
	);
}