import React from 'react';
import {BsFillArrowDownCircleFill} from "react-icons/bs";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {updateSortDirection} from "../../store/gamesSlice";
import {SortDirection} from "../../types";
import styles from './styles.module.css';

const SortOrder = () => {

    const dispatch = useAppDispatch();

    const sortDirection = useAppSelector(state => state.games.sortDirection);

    const sortDirectionHandler = () => {
        dispatch(updateSortDirection())
    }

    return (
        <BsFillArrowDownCircleFill
            color={'#fff'}
            size={25}
            cursor={'pointer'}
            onClick={sortDirectionHandler}
            className={styles.button}
            style={sortDirection === SortDirection.ascending ? {transform: 'rotate(0)'} : {transform: 'rotate(180deg)'}}
        />
    );
};

export default SortOrder;