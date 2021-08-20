import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const AddTransaction  = () => {

    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext)

    const submitTransaction = () => {
        const transaction = {
            id:Math.ceil(Math.random() * 10000),
            description: description,
            amount:amount
        }

        addTransaction(transaction)

        setDescription("")
        setAmount(0)
    }

    return (
        <div className="add_transaction">
            <div className="add_description_container">
                <span className="add_transaction_label">Enter description:</span> 
                <span><input  onBlur={(e)=>setDescription(e.target.value)}  type="text" /></span>
            </div>
            <div className="add_amount_container">
                <span className="add_transaction_label">Enter Amount: </span>
                <span><input onBlur={(e)=>setAmount(e.target.value)}  type="text" /></span>
            </div>
            <div className="add_transaction_button_container">
                <button onClick={submitTransaction}>Add Transaction</button>
            </div>
        </div>
    )
}

export default AddTransaction;