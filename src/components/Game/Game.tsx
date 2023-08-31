import React, {FC, useEffect} from 'react';
import styles from './styles.module.css';
import {GameMininmified} from "../../types";
import {Link} from "react-router-dom";
import {useAppDispatch, useIsVisible} from "../../hooks";
import {updateGamesLimits} from "../../store/gamesSlice";

interface GameProps extends GameMininmified {
    isLast: boolean,
}
const Game: FC<GameProps>=({title,id, publisher, genre, thumbnail, release_date, isLast}) => {

    const dispatch = useAppDispatch();

    /**
     * Создание Observer через кастомный хук,
     * чтобы подгружать данные, когда последний загруженный элемент в области видимости
     */

    let ref = null
    if (isLast) {
        ref = React.createRef<HTMLAnchorElement>()
    }
    const isIntersecting = useIsVisible(ref);

    useEffect(() => {
        if (isIntersecting) {
            dispatch(updateGamesLimits());
        }
    }, [dispatch, isIntersecting])


    return (
        <Link to={`/game/${id}`} className={styles.container} ref={ref}>
            <img src={thumbnail} alt=""/>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>{title}</h2>
                <h3 className={styles.publisherTitle}>Издатель: <span className={styles.publisher}>{publisher}</span></h3>
                <div className={styles.tagsContainer}>
                    <p>{genre}</p>
                    <p>{release_date}</p>
                </div>
            </div>
        </Link>
    )
};

export default Game;
