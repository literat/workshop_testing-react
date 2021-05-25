import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from './Counter';

it('should throw when over 9000', () => {
  const { result } = renderHook(() => useCounter(9000));
  act(() => {
    result.current.increment();
  });
  expect(result.error).toEqual(Error("It's over 9000!"));
});
