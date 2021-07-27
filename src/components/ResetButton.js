import React from 'react';

const ResetButton = (props) => {



    return (
        <div>
            <button
                className={'generate'}
                onClick={() => generateBombs()}>Generate New Game
            </button>
        </div>
    )
};

export default ResetButton;
