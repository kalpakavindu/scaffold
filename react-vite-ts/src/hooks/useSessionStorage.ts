import { useCallback, useEffect, useState } from 'react';
type Serializable = null | string | number | boolean | Serializable[] | { [key: string]: Serializable };

function useSessionStorage<T extends Serializable>(
  key: string,
  defaultValue: T,
  debug: boolean = false,
): [T, (value: T | ((val: T) => T)) => void, () => void] {
  const getStoredValue = useCallback((): T => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : defaultValue;
    } catch (e) {
      if (debug) console.debug(e);
      return defaultValue;
    }
  }, [key, defaultValue, debug]);

  const [storedValue, setStoredValue] = useState<T>(getStoredValue());

  useEffect(() => {
    const a = () => setStoredValue(getStoredValue());
    a();
  }, [getStoredValue]);

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
        setStoredValue(valueToStore);
      } catch (e) {
        if (debug) console.debug(e);
      }
    },
    [key, storedValue, debug],
  );

  const reset = useCallback(() => {
    try {
      window.sessionStorage.removeItem(key);
      setStoredValue(defaultValue);
    } catch (e) {
      if (debug) console.debug(e);
    }
  }, [key, defaultValue, debug]);

  return [storedValue, setValue, reset];
}

export default useSessionStorage;
