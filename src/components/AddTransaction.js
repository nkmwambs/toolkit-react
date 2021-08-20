import React from 'react'

export default  () => {
    return (
        <div className="add_transaction">
            <div className="add_description_container">
                <span className="add_transaction_label">Enter description:</span> 
                <span><input  type="text" /></span>
            </div>
            <div className="add_amount_container">
                <span className="add_transaction_label">Enter Amount: </span>
                <span><input  type="text" /></span>
            </div>
            <div className="add_transaction_button_container">
                <button>Add Transaction</button>
            </div>
        </div>
    )
}