import React from 'react';
import {Link} from "react-router-dom";
import styles from "./styles.module.css";
import SortOrder from "../SortOrder/SortOrder";
import SortMenu from "../SortMenu/SortMenu";
import PlatformMenu from "../PlatformMenu/PlatformMenu";
import TagsMenu from "../TagsMenu/TagsMenu";


const Header = () => {
    return (
        <div className={styles.container}>
            <Link to={'/'} className={styles.title}>games</Link>
            <TagsMenu/>
            <div className={styles.rightContainer}>
                <PlatformMenu/>
                <div className={styles.sortContainer}>
                    <SortOrder/>
                    <SortMenu/>
                </div>
            </div>
        </div>
    );
};

export default Header;