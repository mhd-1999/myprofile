import clsx from "clsx";
import styles from './Footer.module.css';
function Footer() {
    return <footer className="d-flex">
        <div className={clsx(styles.text)}>
            <p>Create by <span>@Sniim</span></p>
        </div>
        <div className={clsx(styles.icon, 'd-flex')}>
            <a href="https://www.facebook.com/s.niim94/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/s.niim/"><i className="fab fa-instagram"></i></a>
            <a href="https://github.com/mhd-1999"><i className="fab fa-github"></i></a>
        </div>
    </footer>;
}

export default Footer;