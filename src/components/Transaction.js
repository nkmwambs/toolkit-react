import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const Transaction = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalContext)

    const onDelete = () => {
        deleteTransaction(transaction.id)
    }

    return (
            <li className="transaction_item">
                <span className="transaction_delete"><button onClick={onDelete}>Delete</button></span>
                <span className="transaction_detail">{transaction.description}</span>
                <span className="transaction_amount">{transaction.amount}</span>
            </li>
    )
}