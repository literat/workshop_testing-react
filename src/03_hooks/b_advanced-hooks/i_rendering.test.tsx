import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { CounterStepProvider, useCounter } from './Counter';

test('should use custom step when incrementing', () => {
  const wrapper = ({ children }) => (
    <CounterStepProvider step={2}>{children}</CounterStepProvider>
  );
  const { result } = renderHook(() => useCounter(), { wrapper });
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(2);
});
