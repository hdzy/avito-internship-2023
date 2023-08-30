import {useParams} from "react-router";
import styles from './styles.module.css';
import React, {useEffect, useState} from "react";
import {Game} from "../../types";
import axios from "axios";
import Slider from "../../ui/Slider/Slider";
import GameInfo from "../../components/GameInfo/GameInfo";
import LoadingElement from "../../ui/LoadingElement/LoadingElement";

export const GamePage = () => {

    const params = useParams();
    const id = params.id;

    const [game, setGame] = useState<Game | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

/*
    const savePage = () => {

        if (id && game) {
            let ids = window.sessionStorage.getItem('ids')?.split(',');
            let games = window.sessionStorage.getItem('games')?.split(',');

            if (ids && games && !ids.includes(id)) {
                window.sessionStorage.setItem('ids', [...ids, id].toString());
                window.sessionStorage.setItem(`games`, [...games, JSON.stringify(game)].toString());
            } else {
                window.sessionStorage.setItem('ids', id);
                window.sessionStorage.setItem('games', JSON.stringify(game));
            }
        }
    }

    savePage();
*/

    useEffect(() => {

        setIsLoading(true);

        axios.get(`http://localhost:3000/game?id=${id}`)
        .then(res => {
            let releaseDate = res.data.release_date;
            res.data.release_date = releaseDate.substring(releaseDate.length - 2) + '.' + releaseDate.substring(releaseDate.length - 5, releaseDate.length - 3) + '.' + releaseDate.substring(0, 4)
            setGame(res.data);
            setIsLoading(false);
        })
        .catch(err => console.log(err));
    }, [])


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