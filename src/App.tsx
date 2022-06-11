import React, { useRef, useState } from 'react';
import './App.css';
import TipOption from './tip-option/tip-option.component';
import VerticalAddition from './vertical-addition/vertical-addition.component';

const options = [12.5, 15, 17.5, 20, 22.5];

function App() {
  const [tipAmount, setTipAmount] = useState(17.5);
  const [billAmount, setBillAmount] = useState(0);

  var inputRef = useRef(null);

  const applyTip = (amount: number) => {
    setTipAmount(amount);
  };

  const updateBillAmount = (total: string) => {
    setBillAmount(Number(total));
  }

  const numberCheck = (ref: any, key: any) => {
    if (ref.current.value.endsWith('.')) {
      if (/[.]/.test(key)) {
        return false;
      }
    }
    let num = Number(ref.current.value)
    if (isNaN(num)) {
      return false
    }
    if (num % 1 === 0) {
      // whole number
      return true;
    }
    else if ((num * 10) % 1 != 0) {
      // value is getting its last dp
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
          <div className="total">
            <p>Total: </p><input ref={inputRef} className="main-input" id="totalInput" onKeyPress={(event) => {
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
            <VerticalAddition bill={billAmount} tip={tipAmount} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
