import React from 'react';
import {Provider} from "react-redux";
import store from "./store/index";
import {BrowserRouter} from "react-router-dom";
import styles from './App.module.css'
import AppRouter from "./components/Routes/AppRouter";
import Header from "./components/Header/Header";

function App() {
    return (
            <Provider store={store}>
                <div className={styles.container}>
                    <BrowserRouter>
                        <Header/>
                        <AppRouter/>
                    </BrowserRouter>
                </div>

            </Provider>
);
}

export default App;
