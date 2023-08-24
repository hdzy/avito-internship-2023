import React, {useEffect} from 'react';
import Game from "../Game/Game";
import styles from './gamesContainer.module.css';
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {gamesReceived} from "../../../../store/gamesSlice";
import axios from "axios";
const GamesContainer = () => {
    const dispatch = useAppDispatch();

    const games = useAppSelector(state => state.games.games);
    const isLoading = useAppSelector(state => state.games.isLoading);




    useEffect(() => {
        setTimeout(() => {
            axios.get('http://localhost:3000/games', )
                .then(res => {
                    dispatch(gamesReceived(res.data));
                })
                .catch((err) => {
                    console.log(err);
                })
        }, 3000)
    }, []);

    return (
        <>
            {
                isLoading ?
                    "Loading..."
                    :
                    <div className={styles.container}>
                    {
                        games.map((e) => {
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
                </div>
            }

        </>

    );
};

export default GamesContainer;