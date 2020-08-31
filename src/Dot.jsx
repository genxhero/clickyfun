import React, {useState} from 'react';

const Dot = props => {
   
    const {x, y} = props;
    //change back to fixed if we can manage all state in app component
    const [style, setStyle] = useState({
        "position": "absolute",
        "left": `${x}px`,
        "top": `${y}px`
    })

    return (
        <div className="dot" style={style} />
    )
}

export default Dot;