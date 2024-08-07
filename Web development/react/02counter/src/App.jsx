import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);
  function addConut() {
    if (
      count != "Bus kar bhai or kam karle" ||
      count != "It`s zero Bhai kita niche layega"
    ) {
      if (count < 20) {
        // setCount(count + 1);
        setCount((preCount)=>preCount +1)
        setCount(preCount=>preCount +1)
        setCount(preCount=>preCount +1)
        setCount(preCount=>preCount +1)
      } else {
        setCount("Bus kar bhai or kam karle");
        setTimeout(() => {
          setCount(20);
        }, 3000);
      }
    }
  }
  let removeCount = () => {
    if (
      count != "Bus kar bhai or kam karle" ||
      count != "It`s zero Bhai kita niche layega"
    ) {
      if (count > 0) {
        setCount(count - 1);
      } else {
        setCount("It`s zero Bhai kita niche layega");
        setTimeout(() => {
          setCount(0);
        }, 3000);
      }
    }
  };


  
  return (
    <>
      <h1>Hello Bhautik Patel</h1>
      <h3>Counter :- {count}</h3>
      <button onClick={addConut}>Add Number</button> &nbsp;
      <button onClick={removeCount}>Remove Number</button>
    </>
  );
}

export default App;
