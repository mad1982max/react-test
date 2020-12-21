import { useState, useEffect } from "react";
import "./App.css";

const Counter = ({ counter }) => {
  return <div className="counter">COUNTER: {counter}</div>;
};

const Buttons = ({ clickerFn }) => {
  const handleClick = (e, adder) => {
    clickerFn(adder);
  };

  return (
    <div className="btn-group">
      <button
        className="btn btn-success click-btn up"
        onClick={(e) => handleClick(e, 1)}>
        INCREASE
      </button>
      <button
        className="btn btn-danger click-btn down"
        onClick={(e) => handleClick(e, -1)}>
        DECREASE
      </button>
    </div>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  }, [counter]);

  const catchClick = (data) => {
    setCounter((prev) => prev + data);
    setCounter((prev) => prev + data);
  };

  return (
    <>
      <Counter counter={counter} />
      <Buttons clickerFn={catchClick} />
    </>
  );
};

export default App;
