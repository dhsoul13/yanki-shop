import { useCallback } from 'react';
import { useState } from 'react';

export const useInput = (defaultValue) => {
  const [state, setState] = useState(defaultValue);

  const valueChange = useCallback((e) => {
    setState(e.target.value);
  }, []);

  const reset = useCallback(() => {
    setState(defaultValue);
  }, []);

  return {
    value: state,
    valueChange: valueChange,
    reset: reset,
  };
};
