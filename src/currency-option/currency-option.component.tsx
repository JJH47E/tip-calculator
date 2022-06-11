import React from 'react';
import '../App.scss';
import { getCurrency, setCurrency } from '../services/currency.service';

interface CurrencyOptionProps
{
    currency: string;
}

function CurrencyOption({currency}: CurrencyOptionProps) {
    return (
        <div key={currency} onClick={() => setCurrency(currency)}>
            {currency}{getCurrency() === currency ? '*' : ''}
        </div>
    );
}

export default CurrencyOption;
