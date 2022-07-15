
import clsx from 'clsx';
import styles from './Info.module.css';
import image from './mypic.jpg';
import Tilt from 'react-vanilla-tilt';
function Info() {
    return (
        <section className={clsx(styles.info)} id='About'>
            <div className={clsx(styles.title)}>
                <p>About of me</p>
            </div>
            <div className={clsx(styles.box, 'd-flex')}>
                <div className={clsx(styles.img)}>
                    <Tilt id="card" style={{ padding: "unset" }}><img src={image} alt="" /></Tilt>
                </div>

                <div className={clsx(styles.content)}>
                    <div className={clsx(styles.contentTop)}>
                        <p>When you want to give up,</p>
                        <p>Remember why you started.</p>
                        <p> </p>
                    </div>
                    <div className={clsx(styles.contentMid)}>
                        <p>Hello there! My name is <span>Hai Duong</span>.</p>
                        <p>I am a Front-End Dev from HaNoi,</p>
                        <p>and I'm very passionate and dedicated to my work. </p>
                    </div>
                    <div className={clsx(styles.contentBottom, 'd-flex')}>
                        <div className={clsx(styles.contentIcon, 'd-flex')}>
                            <i class="fas fa-arrow-right"></i>
                        </div>
                        <div className={clsx(styles.contentInfo)}>
                            <p>maihaiduong2015@gmail.com</p>
                            <p>+84888866546</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Info;
