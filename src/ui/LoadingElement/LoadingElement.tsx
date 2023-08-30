import React, {FC} from 'react';
import styles from './styles.module.css';


type LoadingElementProps = {
    width: number | string,
    height: number | string,
    borderRadius?: number,
    marginTop?: number,
}
const LoadingElement: FC<LoadingElementProps> = (props) => {
    return (
        <div style={{...props}} className={styles.loading}>
        </div>
    );
};

export default LoadingElement;