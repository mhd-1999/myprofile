import './Info.css';
import image from './mypic.jpg';
function Info() {
    return (
        <div className="info">
            <div className="title">
                <p>About of me</p>
            </div>
            <div className="img">
                <img src={image} alt="" />
            </div>

            <div className="content">
                <div className="content-top">
                    <p>When you want to give up</p>
                    <p>Remember</p>
                    <p> why you started.</p>
                </div>
                <div className="content-bottom d-flex">
                    <div className="content-icon d-flex">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                    <div className="content-info">
                        <p>maihaiduong2015@gmail.com</p>
                        <p>+84888866546</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
