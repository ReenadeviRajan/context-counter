import Counter from "./Counter";
import "./App.css";
import { CounterProvider } from "./CounterContext.jsx";

function App() {
  return (
    <CounterProvider>
      {/*<Counter count={count} inc={inc} dec={dec} reset={reset} />  these values can be used in Counter with help of values*/}
      <Counter />
    </CounterProvider>
  );
}

export default App;
