import React, {FC, useState} from 'react';
import {useAppDispatch} from "../../hooks";
import {Dropdown, Space} from "antd";
import styles from "../../ui/Menu/styles.module.css";
import {FilterItem} from "../../types";
import {updateTags} from "../../store/gamesSlice";
import Tag from "../Tag/Tag";


const defaultTags = [
    {
        key: "mmorpg",
        label: <p className={styles.menuElement}>MMORPG</p>,
    },
    {
        key: "shooter",
        label: <p className={styles.menuElement}>Шутеры</p>,
    },
    {
        key: "strategy",
        label: <p className={styles.menuElement}>Стратегии</p>,
    },
    {
        key: "moba",
        label: <p className={styles.menuElement}>MOBA</p>,
    },
    {
        key: "racing",
        label: <p className={styles.menuElement}>Гонки</p>,
    },
    {
        key: "sports",
        label: <p className={styles.menuElement}>Спортивные игры</p>,
    },
    {
        key: "social",
        label: <p className={styles.menuElement}>Социальные</p>,
    },
    {
        key: "sandbox",
        label: <p className={styles.menuElement}>Песочницы</p>,
    },
    {
        key: "open-world",
        label: <p className={styles.menuElement}>Открытый мир</p>,
    },
    {
        key: "survival",
        label: <p className={styles.menuElement}>Выживание</p>,
    },
    {
        key: "pvp",
        label: <p className={styles.menuElement}>PVP</p>,
    },
    {
        key: "pve",
        label: <p className={styles.menuElement}>PVE</p>,
    },
    {
        key: "pixel",
        label: <p className={styles.menuElement}>Пиксельные</p>,
    },
    {
        key: "voxel",
        label: <p className={styles.menuElement}>Воксельные</p>,
    },
    {
        key: "zombie",
        label: <p className={styles.menuElement}>Зомби</p>,
    },
    {
        key: "turn-based",
        label: <p className={styles.menuElement}>Пошаговые</p>,
    },
    {
        key: "first-person",
        label: <p className={styles.menuElement}>От первого лица</p>,
    },
    {
        key: "third-Person",
        label: <p className={styles.menuElement}>От третьего лица</p>,
    },
    {
        key: "top-down",
        label: <p className={styles.menuElement}>Сверху вниз</p>,
    },
    {
        key: "tank",
        label: <p className={styles.menuElement}>Танки</p>,
    },
    {
        key: "space",
        label: <p className={styles.menuElement}>Космос</p>,
    },
    {
        key: "sailing",
        label: <p className={styles.menuElement}>Плаванье</p>,
    },
    {
        key: "side-scroller",
        label: <p className={styles.menuElement}>Side scroller</p>,
    },
    {
        key: "superhero",
        label: <p className={styles.menuElement}>Супергерои</p>,
    },
    {
        key: "permadeath",
        label: <p className={styles.menuElement}>Вечная смерть</p>,
    },
    {
        key: "card",
        label: <p className={styles.menuElement}>Карты</p>,
    },
    {
        key: "battle-royale",
        label: <p className={styles.menuElement}>Battle Royale</p>,
    },
    {
        key: "mmo",
        label: <p className={styles.menuElement}>MMO</p>,
    },
    {
        key: "mmofps",
        label: <p className={styles.menuElement}>MMOFPS</p>,
    },
    {
        key: "mmotps",
        label: <p className={styles.menuElement}>MMOTPS</p>,
    },
    {
        key: "3d",
        label: <p className={styles.menuElement}>3D</p>,
    },
    {
        key: "2d",
        label: <p className={styles.menuElement}>2D</p>,
    },
    {
        key: "anime",
        label: <p className={styles.menuElement}>Аниме</p>,
    },
    {
        key: "fantasy",
        label: <p className={styles.menuElement}>Фэнтези</p>,
    },
    {
        key: "sci-fi",
        label: <p className={styles.menuElement}>Sci-Fi</p>,
    },
    {
        key: "Fighting",
        label: <p className={styles.menuElement}>Файтинг</p>,
    },
    {
        key: "action-rpg",
        label: <p className={styles.menuElement}>Action RPG</p>,
    },
    {
        key: "action",
        label: <p className={styles.menuElement}>Action</p>,
    },
    {
        key: "military",
        label: <p className={styles.menuElement}>Military</p>,
    },
    {
        key: "martial-arts",
        label: <p className={styles.menuElement}>Martial Arts</p>,
    },
    {
        key: "flight",
        label: <p className={styles.menuElement}>Flight</p>,
    },
    {
        key: "low-spec",
        label: <p className={styles.menuElement}>Low-Spec</p>,
    },
    {
        key: "tower-defense",
        label: <p className={styles.menuElement}>Tower Defense</p>,
    },
    {
        key: "horror",
        label: <p className={styles.menuElement}>Horror</p>,
    },
    {
        key: "mmorts",
        label: <p className={styles.menuElement}>MMORTS</p>,
    }];
const TagsMenu: FC =() => {

    const dispatch = useAppDispatch();


    const [items, setItems] = useState<FilterItem[]>([
        {
            key: "mmorpg",
            label: <p className={styles.menuElement}>MMORPG</p>,
        },
            {
                key: "shooter",
                label: <p className={styles.menuElement}>Шутеры</p>,
            },
            {
                key: "strategy",
                label: <p className={styles.menuElement}>Стратегии</p>,
            },
            {
                key: "moba",
                label: <p className={styles.menuElement}>MOBA</p>,
            },
            {
                key: "racing",
                label: <p className={styles.menuElement}>Гонки</p>,
            },
            {
                key: "sports",
                label: <p className={styles.menuElement}>Спортивные игры</p>,
            },
            {
                key: "social",
                label: <p className={styles.menuElement}>Социальные</p>,
            },
            {
                key: "sandbox",
                label: <p className={styles.menuElement}>Песочницы</p>,
            },
            {
                key: "open-world",
                label: <p className={styles.menuElement}>Открытый мир</p>,
            },
            {
                key: "survival",
                label: <p className={styles.menuElement}>Выживание</p>,
            },
            {
                key: "pvp",
                label: <p className={styles.menuElement}>PVP</p>,
            },
            {
                key: "pve",
                label: <p className={styles.menuElement}>PVE</p>,
            },
            {
                key: "pixel",
                label: <p className={styles.menuElement}>Пиксельные</p>,
            },
            {
                key: "voxel",
                label: <p className={styles.menuElement}>Воксельные</p>,
            },
            {
                key: "zombie",
                label: <p className={styles.menuElement}>Зомби</p>,
            },
            {
                key: "turn-based",
                label: <p className={styles.menuElement}>Пошаговые</p>,
            },
            {
                key: "first-person",
                label: <p className={styles.menuElement}>От первого лица</p>,
            },
            {
                key: "third-Person",
                label: <p className={styles.menuElement}>От третьего лица</p>,
            },
            {
                key: "top-down",
                label: <p className={styles.menuElement}>Сверху вниз</p>,
            },
            {
                key: "tank",
                label: <p className={styles.menuElement}>Танки</p>,
            },
            {
                key: "space",
                label: <p className={styles.menuElement}>Космос</p>,
            },
            {
                key: "sailing",
                label: <p className={styles.menuElement}>Плаванье</p>,
            },
            {
                key: "side-scroller",
                label: <p className={styles.menuElement}>Side scroller</p>,
            },
            {
                key: "superhero",
                label: <p className={styles.menuElement}>Супергерои</p>,
            },
            {
                key: "permadeath",
                label: <p className={styles.menuElement}>Вечная смерть</p>,
            },
            {
                key: "card",
                label: <p className={styles.menuElement}>Карты</p>,
            },
            {
                key: "battle-royale",
                label: <p className={styles.menuElement}>Battle Royale</p>,
            },
            {
                key: "mmo",
                label: <p className={styles.menuElement}>MMO</p>,
            },
            {
                key: "mmofps",
                label: <p className={styles.menuElement}>MMOFPS</p>,
            },
            {
                key: "mmotps",
                label: <p className={styles.menuElement}>MMOTPS</p>,
            },
            {
                key: "3d",
                label: <p className={styles.menuElement}>3D</p>,
            },
            {
                key: "2d",
                label: <p className={styles.menuElement}>2D</p>,
            },
            {
                key: "anime",
                label: <p className={styles.menuElement}>Аниме</p>,
            },
            {
                key: "fantasy",
                label: <p className={styles.menuElement}>Фэнтези</p>,
            },
            {
                key: "sci-fi",
                label: <p className={styles.menuElement}>Sci-Fi</p>,
            },
            {
                key: "Fighting",
                label: <p className={styles.menuElement}>Файтинг</p>,
            },
            {
                key: "action-rpg",
                label: <p className={styles.menuElement}>Action RPG</p>,
            },
            {
                key: "action",
                label: <p className={styles.menuElement}>Action</p>,
            },
            {
                key: "military",
                label: <p className={styles.menuElement}>Military</p>,
            },
            {
                key: "martial-arts",
                label: <p className={styles.menuElement}>Martial Arts</p>,
            },
            {
                key: "flight",
                label: <p className={styles.menuElement}>Flight</p>,
            },
            {
                key: "low-spec",
                label: <p className={styles.menuElement}>Low-Spec</p>,
            },
            {
                key: "tower-defense",
                label: <p className={styles.menuElement}>Tower Defense</p>,
            },
            {
                key: "horror",
                label: <p className={styles.menuElement}>Horror</p>,
            },
            {
                key: "mmorts",
                label: <p className={styles.menuElement}>MMORTS</p>,
            }]);


    const [activeFilters, setActiveFilters] = useState<string[]>([]);

    /**
     * TODO: Remove all any
     */
    const menuHandler = (e: any) => {
        dispatch(updateTags(e.key));

        const result = defaultTags.find(el => el.key === e.key)?.label;
        setItems(items.filter(el => e.key !== el.key));

        setActiveFilters([result?.props.children, ...activeFilters]);

    }

    const removeTag = (e: string) => {
        const result = defaultTags.find(el => el.label.props.children === e);

        if (result) {
            dispatch(updateTags(result.key));
            setItems([...items, result]);
            setActiveFilters(activeFilters.filter(el => el !== e));
        }
    }

    return (
        <>
            <Dropdown menu={{
                items,
                onClick: menuHandler,
                style: {height: 300, overflowY: 'scroll'},
            }}>
                <Space>
                    <p className={styles.menuOpen}>Добавить теги</p>
                </Space>
            </Dropdown>
            <div className={styles.tagsContainer}>
                {
                    activeFilters.map(e => <Tag title={e} key={e} removeTag={removeTag}/>)
                }
            </div>
        </>
    );
};

export default TagsMenu;