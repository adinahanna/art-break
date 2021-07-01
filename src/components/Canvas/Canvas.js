import { useState, useEffect } from 'react';

const Canvas = () => {
    // const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    // const updateMousePosition = (event) => {
    //     console.log(event.clientX, event.clientY);
    //     setMousePosition({
    //         x: event.clientX,
    //         y: event.clientY,
    //     })
    // }

    useEffect(() => {
        // updateMousePosition();
    }, []);

    return (
        <canvas className='paint-canvas'></canvas>
    )
}

export default Canvas;