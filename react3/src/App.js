import "./App.css";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./redux/counter";

function App() {
  // const [count, setCount] = useState(0);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>The count is : {count}</h1>
        <div className="flex">
          {/* <button onClick={() => setCount(count - 1)}>decrement</button>
          <button onClick={() => setCount(count + 1)}>increment</button> */}

          <button onClick={() => dispatch(decrement())}>decrement</button>
          <button onClick={() => dispatch(increment())}>increment</button>
        </div>
        <div className="flex">
          <button onClick={() => dispatch(decrementByAmount(33))}>
            increment by 33
          </button>

          <button onClick={() => dispatch(incrementByAmount(33))}>
            increment by 33
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
