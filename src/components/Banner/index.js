import React, { Suspense } from 'react';
import clsx from 'clsx';
import styles from './Banner.module.css';
import Tilt from 'react-vanilla-tilt';
function Banner() {
    return <div className={clsx(styles.thumbnail, 'd-flex')}>
        <Tilt id="card" style={{ width: "100%", height: "100%", boxShadow: "none" }}>
            <div className={clsx(styles.thumbnailText)}>
                <div className={clsx(styles.line)}><p>I'm <span>creative</span> Front-End Dev.</p></div>
                <div className={clsx(styles.line)}><p>And I really <span>love</span> it !</p></div>
            </div>
        </Tilt>
        <a href='#About'>
            <div className={clsx(styles.scrollDown)}>
                <div className={clsx(styles.mouse)}>
                    <span></span>
                </div>
                {/* <div className={clsx(styles.arrow)}>
                    <span></span>
                </div> */}
            </div>
        </a>
    </div>;
}
export default Banner;
