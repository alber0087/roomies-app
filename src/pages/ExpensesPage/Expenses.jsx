import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import './Expenses.css'
import { Link } from 'react-router-dom'
import { deleteExpense, expensePaid, getExpenses } from '../../services/expenses.service'
import { useEffect, useState } from 'react'

function Expenses() {
  const [expenses, setExpenses] = useState([])

  const listExpenses = async () => {
    const res = await getExpenses()

    setExpenses(res.expenses)
  }

  const deleteExpenseFunc = (id) => {
    deleteExpense(id)
  }

  const expensePaidFunc = async (id) => {    
    await expensePaid(id)
  }

  useEffect(() => {
    listExpenses()
  }, [])

  return (
    <Box>
      <AppBar
        sx={{
          position: 'absolute',
          width: '282px',
          height: '106px',
          left: '53px',
          top: '130px',
          backgroundColor: 'black',
          boxShadow: 'none',
          transition: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AccountCircleIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }}>
            <span className="bold-title">My Community</span>
            <br />
            Las Palmas de G.C.
          </Typography>
        </Toolbar>
        <Typography sx={{ padding: '10px 0 0 10px' }}>
          Total lent <span className="total-lent">0,00 €</span>
        </Typography>
      </AppBar>
      <div>
        <div>
          {expenses?.length > 0 &&
            expenses.map((e) => (
              <Card key={e.id} sx={{ width: '400px' }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {e.name}
                  </Typography>
                  <Typography variant="body">{e.price}€</Typography>
                  <Button variant="contained" onClick={() => deleteExpenseFunc(e.id)}>
                    DELETE
                  </Button>
                  <Button variant='contained' onClick={() => expensePaidFunc(e.id)}>
                    PAID
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
      <Button
        variant="contained"
        sx={{
          position: 'absolute',
          left: '22px',
          top: '655px',
          width: '322px',
          height: '48px',
          backgroundColor: 'var(--secondary-color)',
        }}
      >
        <Link to="/expenses/addexpense">Add Expense</Link>
      </Button>
    </Box>
  )
}

export default Expenses
