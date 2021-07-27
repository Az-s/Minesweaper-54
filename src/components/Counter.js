import React, { useState } from 'react';

const Counter = (props) => {
    
    const [counter, setCounter] = useState(0);

    // const clickCounter = () => {
    //     setCounter(counter + 1)
    // };

    return (
        <div>
            <p className="tries">Tries: {counter}</p>
        </div>
    )
};

export default Counter;
