import { useEffect, useCallback } from 'react';

const useDebounceEffect = (effect, deps, delay) => {
  const callback = useCallback(effect, deps)

  useEffect(() => {
    const timeout = setTimeout(callback, delay)
    return () => clearTimeout(timeout)
  }, [callback, delay])
}

export default useDebounceEffect