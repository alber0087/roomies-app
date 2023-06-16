import { Box, TextField } from '@mui/material'
import EuroIcon from '@mui/icons-material/Euro'
import './AddExpensePage.css'
import { useState } from 'react'
import { addExpense } from '../../services/expenses.service'
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
    <Box>
      <Box>
        <div className="square-description"></div>
        <TextField
          variant="filled"
          label="Introduce a description"
          sx={{
            position: 'absolute',
            width: '220px',
            left: '124px',
            top: '166px',
          }}
          onChange={handleExpense}
        />
      </Box>
      <Box>
        <div className="square-euro"></div>
        <EuroIcon sx={{ position: 'absolute', left: '68px', top: '281px' }} />
        <TextField
          variant="filled"
          label="0,00" /* Se queda de titulo */
          sx={{
            position: 'absolute',
            width: '220px',
            left: '124px',
            top: '263px',
          }}
          onChange={handlePrice}
        />
      </Box>
      <PrimaryBtn  value="Add Expense" callToAction={addExpenseFunc} />
    </Box>
  )
}

export default AddExpensePage
