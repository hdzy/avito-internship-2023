import React, {FC} from 'react';
import styles from "./styles.module.css";
import {SystemRequirements} from "../../types";

type SystemRequirementsProps = {
    data: SystemRequirements
}

const SystemRequirementsComponent: FC<SystemRequirementsProps> = ({data}) => {
    return (
        <div>
            <p className={styles.text}>Операционная система: <span className={styles.purple}>{data.os}</span></p>
            <p className={styles.text}>Процессор:  <span className={styles.purple}>{data.processor}</span></p>
            <p className={styles.text}>Оперативная память:  <span className={styles.purple}>{data.memory}</span></p>
            <p className={styles.text}>Видеокарта:  <span className={styles.purple}>{data.graphics}</span></p>
            <p className={styles.text}>Место на диске:  <span className={styles.purple}>{data.storage}</span></p>
        </div>
    );
};

export default SystemRequirementsComponent;