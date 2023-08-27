import React from 'react';
import {Provider} from "react-redux";
import store from "./store/index";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import styles from './App.module.css'
import Home from "./pages/Home/Home";

function App() {
    return (
            <Provider store={store}>
                <div className={styles.container}>
                <h1 className={styles.title}>games</h1>
                    <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/tickets"/>
                            </Routes>
                    </BrowserRouter>
                </div>

            </Provider>
);
}

export default App;
