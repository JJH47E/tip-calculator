import React from 'react';
import '../App.scss';
import { getTip } from '../services/tip.service';

interface TipOptionProps
{
    amount: number;
    options: number;
    applyTip: (amount: number) => void;
}

function TipOption({amount, options, applyTip}: TipOptionProps) {
    return (
        <div key={amount} onClick={() => applyTip(amount)} style={amount === getTip() ? 
            {textDecoration: 'underline'} : {}}>
            {amount}%
        </div>
    );
}

export default TipOption;
