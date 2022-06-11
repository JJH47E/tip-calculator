import React, { useState } from 'react';
import '../App.css';

interface VerticalAdditionProps
{
    bill: number;
    tip: number;
}

function VerticalAddition({bill, tip}: VerticalAdditionProps) {
    let rawTip = parseFloat((bill * (tip/100)).toString()).toFixed(2);
    let rawBill = parseFloat(bill.toString()).toFixed(2);
    return (
        <>
            <div className="addition-property">
                {rawBill}
            </div>
            <div className="addition-property">
                +&#160;{tip}%
            </div>
            <div className="addition-property">
                <hr />
            </div>
            <div className="addition-property">
                Tip: {rawTip}
            </div>
            <div className="addition-property">
                Total: {parseFloat((parseFloat(rawTip) + parseFloat(rawBill)).toString()).toFixed(2)}
            </div>
        </>
    );
}

export default VerticalAddition;
