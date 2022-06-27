import { useContext, useRef } from "react";
import { CursorContext } from "../../context/cursor-context"
import useCursorPosition from "../../hooks/useCursorPosition";
import './Cursor.css'
function Cursor() {
    const { cursorType, cursorChangeHandler } = useContext(CursorContext);
    const { x, y } = useCursorPosition();
    let innerRef = useRef();
    // let innerCursor = document.querySelector(".inner-cursor")
    let links = Array.from(document.querySelectorAll("a"))
    let texts = Array.from(document.querySelectorAll("p"))
    links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            innerRef.current.classList.add("grow");
        });
        link.addEventListener("mouseleave", () => {
            innerRef.current.classList.remove("grow");
        })
    })
    texts.forEach((text) => {
        text.addEventListener("mouseenter", () => {
            innerRef.current.classList.add("grow");
        });
        text.addEventListener("mouseleave", () => {
            innerRef.current.classList.remove("grow");
        })
    })
    return (
        <>
            <div className="cursor">
                <div ref={innerRef} className="inner-cursor" style={{ left: `${x}px`, top: `${y}px` }}></div>
            </div>
        </>
    );
}

export default Cursor;