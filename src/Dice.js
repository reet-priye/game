import React, { useState, useRef } from 'react';
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';

const Dice = ({winner, looser, setWinner, setLooser}) => {
  const [state, setState] = useState({
    outline: false,
    outlineColor: '#000001',
    defaultRoll: 1,
    numDice: 4,
    disableIndividual: true,
    sides: 6,
    faceColor: '#F4EEE0',
    dotColor: '#000000',
    rolling: false
  });

  const reactDiceRef = useRef(null);

  const rollDone = (value, values) => {
    console.log('done', value, values);

    setWinner(values.indexOf(Math.max.apply(Math, values))) 
    setLooser(values.indexOf(Math.min.apply(Math, values)))
  };

  const rollAll = () => {
    reactDiceRef.current.rollAll();
    setState({ ...state, rolling: true });
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 2em 0 2em' }}>
        <h6>Akshat</h6>
        <h6>Jheel</h6>
        <h6>Reet</h6>
        <h6>Preet</h6>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='row dice'>
          <div className='col'>
            <ReactDice
              {...state}
              rollDone={rollDone}
              ref={reactDiceRef}
            />
          </div>
        </div>
      </div>
      <div className='dice-test'>
        <div className='row info'>
          <div className='col'>
            <h4 style={{ textAlign: 'center' }}>
              <button
                className='button-50'
                onClick={rollAll}
              >
                Roll All
              </button>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dice;
