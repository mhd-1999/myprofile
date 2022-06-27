import './Banner.css';
import Tilt from 'react-vanilla-tilt';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';
function Banner() {
    // const [cursorPosition, setCursorPosition] = useState({
    //     x: 0,
    //     y: 0,
    // });

    // const [cursorVariant, setCursorVariant] = useState('default');
    // console.log(cursorPosition);
    // useEffect(() => {
    //     const mouseMove = (e) => {
    //         setCursorPosition({
    //             x: e.clientX,
    //             y: e.clientY,
    //         });
    //     };
    //     window.addEventListener('mousemove', mouseMove);
    //     return () => {
    //         window.removeEventListener('mousemove', mouseMove);
    //     };
    // }, []);
    // const variants = {
    //     default: {
    //         x: cursorPosition.x,
    //         y: cursorPosition.y,
    //     },
    //     text: {
    //         height: 100,
    //         width: 100,
    //         x: cursorPosition.x - 50,
    //         y: cursorPosition.y - 50,
    //     },
    // };
    // const textOver = () => setCursorVariant('text');
    // const textLeave = () => setCursorVariant('default');
    return <div className="thumbnail">
        <Tilt data-tilt-startX="40" data-tilt-startY="-40" style={{ width: "100%" }}>
            <div className="thumbnail-text">
                <p>I'm <span>creative</span> Front-End Dev.</p>
                <p>And I really <span>love</span> it !</p>
            </div>
        </Tilt>
        {/* <motion.div className="cursor" variants={variants} animate={cursorVariant}></motion.div> */}
    </div>
        ;
}
export default Banner;