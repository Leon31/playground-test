import { useState } from "react";

export default function useLocalStorage<T> (key: string, initialValue: T){
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error)
      return initialValue;
    }
  });

  function storeValue (newValue: T) {
    setValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  }

  return [value, storeValue];
}