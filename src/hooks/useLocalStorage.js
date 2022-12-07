import { useState, useEffect } from 'react';

const useLocalStorage = key => {
  const [state, setState] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem(key));
    if (!contacts) {
      return [];
    }
    return contacts;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export { useLocalStorage };
