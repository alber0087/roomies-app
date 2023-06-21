import { useState } from 'react'

import { TextField } from '@mui/material'
import { addExpense } from '../../services/expenses.service'

import EuroIcon from '@mui/icons-material/Euro'
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn'
import './AddExpensePage.css'

function AddExpensePage() {
  const [expense, setExpense] = useState('')
  const [price, setPrice] = useState(0)

  const handleExpense = (e) => {
    setExpense(e.target.value)
    console.log(expense)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
    console.log(price)
  }

  const addExpenseFunc = async () => {
    await addExpense(expense, parseFloat(price.replace(',', '.')))
  }

  return (
    <div className="container">
      <div className="addExpense-wrapper">
        <div className="expense-title">
          <TextField label="Introduce a description" onChange={handleExpense} />
        </div>
        <div className="price-wrapper">
          <TextField onChange={handlePrice} />
          <EuroIcon />
        </div>
      </div>
      <PrimaryBtn value="Add Expense" callToAction={addExpenseFunc} />
    </div>
  )
}

export default AddExpensePage
