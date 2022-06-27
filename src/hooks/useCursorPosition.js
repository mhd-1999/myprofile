import { useEffect, useState } from "react";

export default function useCursorPosition() {
    const [cursorPosition, setCursorPosition] = useState({ x: null, y: null });

    useEffect(() => {
        const cursorMoveHandler = (event) => {
            const { clientX, clientY } = event;
            setCursorPosition({ x: clientX, y: clientY });
        };
        document.addEventListener("mousemove", cursorMoveHandler);
        return () => {
            document.removeEventListener("mousemove", cursorMoveHandler);
        };
    }, []);

    return cursorPosition;
}
