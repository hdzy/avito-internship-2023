import React from 'react';
import GamesContainer from "./components/GamesContainer/GamesContainer";
import styles from './home.module.css'
const Home = () => {
    return (
        <div className={styles.container}>
            <GamesContainer/>
        </div>
    );
};

export default Home;