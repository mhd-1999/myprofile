import clsx from "clsx";
import styles from './Footer.module.css';
function Footer() {
    return <footer className="d-flex">
        <div className={clsx(styles.text)}>
            <p>Create by <span>@Sniim</span></p>
        </div>
        <div className={clsx(styles.icon, 'd-flex')}>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-github"></i></a>
        </div>
    </footer>;
}

export default Footer;