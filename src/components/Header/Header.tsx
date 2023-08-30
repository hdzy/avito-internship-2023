import React from 'react';
import {Link} from "react-router-dom";
import styles from "./styles.module.css";
import Menu from "../../ui/Menu/Menu";
import SortOrder from "../SortOrder/SortOrder";
import {updateSortStatus} from "../../store/gamesSlice";
import SortMenu from "../SortMenu/SortMenu";
import PlatformMenu from "../PlatformMenu/PlatformMenu";


const Header = () => {
    return (
        <div className={styles.container}>
            <Link to={'/'} className={styles.title}>games</Link>
            <PlatformMenu/>
            <div className={styles.sortContainer}>
                <SortOrder/>
                <SortMenu/>
            </div>
        </div>
    );
};

export default Header;