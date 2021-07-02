import reactDom from 'react-dom';
import CanvasDraw from 'react-canvas-draw';
import { useState, useEffect } from 'react';

export default function Canvas() {
    const [options, setOptions] = useState({ 
        color: "#ffc600",
        height: '200px',
        width: '200px',
        brushRadius: 10,
        lazyRadius: 12});

    useEffect(() => {
        window.setInterval(() => {
            setOptions({
              color: "#" + Math.floor(Math.random() * 16777215).toString(16)
            });
          }, 2000);
    }) 
    return (
        <div className='studio-canvas'>
          <CanvasDraw brushColor={options.color} onChange={() => console.log("onChange")} canvasWidth={250} canvasHeight={250} hideGrid={true} />
        </div>
      );
}
  

