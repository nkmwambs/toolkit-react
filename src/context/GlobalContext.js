import React, {createContext} from 'react'

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
    }
]

export const GlobalContext = createContext(initialState)