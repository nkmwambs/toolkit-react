import './App.css'
import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import {IncomeExpense} from './components/IncomeExpense'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import {GlobalProvider} from './context/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <div className="container">
      <div className="app-container">
      <Header />
      <Balance />
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
    </div>
    </div>
    </GlobalProvider>
    
  );
}

export default App;



