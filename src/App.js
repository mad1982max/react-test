import { useState, useEffect, useRef } from "react";
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

const Users = () => {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const rendCount = useRef(1);

  useEffect(() => {
    console.log("effect");
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(type, ": ", json.length);
        rendCount.current++;
      });
  }, [type]);

  return (
    <>
      <div className="renders">Renders (users' comp): {rendCount.current}</div>
      <div className="type">{type.toUpperCase()}</div>
      <div className="btn-group">
        <button
          className="btn btn-warning type-btn"
          onClick={(e) => setType("users")}>
          users
        </button>
        <button
          className="btn btn-warning type-btn"
          onClick={(e) => setType("todos")}>
          todos
        </button>
        <button
          className="btn btn-warning type-btn"
          onClick={(e) => setType("posts")}>
          posts
        </button>
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

const App = () => {
  const initState = () => {
    // console.log("...setInit");
    return Math.trunc(Math.random() * 20);
  };

  const [counter, setCounter] = useState(() => initState());

  useEffect(() => {
    // console.log("useEffect");
  });

  const catchClick = (data) => {
    setCounter((prev) => prev + data);
    // console.log("...setState");
  };

  return (
    <>
      <Counter counter={counter} />
      <Buttons clickerFn={catchClick} />
      <Users />
    </>
  );
};

export default App;
