import { useCounter } from "./CounterContext";

export default function CounterButtons() {
  const { inc, dec, reset } = useCounter();
  return (
    <div>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
