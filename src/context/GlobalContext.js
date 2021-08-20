import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = []

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addTransaction = (transaction) => {
        dispatch({
            type:"ADD_TRANSACTION",
            payload: transaction
        })
    }

    const deleteTransaction = (id) => {
        dispatch(
            {
                type:"DELETE_TRANSACTION",
                payload:id
            }
        )
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state,
            addTransaction,
            deleteTransaction
        }}>
{children}
        </GlobalContext.Provider>
    )
}

