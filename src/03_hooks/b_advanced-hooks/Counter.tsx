import React, { useState, useContext, useCallback } from 'react';

const CounterStepContext = React.createContext(1);
export const CounterStepProvider = ({ step, children }) => (
  <CounterStepContext.Provider value={step}>
    {children}
  </CounterStepContext.Provider>
);
export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const step = useContext(CounterStepContext);
  const increment = useCallback(() => setCount((x) => x + step), [step]);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);
  const incrementAsync = useCallback(
    () => setTimeout(increment, 100),
    [increment]
  );

  if (count > 9000) {
    throw Error("It's over 9000!");
  }

  return { count, increment, reset, incrementAsync };
}
