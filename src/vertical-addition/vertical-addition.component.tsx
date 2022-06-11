import React from 'react';
import '../App.css';

interface VerticalAdditionProps
{
    bill: number;
    tip: number;
    currency: string;
}

function VerticalAddition({bill, tip, currency}: VerticalAdditionProps) {
    let rawTip = parseFloat((bill * (tip/100)).toString()).toFixed(2);
    let rawBill = parseFloat(bill.toString()).toFixed(2);
    return (
        <>
            <div className="addition-property">
                {currency}{rawBill}
            </div>
            <div className="addition-property">
                +&#160;{tip}%
            </div>
            <div className="addition-property">
                <hr />
            </div>
            <div className="addition-property">
                Tip: {currency}{rawTip}
            </div>
            <div className="addition-property">
                Total: {currency}{parseFloat((parseFloat(rawTip) + parseFloat(rawBill)).toString()).toFixed(2)}
            </div>
        </>
    );
}

export default VerticalAddition;
