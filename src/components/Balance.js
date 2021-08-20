import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

const Balance = () => {

    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)

    const balance = amounts.reduce((total, amount) => total + amount)


    return (
        <div className="balance">
            Your Balance is: {balance}
        </div>
    )
}

export default Balance;