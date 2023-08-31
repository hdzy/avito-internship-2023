import React, {ReactElement, useEffect} from 'react';
import styles from './styles.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {gamesError, gamesLoading, gamesReceived} from "../../store/gamesSlice";
import axios from "axios";
import Game from "../Game/Game";
import LoadingElement from "../../ui/LoadingElement/LoadingElement";
import {Modal} from "antd";

const loadingElems:ReactElement[] = [];

for (let i = 0; i < 12; i ++) {
    loadingElems.push(<LoadingElement width={300} height={341} borderRadius={10} key={i}/>);
}
const GamesContainer = () => {

    const dispatch = useAppDispatch();

    const {
        games,
        isLoading,
        isError,
        gamesLimits,
        sort,
        sortDirection,
        platform,
        tags,
        requestRemains,
    } = useAppSelector(state => state.games);

    /*
     * TODO: Do custom hook for this
     */

    useEffect(() => {
        dispatch(gamesLoading());

        let requestQuery = `
        ?start=${gamesLimits.start}&end=${gamesLimits.end}
        ${sort ? `&sort-by=${sort}` : ''}
        ${sortDirection ? `&direction=${sortDirection}` : ''}
        ${platform ? `&platform=${platform}` : ''}
        ${tags.length > 0 ? `&tag=${tags.join('.')}` : ''}`
            .replaceAll('\n', '')
            .replaceAll(' ', '');

        if (requestRemains >=0){
        axios.get(`http://localhost:3000/games/${requestQuery}` )
            .then(res => {
                dispatch(gamesReceived(res.data));
            })
            .catch((err) => {
                console.log(err);
                modalError()
                dispatch(gamesError());
            })}
        else {
            modalErrorLast();
        }
    }, [gamesLimits, requestRemains]);

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
            {
                games.length < 1 ? <h1 style={{color: '#fff'}}>К сожалению, игр с данными параметрами не найдено</h1> :
                games.map((e, index) => {
                    return <Game
                        key={e.id}
                        id = {e.id}
                        thumbnail={e.thumbnail}
                        publisher={e.publisher}
                        genre={e.genre}
                        title={e.title}
                        release_date={e.release_date}
                        isLast={index === games.length - 1}
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