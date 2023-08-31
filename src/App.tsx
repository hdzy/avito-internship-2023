import React, {useEffect} from 'react';
import {Provider} from "react-redux";
import store from "./store/index";
import {BrowserRouter} from "react-router-dom";
import styles from './App.module.css'
import AppRouter from "./components/Routes/AppRouter";
import Header from "./components/Header/Header";
import {GameWithTimer} from "./types";

function App() {

    /**
     * Каждую минуту происходит проверка и удаление объектов,
     * у которых истёк срок хранения (5 минут)
     */

    useEffect(() => {
        setInterval(() => {
            let gamesLocal = window.sessionStorage.getItem('games');

            if (gamesLocal) {
                let gamesArray: GameWithTimer[] = JSON.parse(gamesLocal);

                gamesArray = gamesArray.filter(e => {
                    return e.timer > Date.now()
                });

                window.sessionStorage.setItem('games', JSON.stringify(gamesArray));
            }
        }, 60000)
    }, [])

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
