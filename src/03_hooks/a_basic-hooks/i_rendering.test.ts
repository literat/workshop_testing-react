import { renderHook } from '@testing-library/react-hooks';
import useCounter from './useCounter';

test('should use counter', () => {
  const { result } = renderHook(() => useCounter());
  expect(result.current.count).toBe(0);
  expect(typeof result.current.increment).toBe('function');
});
