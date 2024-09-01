import { useState } from 'react';

export function useLocalStorage<L>(
  key: string,
  initialValue: L
): [L, (n: L) => void] {
  const localValue = () => {
    try {
      return JSON.parse(localStorage.getItem(key) ?? '') as L;
    } catch {
      return initialValue;
    }
  };

  const [value, setNewValue] = useState(localValue);

  const setValue = (newValue: L) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setNewValue(newValue);
  };

  return [value, setValue];
}
