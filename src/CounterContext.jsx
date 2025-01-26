import { createContext, useContext, useState } from "react";

export const counterContext = createContext(null);

export const CounterProvider = ({ children }) => {
  // custom hooks
  const [count, setCount] = useState(0);

  function inc() {
    setCount(() => count + 1);
  }
  function dec() {
    setCount(() => count - 1);
  }
  function reset() {
    setCount(0);
  }

  const values = {
    count,
    inc,
    dec,
    reset,
  };
  return (
    <>
      <counterContext.Provider value={values}>
        {children}
      </counterContext.Provider>
    </>
  );
};

export const useCounter = () => {
  const context = useContext(counterContext);
  return context;
};
