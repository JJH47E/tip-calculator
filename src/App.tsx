import React, { useRef, useState } from 'react';
import './App.scss';
import CurrencyOption from './currency-option/currency-option.component';
import { curr, getCurrency } from './services/currency.service';
import { getTip, setTip, tipService } from './services/tip.service';
import TipOption from './tip-option/tip-option.component';
import VerticalAddition from './vertical-addition/vertical-addition.component';

const options = [12.5, 15, 17.5, 20, 22.5];
const currencies = ['$', '£', '€'];

function App() {
  curr();
  tipService();
  
  const [billAmount, setBillAmount] = useState(0);

  var inputRef = useRef(null);

  const applyTip = (amount: number) => {
    setTip(amount);
  };

  const updateBillAmount = (total: string) => {
    if (isNaN(Number(total))) {
      setBillAmount(0);
      return;
    }
    setBillAmount(Number(total));
  }

  const numberCheck = (ref: any, key: any) => {
    if (ref.current.value.endsWith('.')) {
      if (/[.]/.test(key)) {
        return false;
      }
      return true;
    }
    let num = Number(ref.current.value)
    if (isNaN(num)) {
      return false
    }
    if (num >= 10000) {
      return false;
    }
    if (num % 1 === 0) {
      // whole number
      return true;
    }
    else if (ref.current.value.split('.')[1].length === 2) {
      return false;
    }
    else if (/[.]/.test(key)) {
      // cannot add second decimal point
      return false;
    }
    return true;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <div className="currencies">
            {currencies.map(currency => <CurrencyOption currency={currency} />)}
          </div>
          <div className="total">
            <p>Total: {getCurrency()}</p><input ref={inputRef} className="main-input" inputMode="decimal" id="totalInput" onKeyPress={(event) => {
          if (!/[0-9]|[.]/.test(event.key)) {
            event.preventDefault();
          }
          if (!numberCheck(inputRef, event.key))
          {
            event.preventDefault();
          }
        }} onChange={(event) => updateBillAmount(event.target.value)}></input>
          </div>
          <div className="options">
            {options.map(opt => <TipOption amount={opt} options={options.length} applyTip={applyTip} />)}
          </div>
          <div className="addition">
            <VerticalAddition bill={billAmount} tip={getTip()} currency={getCurrency()}/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
