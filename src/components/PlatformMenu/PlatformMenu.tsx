import React from 'react';
import Menu from "../../ui/Menu/Menu";
import {updatePlatformStatus, updateSortStatus} from "../../store/gamesSlice";
import {Platforms, Sorting} from "../../types";
import styles from "../../ui/Menu/styles.module.css";


const items = [
    {
        key: Platforms.All,
        label: <p className={styles.menuElement}>Все платформы</p>
    },
    {
        key: Platforms.PC,
        label: <p className={styles.menuElement}>Компьютер</p>
    },
    {
        key: Platforms.Browser,
        label: <p className={styles.menuElement}>Браузер</p>
    },
];

const PlatformMenu = () => {
    return (
        <Menu items={items} action={updatePlatformStatus} defaultValue={'Платформы'}/>
    );
};

export default PlatformMenu;