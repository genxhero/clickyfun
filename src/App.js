import React, {useState} from 'react';
import './App.css';
import Dot from './Dot';

const App = props => {

  const [dots, updateDots] = useState([])

  const handleClick = event => {
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