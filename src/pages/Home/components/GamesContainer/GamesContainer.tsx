import React, {FC, ReactElement, useEffect} from 'react';
import Game from "../Game/Game";
import styles from './gamesContainer.module.css';
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {gamesLoading, gamesReceived} from "../../../../store/gamesSlice";
import axios from "axios";
import GameLast from "../Game/GameLast";
import {Simulate} from "react-dom/test-utils";
import LoadingGame from "../Game/LoadingGame";

const loadingElems:ReactElement[] = [];

for (let i = 0; i < 12; i ++) {
    loadingElems.push(<LoadingGame key={i}/>);
}
const GamesContainer = () => {

    const dispatch = useAppDispatch();

    const games = useAppSelector(state => state.games.games);
    const isLoading = useAppSelector(state => state.games.isLoading);
    const gamesLimits = useAppSelector((state) => state.games.gamesLimits)

    useEffect(() => {
        dispatch(gamesLoading());

        setTimeout(() => {
            axios.get(`http://localhost:3000/games?start=${gamesLimits.start}&end=${gamesLimits.end}` )
                .then(res => {
                    dispatch(gamesReceived(res.data));
                })
                .catch((err) => {
                    console.log(err);
                })
        }, 3000)
    }, [gamesLimits]);

    return (
        <div className={styles.container}>
            {
                            games.map((e, index) => {
                                if (index === games.length - 1) {
                                    return <GameLast
                                        key={e.id}
                                        id = {e.id}
                                        thumbnail={e.thumbnail}
                                        publisher={e.publisher}
                                        genre={e.genre}
                                        title={e.title}
                                        release_date={e.release_date}
                                    />
                                }

                                return <Game
                                    key={e.id}
                                    id = {e.id}
                                    thumbnail={e.thumbnail}
                                    publisher={e.publisher}
                                    genre={e.genre}
                                    title={e.title}
                                    release_date={e.release_date}
                                />
                            })

            }
            {
                isLoading && loadingElems
            }
        </div>

    );
};

export default GamesContainer;