import { useState, useEffect } from 'react';

const useLocalStorage = key => {
  const [state, setState] = useState(() => [
    ...JSON.parse(localStorage.getItem('contacts')),
  ]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export { useLocalStorage };
