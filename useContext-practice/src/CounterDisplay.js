// CounterDisplay.js
import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const CounterDisplay = () => {
  const [ count,increment,decrement ] = useContext(CounterContext);

  return (
    <div>
      <h2>Counter Display</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>
    </div>
  );
};

export default CounterDisplay;
