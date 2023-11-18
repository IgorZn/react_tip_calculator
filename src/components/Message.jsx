import React from 'react';

function Message({bill, myTip, friendTip}) {
    return (
        <div>
            {bill > 0 ?
                `You pay $${bill} ($${myTip} + $${friendTip})`
                : ""
            }
        </div>
    );
}

export default Message;