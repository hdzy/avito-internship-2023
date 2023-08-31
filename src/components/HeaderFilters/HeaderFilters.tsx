import React from 'react';
import TagsMenu from "../TagsMenu/TagsMenu";
import styles from "./styles.module.css";
import PlatformMenu from "../PlatformMenu/PlatformMenu";
import SortOrder from "../SortOrder/SortOrder";
import SortMenu from "../SortMenu/SortMenu";

const HeaderFilters = () => {
    return (
        <>
            <h1 className={styles.title}>games</h1>
            <TagsMenu/>
            <div className={styles.rightContainer}>
                <PlatformMenu/>
                <div className={styles.sortContainer}>
                    <SortOrder/>
                    <SortMenu/>
                </div>
            </div>
        </>
    );
};

export default HeaderFilters;