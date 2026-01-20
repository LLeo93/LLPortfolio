export function useThrottle<T extends (...args: any[]) => void>(
  fn: T,
  delay: number,
): T {
  let last = 0;

  return ((...args: any[]) => {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn(...args);
    }
  }) as T;
}
