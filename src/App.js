import React, {useState, useEffect} from 'react';
import './App.css';
import Dot from './Dot';

const App = props => {

  const [dots, updateDots] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Dots:", dots)
      const movedDots = [];
      for (let i = 0; i < dots.length; i++) {
        movedDots.push({ x: dots[i].x, y: dots[i].y - 10 })
      }
      console.log("New Dots", movedDots)
      updateDots(movedDots);
    }, 200);
    return () => clearInterval(interval);
  }, [dots]);

  const handleClick = event => {
    // debugger;
    const x = event.clientX;
    const y = event.clientY;
    const newDots = dots.concat([{x: x, y: y}])
    updateDots(newDots);
  }
  
  return (
    <div className="App" onClick={handleClick}>
        {
          dots.map(dot => <Dot x={dot.x} y={dot.y} key={`${dot.x}${dot.y}`}/>)
        }
    </div>
  );
}

export default App;