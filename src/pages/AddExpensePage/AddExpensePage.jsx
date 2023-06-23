import { useState } from 'react'

import { TextField } from '@mui/material'
import { addExpense } from '../../services/expenses.service'

import EuroIcon from '@mui/icons-material/Euro'
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn'
import './AddExpensePage.css'
import { Link } from 'react-router-dom'
import PrevBtn from '../Tasks/PrevBtn/PrevBtn'

function AddExpensePage() {
  const [expense, setExpense] = useState('')
  const [price, setPrice] = useState(0)

  const handleExpense = (e) => {
    setExpense(e.target.value)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }

  const addExpenseFunc = async () => {
    await addExpense(expense, parseFloat(price.replace(',', '.')))
  }

  return (
    <div className="container">
    <Link to='/expenses'>
      <PrevBtn />
    </Link>
      <div className="addExpense-wrapper">
        <div className="expense-title">
          <TextField label="Introduce a description" onChange={handleExpense} />
        </div>
        <div className="price-wrapper">
          <TextField onChange={handlePrice} />
          <EuroIcon />
        </div>
      </div>
      <Link to='/expenses'>
        <PrimaryBtn value="Add Expense" callToAction={addExpenseFunc} />
      </Link>
    </div>
  )
}

export default AddExpensePage
