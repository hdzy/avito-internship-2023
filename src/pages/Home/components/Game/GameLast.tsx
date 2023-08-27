import React, {FC, useEffect, useRef} from 'react';
import styles from './game.module.css';
import {GameMininmified} from "../../../../types";
import {useAppDispatch, useAppSelector, useIsVisible} from "../../../../hooks";
import {updateGamesLimits} from "../../../../store/gamesSlice";


const Game: FC<GameMininmified> = ({title,id, publisher, genre, thumbnail, release_date}) => {
    const ref = useRef(null);
    const isVisible = useIsVisible(ref);
    const dispatch = useAppDispatch();




    return (
        <div className={styles.container} ref={ref}>
            <img src={thumbnail} alt=""/>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>{title}</h2>
                <h3 className={styles.publisherTitle}>Издатель: <span className={styles.publisher}>{publisher}</span></h3>
                <div className={styles.tagsContainer}>
                    <p>{genre}</p>
                    <p>{release_date}</p>
                </div>
            </div>
        </div>
);
};

export default Game;