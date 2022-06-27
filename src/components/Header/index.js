import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-vanilla-tilt';
import Main from '../Main';
import Banner from '../Banner';
import { CursorContext } from '../../context/cursor-context';
import Cursor from '../Cursor/Cursor';
const links = [
    {
        id: 1,
        class: 'nav-link home',
        name: 'Home',
    },
    {
        id: 2,
        class: 'nav-link about',
        name: 'About',
    },
    {
        id: 3,
        class: 'nav-link portfolio',
        name: 'Portfolio',
    },
    {
        id: 4,
        class: 'nav-link contact',
        name: 'Contact',
    },
];
function Header() {
    const [active, setActive] = useState();
    const { cursorType, cursorChangeHandler } = useContext(CursorContext);
    return <div>
        <header id="header">
            <div className="header d-flex">

                <div className="header-logo">
                    <a>
                        <Tilt data-tilt data-tilt-scale="10" data-tilt-reset="false" style={{
                            with: "100%",
                        }}> SNIIM</Tilt>
                    </a>
                </div>
                <div className="header-menu">
                    <ul>
                        {links.map((link) => (
                            <li
                                onClick={() => setActive(link.id)}
                                className={active == link.id ? `active ${link.class}` : `${link.class}`}
                            >
                                <a>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    </div>;
}

export default Header;