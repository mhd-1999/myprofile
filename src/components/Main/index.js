import Banner from "../Banner";
import Info from "../Info";
import Project from "../Project";

import './Main.css'
function Main() {
    return <div className="main">
        <Banner />
        <div id="content">
            <Info />
            <Project />
        </div>
    </div >;
}

export default Main;