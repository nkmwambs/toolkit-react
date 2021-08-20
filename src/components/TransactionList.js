import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import {Transaction} from './Transaction'

const TransactionList = () => {

    const {transactions} = useContext(GlobalContext)

    return (
        <div className="transaction_items">
            Transaction List
            <ul>
                {
                    transactions.map((transaction, index) => <Transaction key={index} transaction={transaction}/>)
                }
            </ul>
        </div>
    )
}

export default TransactionList;