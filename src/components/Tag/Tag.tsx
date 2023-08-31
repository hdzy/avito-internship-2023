import React, {FC} from 'react';
import styles from './styles.module.css'
import {RxCross1} from "react-icons/rx";

type TagProps = {
    title: string,
    removeTag: (title: string) => void
}
const Tag: FC<TagProps> = ({title, removeTag}) => {
    return (
        <div className={styles.tagContainer}>
            {title}
            <RxCross1 style={{cursor: "pointer"}} onClick={() => removeTag(title)}/>
        </div>
    );
};

export default Tag;