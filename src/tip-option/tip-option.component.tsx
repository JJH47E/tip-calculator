import React from 'react';
import '../App.css';

interface TipOptionProps
{
    amount: number;
    options: number;
    applyTip: (amount: number) => void;
}

function TipOption({amount, options, applyTip}: TipOptionProps) {
    return (
        <div key={amount} onClick={() => applyTip(amount)}>
            {amount}%
        </div>
    );
}

export default TipOption;
