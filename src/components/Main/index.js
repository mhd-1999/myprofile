import Banner from "../Banner";
import Contact from "../Contact";
import Info from "../Info";
import Project from "../Project";
import clsx from "clsx";
import styles from './Main.module.css'
import { useState } from "react";
import { ReactDOM } from "react";
function Main() {
    const [active, setActive] = useState('');

    window.addEventListener('scroll', e => {
        let offset = window.pageYOffset;
        // console.log(offset);
        if (offset >= 800 && offset < 1900) {
            setActive('about')
        }
        else if (offset >= 1900 && offset < 5200) {
            setActive('port')
        }
        else if (offset >= 5200) {
            setActive('contact')
        }
    })
    return <div className="main">
        <div className={clsx(styles.nav)}>
            <a onClick={() => setActive('about')} href="#About" className={clsx(styles.linkItem, active === 'about' ? styles.active : '')}></a>
            <a onClick={() => setActive('port')} href="#Portfolio" className={clsx(styles.linkItem, active === 'port' ? styles.active : '')}></a>
            <a onClick={() => setActive('contact')} href="#Contact" className={clsx(styles.linkItem, active === 'contact' ? styles.active : '')}></a>
        </div>

        <Banner />
        <div id="content">
            <Info />
            <Project />
            <Contact />
        </div>
    </div >;
}

export default Main;