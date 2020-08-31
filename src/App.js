import React, {useState} from 'react';
import './App.css';
import Dot from './Dot';

const App = props => {

  const [dots, updateDots] = useState([])

  const handleClick = event => {
    const x = event.screenX;
    const y = event.screenY;
    debugger;
    const newDots = dots.concat[{x, y}]
  }


  return (
    <div className="App" onClick={handleClick}>
        <h1>Click Anywhere</h1>
        {
          dots.map(dot => <Dot x={dot.x} y={dot.y} />)
        }
    </div>
  );
}

export default App;