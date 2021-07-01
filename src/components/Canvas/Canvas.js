import { useState, useEffect } from 'react';

const Canvas = () => {
    const [mouseDown, setMouseDown] = useState(false);
    
    let x = 0;
    let y = 0;

    const stopDrawing = () => {setMouseDown(false)};
    const startDrawing = (event) => {
        setMouseDown(true);
        [x, y] = [event.offsetX, event.offsetY];
    } 

    useEffect(() => {
    }, []);

    return (
        <canvas className='paint-canvas'></canvas>
    )
}

export default Canvas;