import React, {FC, useState} from 'react';
import styles from './styles.module.css';
import {Dropdown, Space} from "antd";
import {FilterItem, Sorting} from "../../types";
import {useAppDispatch} from "../../hooks";
import {ActionCreatorWithoutPayload, ActionCreatorWithPayload} from "@reduxjs/toolkit";

/**
 * TODO: Add Generic in filter props
 */

type MenuProps = {
    items: FilterItem[],
    action: ActionCreatorWithoutPayload | ActionCreatorWithPayload<any>,
    defaultValue: string
}

const Menu: FC<MenuProps> =({items, action, defaultValue}) => {

    const dispatch = useAppDispatch();

    const [currentMenu, setCurrentMenu] = useState<string>(defaultValue);

    /**
     * TODO: Remove all any
     */
    const menuHandler = (e: any) => {

        dispatch(action(e.key as Sorting));

        setCurrentMenu(e.domEvent.target.innerText);
    }

    return (
            <Dropdown menu={{items, onClick: menuHandler}}>
                <Space>
                    <p className={styles.menuOpen}>{currentMenu}</p>
                </Space>
            </Dropdown>
    );
};

export default Menu;