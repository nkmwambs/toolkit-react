import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = [
    {
        id:1,
        description:"Transaction 1",
        amount: 1500
    },
    {
        id:2,
        description:"Transaction 2",
        amount: -600
    },
    {
        id:3,
        description:"Transaction 3",
        amount: 850
    }
]

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={{
            transactions: state
        }}>
{children}
        </GlobalContext.Provider>
    )
}

