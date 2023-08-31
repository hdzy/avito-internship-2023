import {useParams} from "react-router";
import styles from './styles.module.css';
import React, {useEffect} from "react";
import axios from "axios";
import Slider from "../../ui/Slider/Slider";
import GameInfo from "../../components/GameInfo/GameInfo";
import LoadingElement from "../../ui/LoadingElement/LoadingElement";
import { Modal } from "antd";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {errorGameLoading, gameLoading, updateGame} from "../../store/gameSlice";
import {getGameFromStorage, savePage} from "../../functions";

export const GamePage = () => {

    const params = useParams();
    const id = params.id;

    const dispatch = useAppDispatch();

    const {
        isLoading,
        isError,
        game,
        requestRemains,
    } = useAppSelector(state => state.game)

    useEffect(() => {
        if (game) {
            savePage(game);
        }
    }, [game]);


    useEffect(() => {

        dispatch(gameLoading());
        const game = getGameFromStorage(Number(id))

        if (game) {
            dispatch(updateGame(game));
        } else if (requestRemains >=0){
            axios.get(`http://localhost:3000/game?id=${id}`)
                .then(res => {
                    let releaseDate = res.data.release_date;
                    res.data.release_date = releaseDate.substring(releaseDate.length - 2) + '.' + releaseDate.substring(releaseDate.length - 5, releaseDate.length - 3) + '.' + releaseDate.substring(0, 4)
                    dispatch(updateGame(res.data));
                })
                .catch((err) => {
                    dispatch(errorGameLoading());
                    modalError();
                    console.log(err);
                });
        } else {
            modalErrorLast();
        }
    }, [requestRemains])

    const modalError = () => {
        Modal.destroyAll();

        Modal.error({
            open: isError,
            title: "Произошла ошибка",
            content: `Попытка повторного запроса
                      Осталось попыток: ${requestRemains}`
        });
    };

    const modalErrorLast = () => {
        Modal.destroyAll();

        Modal.error({
            open: isError,
            title: "Произошла ошибка",
            content: `К сожалению, не удалось загрузить данные`
        });
    }



    return (
        <div className={styles.container}>
            {isLoading ? <LoadingElement width={"100%"} height={500}/> : <Slider images={game?.screenshots}/>}
            {isLoading && <LoadingElement width={"100%"} height={100} marginTop={50}/>}
            {isLoading && <LoadingElement width={"100%"} height={500} marginTop={50}/>}
            {
                game &&
                <GameInfo
                    title={game.title}
                    description={game.description}
                    genre={game.genre}
                    platform={game.platform}
                    publisher={game.publisher}
                    developer={game.developer}
                    release_date={game.release_date}
                    minimum_system_requirements={game.minimum_system_requirements}
                />
            }
        </div>
    );
};