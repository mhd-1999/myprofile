import clsx from 'clsx';
import styles from './Banner.module.css';
import Tilt from 'react-vanilla-tilt';

function Banner() {
    return <div className={clsx(styles.thumbnail, 'd-flex')}>
        <Tilt id="card" style={{ width: "100%", boxShadow: "none" }}>
            <div className={clsx(styles.thumbnailText)}>
                <p>I'm <span>creative</span> Front-End Dev.</p>
                <p>And I really <span>love</span> it !</p>
            </div>
        </Tilt>
        <a href='#'>
            <div className={clsx(styles.scrollDown)}>
                <div className={clsx(styles.mouse)}>
                    <a href="#about"><span></span></a>
                </div>
                {/* <div className={clsx(styles.arrow)}>
                    <span></span>
                </div> */}
            </div>
        </a>
    </div>;
}
export default Banner;
