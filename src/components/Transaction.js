import React from 'react'

export const Transaction = ({transaction}) => {
    return (
        <li className="transaction_item">
                    <span className="transaction_delete"><button>Delete</button></span>
                    <span className="transaction_detail">{transaction.description}</span>
                    <span className="transaction_amount">{transaction.amount}</span>
                </li>
    )
}