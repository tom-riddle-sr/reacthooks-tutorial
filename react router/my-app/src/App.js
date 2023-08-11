import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import A from "./a";
import F from "./ff";

const B = () => {
  return (
    <Routes>
      <Route path="/" element={<A />} />
      <Route path="/aa" element={<F />} />
    </Routes>
  );
};

function App() {
  return (
    <HashRouter>
      <div className="App">
        <B />
        <Link to="/">Go to A</Link>
        <Link to="/aa">Go to F</Link>
      </div>
    </HashRouter>
  );
}

export default App;

