import React from 'react';

function Message({bill, myTip, friendTip}) {
    const getTipToBill = () => {
        return bill * ((myTip + friendTip) / 100)
    }

    return (
        <div className={"mb-3"}>
            <span>Total % of tips: <strong>{myTip + friendTip > 0 ? myTip + friendTip : 0}</strong> %</span>
            <br/>
            {bill > 0 ?
                `End bill with tips is: $${bill + getTipToBill()} ($${bill} + $${Boolean(myTip) ? getTipToBill(): 0} tip)`
                : ""
            }
        </div>
    );
}

export default Message;