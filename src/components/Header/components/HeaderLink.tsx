import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styles from './headerLink.module.css';

interface IHeaderLinkProps {
   link: string,
   children: string,
}
const HeaderLink: FC <IHeaderLinkProps> = ({link, children}) => {
    return (
        <Link className={styles.container} to={link}>
            {children}
        </Link>
    );
};

export default HeaderLink;