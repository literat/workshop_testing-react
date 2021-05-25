import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { CounterStepProvider, useCounter } from './Counter';

test('should use custom step when incrementing', () => {
  const wrapper = ({ children, step }) => (
    <CounterStepProvider step={step}>{children}</CounterStepProvider>
  );
  const { result, rerender } = renderHook(() => useCounter(), {
    wrapper,
    initialProps: {
      step: 2,
    },
  });
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(2);
  /**
   * Change the step value
   */
  rerender({ step: 8 });
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(10);
});
