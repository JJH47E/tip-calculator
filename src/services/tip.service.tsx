import { useState } from 'react';
import { singletonHook } from 'react-singleton-hook';

var defaultTip = 17.5;

let currentTip = defaultTip;

let setGlobalTip: React.Dispatch<React.SetStateAction<number>> = () => {
  throw new Error('you must call tipService before setting its state');
};

export const tipService = singletonHook(currentTip, () => {
  const [newTip, switchTip] = useState(defaultTip);
  setGlobalTip = switchTip;
  currentTip = newTip;
  return newTip;
});

export const setTip = (tip: number) => setGlobalTip(tip);
export const getTip = () => currentTip;
