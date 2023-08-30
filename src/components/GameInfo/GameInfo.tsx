import React, {FC} from 'react';
import styles from './styles.module.css';
import {Game} from "../../types";
import SystemRequirements from "../SystemRequirements/SystemRequirements";


type GameProps = Omit<Game,
    'id' |
    'screenshots' |
    'thumbnail' |
    'status' |
    'short_description' |
    'game_url'
>;

const GameInfo: FC<GameProps>= ({title, genre, platform, publisher, description, developer, release_date, minimum_system_requirements}) => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div>
                    <p className={styles.text}>Платформа: <span className={styles.purple}>{platform}</span></p>
                    <p className={styles.text}>Жанр:  <span className={styles.purple}>{genre}</span></p>
                    <p className={styles.text}>Издатель:  <span className={styles.purple}>{publisher}</span></p>
                    <p className={styles.text}>Разработчик:  <span className={styles.purple}>{developer}</span></p>
                    <p className={styles.text}>Дата выхода:  <span className={styles.purple}>{release_date}</span></p>
                </div>
                {
                    minimum_system_requirements && <SystemRequirements data={minimum_system_requirements}/>
                }
            </div>
        </div>
    );
};

export default GameInfo;