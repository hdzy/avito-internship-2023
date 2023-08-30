import React from 'react';
import GamesContainer from "../../components/GamesContainer/GamesContainer";
import styles from './styles.module.css'
const Home = () => {
    return (
        <div className={styles.container}>
            <GamesContainer/>
        </div>
    );
};

export default Home;