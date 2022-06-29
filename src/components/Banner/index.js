import './Banner.css';
import Tilt from 'react-vanilla-tilt';

function Banner() {
    return <div className="thumbnail">
        <Tilt id="card" style={{ width: "100%", boxShadow: "none" }}>
            <div className="thumbnail-text">
                <p>I'm <span>creative</span> Front-End Dev.</p>
                <p>And I really <span>love</span> it !</p>
            </div>
        </Tilt>
        <div className="scroll-down">
            <div className="mouse">
                <span></span>
            </div>
            <div className="arrow">
                <span></span>
            </div>
        </div>
    </div>;
}
export default Banner;