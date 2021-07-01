import { useState, useEffect } from 'react';

const Canvas = () => {
    const [mouseDown, setMouseDown] = useState(false);
    
    let x = 0;
    let y = 0;

    const stopDrawing = () => {
        setMouseDown(false);
        console.log('i stopped drawing')
    };
    const startDrawing = (event) => {
        setMouseDown(true);
        [x, y] = [event.offsetX, event.offsetY];
        console.log('i am drawing');
    };

    useEffect(() => {
        window.addEventListener('mousedown', startDrawing);
        window.addEventListener('mouseup', stopDrawing);
    }, []);

    return (
        <canvas className='paint-canvas'></canvas>
    )
}

export default Canvas;