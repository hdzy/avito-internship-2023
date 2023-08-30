import React from 'react';
import {Sorting} from "../../types";
import Menu from "../../ui/Menu/Menu";
import styles from "../../ui/Menu/styles.module.css";
import {updateSortStatus} from "../../store/gamesSlice";

const items = [
    {
        key: Sorting.Popularity,
        label: <p className={styles.menuElement}>По популярности</p>
    },
    {
        key: Sorting.ReleaseDate,
        label: <p className={styles.menuElement}>По дате релиза</p>
    },
    {
        key: Sorting.Alphabetical,
        label: <p className={styles.menuElement}>В алфавитном порядке</p>
    },
    {
        key: Sorting.Relevance,
        label: <p className={styles.menuElement}>По актуальности</p>
    }
];

const SortMenu = () => {
    return (
        <Menu items={items} action={updateSortStatus} defaultValue={'Сортировать по'}/>
    );
};

export default SortMenu;