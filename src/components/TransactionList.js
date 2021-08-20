import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import {Transaction} from './Transaction'

const TransactionList = () => {

    const {transactions} = useContext(GlobalContext)

    return (
        <div className="transaction_items">
            <ul>
                {
                    transactions.map(transaction => <Transaction transaction={transaction}/>)
                }
            </ul>
        </div>
    )
}

export default TransactionList;