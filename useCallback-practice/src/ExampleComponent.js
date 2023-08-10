//useCallback 非常有用，
//特別是在避免不必要的重新渲染和優化效能方面。
//useCallback 是 React 提供的一個 hook，用於緩存函式，
//以便在依賴不變時避免重新創建函式實例。


import React, { useState, useCallback } from 'react';

const ExampleComponent = () => {
    // 假設我們有一個狀態用來追蹤計數
    const [count, setCount] = useState(0);

    // 使用 useCallback 定義一個回調函式，這個函式將在後面的按鈕點擊事件中使用
    const handleIncrement = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []); // 空依賴陣列表示該函式不依賴於任何外部變數

    // 使用 useCallback 定義另一個回調函式
    const handleDecrement = useCallback(() => {
        setCount(prevCount => prevCount - 1);
    }, []); // 空依賴陣列表示該函式不依賴於任何外部變數

    return (
        <div>
            <h1>計數：{count}</h1>
            <button onClick={handleIncrement}>增加</button>
            <button onClick={handleDecrement}>減少</button>
        </div>
    );
};

export default ExampleComponent;
