import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> The count = {count} </h1>

      <div>
        <button type="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatch(incrementByAmount())}>
          Increment by ambount 33
        </button>
      </div>
    </div>
  );
}

export default App;
