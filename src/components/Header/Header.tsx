import React from 'react';
import styles from './header.module.css'
import HeaderLink from "./components/HeaderLink";
const Header = () => {
    return (
        <div className={styles.container}>
            <HeaderLink link={'/'}>
                Главная
            </HeaderLink>
            <HeaderLink link={'/'}>
                Популярное
            </HeaderLink>
            <HeaderLink link={'/'}>
                Новые
            </HeaderLink>
            <HeaderLink link={'/'}>
                Компьютерные игры
            </HeaderLink>
            <HeaderLink link={'/'}>
                Выбрать игру для себя
            </HeaderLink>
        </div>
    );
};

export default Header;