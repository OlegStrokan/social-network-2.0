import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {theme} from "./theme";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
);

reportWebVitals();
