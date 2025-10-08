// src/hooks/useLocalStorage.js
import { useState, useCallback } from "react";

/**
 * useLocalStorage(key, initialValue)
 * - Returns [value, setValue]
 * - setValue can accept either a value or an updater function (like setState).
 * - Keeps localStorage in sync whenever state changes via setValue.
 */
export default function useLocalStorage(key, initialValue) {
  // read once, lazily
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error("useLocalStorage read error:", err);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (valueOrFn) => {
      setStoredValue((prev) => {
        const valueToStore =
          typeof valueOrFn === "function" ? valueOrFn(prev) : valueOrFn;
        try {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (err) {
          console.error("useLocalStorage write error:", err);
        }
        return valueToStore;
      });
    },
    [key]
  );

  return [storedValue, setValue];
}
