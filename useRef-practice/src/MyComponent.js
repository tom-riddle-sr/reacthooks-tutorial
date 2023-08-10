//useRef 提供了一種在 React 函數組件中保存持久性值的方法，
//並且在組件重新渲染時保持穩定。
//這個持久性值可以是一個對 DOM 元素的引用，
//或者是其他需要在組件渲染之間保持不變的值。


import React, { useRef } from 'react';

function MyComponent() {
    // 創建一個 useRef 實例，初始化為 null
    const inputRef = useRef(null);

    // 點擊按鈕時觸發的函數，將焦點聚焦到 input 元素
    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            {/* 使用 ref 屬性來將 input 元素和 useRef 創建的實例關聯 */}
            <input type="text" ref={inputRef} />
            <button onClick={focusInput}>聚焦輸入框</button>
        </div>
    );
}

export default MyComponent;
