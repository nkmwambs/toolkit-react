import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const IncomeExpense = () => {

    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts.filter(amount => amount > 0).reduce((total, amount)=>total+parseInt(amount),0)

    const expense = amounts.filter(amount => amount < 0).reduce((total, amount)=>total+parseInt(amount),0)

    return (
    <div className="totals">
        <div className="income total">Total Income: <br/> {income}</div>
        <div className="expense total">Total Expense: <br/>{Math.abs(expense)}</div>
    </div>
    )
}