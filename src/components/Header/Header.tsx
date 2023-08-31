import React from 'react';
import styles from "./styles.module.css";
import {useLocation, useNavigate} from "react-router";
import {IoArrowBackSharp} from "react-icons/io5";
import HeaderFilters from "../HeaderFilters/HeaderFilters";

const Header = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const isHome = location.pathname === '/'

    return (
        <div className={styles.container}>
            {
               !isHome && <IoArrowBackSharp onClick={() => navigate(-1)} color={'#fff'} size={40} cursor={'pointer'}/>
            }
            <div className={styles.container} style={{display: isHome ? 'flex' : 'none'}}>
                <HeaderFilters/>
            </div>

        </div>
    );
};

export default Header;