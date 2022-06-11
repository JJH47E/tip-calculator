import { useState } from 'react';
import { singletonHook } from 'react-singleton-hook';

var locale = window.navigator.language;

var defaultCurrency: string;

if (locale.split('-').length !== 2) {
    defaultCurrency = '$';
}
else {
    var region = locale.split('-')[1];
    switch(region) {
        case "GB":
            defaultCurrency = "£";
            break;
        case "US":
            defaultCurrency = "$";
            break;
        default:
            defaultCurrency = "€";
            break;
    }
}

let currentCurrency = defaultCurrency;

let setGlobalCurrency: React.Dispatch<React.SetStateAction<string>> = () => {
  throw new Error('you must curr before setting its state');
};

export const curr = singletonHook(currentCurrency, () => {
  const [newCurrency, switchCurrency] = useState(defaultCurrency);
  setGlobalCurrency = switchCurrency;
  currentCurrency = newCurrency;
  return newCurrency;
});

export const setCurrency = (currency: string) => setGlobalCurrency(currency);
export const getCurrency = () => currentCurrency;
