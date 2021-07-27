import React, { useState } from 'react';

const Gamingfield = () => {

    const [bombs, setBombs] = useState([]);
    const [visited, setVisited] = useState([]);

    const buttonStyle = {
        width: 30,
        height: 30,
        backgroundColor: '#888',
        color: 'black',
        verticalAlign: 'top',
        fontSize: '32px',
        fontFamily: 'Arial, Helvetica, sans-serif;',
        borderLeft: '2px solid rgb(220,220,220)',
        borderTop: '2px solid rgb(220,220,220)',
        borderBottom: '2px solid #333',
        borderRight: '2px solid #333',
        display: 'inline-block'
      };
    
      const visitStyle = {
        width: 34,
        height: 34,
        backgroundColor: '#555',
        color: 'white',
        fontWeight: 'bold',
        verticalAlign: 'top',
        fontSize: '32px',
        fontFamily: 'Montserrat, sans-serif',
        display: 'inline-block'
      };

    const generateBombs = () => {

        let bombArr = Array(6).fill(0).map(elem => Array(6).fill(0));

        for (let i = 0; i < bombArr.length; i++) {
            let bombPos = Math.floor(Math.random() * 6);
            bombArr[i][bombPos] = 'X';
        }

        for (let i = 0; i < bombArr.length; i++) {
            for (let j = 0; j < bombArr[i].length; j++) {
                if (bombArr[i][0] !== 'X') {
                    let sum = 0;

                    bombArr[i][j] = sum;
                }
            }
        }
        setBombs(bombArr);

        let cover = Array(6).fill(0).map(elem => Array(6).fill(0));
        setVisited(cover);
    };

    const visitCell = (i, j) => {
        if (bombs[i][j] === 'X') {
            alert("You Win! Generate again!");
            window.location.reload();
        }
        visited[i][j] = 1;
        setVisited([...visited]);
    };

    return (
        <>
            {bombs.map((arr, index) =>
                <div>
                    {arr.map((elem, i) =>
                        <div
                            onClick={() => visitCell(index, i)}
                            style={visited[index][i] ===0 ? buttonStyle : visitStyle}>
                            {visited[index][i] === 0 ? null : bombs[index][i] === 0 ? '' : bombs[index][i]}
                        </div>
                    )}
                </div>
            )}
            <button
                className={'generate'}
                onClick={() => generateBombs()}>
                Generate New Game
            </button>
        </>
    )
};

export default Gamingfield;
