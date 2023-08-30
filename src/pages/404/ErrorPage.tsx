import React from 'react';
import styles from "./styles.module.css";

const ErrorPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <h2 className={styles.subtitle}>Нет страницы с таким адресом</h2>
        </div>
    );
};

export default ErrorPage;