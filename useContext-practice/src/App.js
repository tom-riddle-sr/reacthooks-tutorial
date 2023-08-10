// App.js
import React from 'react';
import CounterProvider from './CounterProvider';
import CounterDisplay from './CounterDisplay';
import Aa from "./AaBb"

const App = () => {
  return (
    <CounterProvider>
      <div>
        <h1>React Counter App</h1>
        <CounterDisplay />
        <Aa/>
      </div>
    </CounterProvider>
  );
};

export default App;
