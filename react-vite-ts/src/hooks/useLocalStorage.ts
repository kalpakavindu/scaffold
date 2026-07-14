import { useCallback, useEffect, useState } from 'react';

type Serializable = null | string | number | boolean | Serializable[] | { [key: string]: Serializable };

function useLocalStorage<T extends Serializable>(
  key: string,
  defaultValue: T,
  debug: boolean = false,
): [T, (value: T | ((val: T) => T)) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(defaultValue);

  const getStoredValue = useCallback((): T => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : defaultValue;
    } catch (e) {
      if (debug) console.debug(e);
      return defaultValue;
    }
  }, [key, defaultValue, debug]);

  useEffect(() => {
    const a = () => setStoredValue(getStoredValue());
    a();
  }, [getStoredValue]);

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        setStoredValue(valueToStore);
      } catch (e) {
        if (debug) console.debug(e);
      }
    },
    [key, debug, storedValue],
  );

  const reset = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(defaultValue);
    } catch (e) {
      if (debug) console.debug(e);
    }
  }, [key, defaultValue, debug]);

  return [storedValue, setValue, reset];
}

export default useLocalStorage;
