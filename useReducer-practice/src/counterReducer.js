import React, { useReducer } from 'react';


// 定義 reducer 函數，它接收當前狀態和 action，並返回新的狀態
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log(state)
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  // 使用 useReducer hook 創建狀態和dispatch函數
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Counter;
