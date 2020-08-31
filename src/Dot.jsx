import React from 'react';

const Dot = props => {

    const {x, y} = props;
    return (
        <div className="dot" 
           style={{ "position": "absolute", "left": `${x}px`, "top": `${y}px` }}
           >
            O
        </div>
    )
}

export default Dot;