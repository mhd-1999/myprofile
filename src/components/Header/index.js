import { useState } from 'react';
import Tilt from 'react-vanilla-tilt';
import styles from './Header.module.css';
import clsx from 'clsx';
// const links = [
//     {
//         id: 1,
//         class: 'nav-link home',
//         name: 'Home',
//     },
//     {
//         id: 2,
//         class: 'nav-link about',
//         name: 'About',
//     },
//     {
//         id: 3,
//         class: 'nav-link portfolio',
//         name: 'Portfolio',
//     },
//     {
//         id: 4,
//         class: 'nav-link contact',
//         name: 'Contact',
//     },
// ];
function Header() {
    const [active, setActive] = useState();

    return <div>
        <header id="header">
            <div className={clsx(styles.header, 'd-flex')} >

                <div className={clsx(styles.headerLogo)}>
                    <a>
                        <Tilt className={clsx(styles.tilt)} data-tilt data-tilt-scale="10" data-tilt-reset="false" style={{ width: "100%" }}> SNIIM</Tilt>
                    </a>
                </div>
                <div className={clsx(styles.icon, 'd-flex')}>
                    <a href="https://www.facebook.com/s.niim94/"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/s.niim/"><i className="fab fa-instagram"></i></a>
                    <a href="https://github.com/mhd-1999"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </header>
    </div>;
}

export default Header;