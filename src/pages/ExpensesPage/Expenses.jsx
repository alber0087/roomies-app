import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import {
  deleteExpense,
  expensePaid,
  getExpenses,
} from '../../services/expenses.service'
import { useEffect, useState } from 'react'
import { getUserLogged, getUsersByCommunity } from '../../services/user.service'
import { getCommunityId } from '../../services/community.service'

function Expenses() {
  const [expenses, setExpenses] = useState([])
  const [userLogged, setUserLogged] = useState('')
  const [usersCommunity, setUsersCommunity] = useState('')
  const [totalUsersCommunity, setTotalUsersCommunity] = useState(0)
  const [community, setCommunity] = useState('')

  const getCommunityInfo = async () => {
    const res = await getCommunityId()
    setCommunity(res)
  }

  const listExpenses = async () => {
    const res = await getExpenses()

    setExpenses(res.expenses)
  }

  const deleteExpenseFunc = async (id) => {
    await deleteExpense(id)
  }

  const expensePaidFunc = async (id) => {
    await expensePaid(id)
  }

  const getUserLoggedFunc = async () => {
    const res = await getUserLogged()
    setUserLogged(res)
  }

  const getUsersCommunity = async () => {
    const res = await getUsersByCommunity()
    setUsersCommunity(res.users)
  }

  const getTotalUsersCommunity = async () => {
    const res = await getUsersByCommunity()
    setTotalUsersCommunity(res.users.length)
  }

  useEffect(() => {
    listExpenses()
    getUserLoggedFunc()
    getUsersCommunity()
    getTotalUsersCommunity()
    getCommunityInfo()
  }, [])

  const calculateTotal = () => {
    let result = 0
    expenses.map((e) => {
      if (
        e.community_expense.status === 'Pending' &&
        e.community_expense.userId === userLogged.id
      ) {
        result += (totalUsersCommunity - 1) * (e.price / totalUsersCommunity)
      } else if (
        e.community_expense.status === 'Pending' &&
        e.community_expense.userId !== userLogged.id
      ) {
        result -= e.price / totalUsersCommunity
      }
    })
    return result
  }

  const calculateExpense = (e) => {
    if (e.community_expense.userId === userLogged.id) {
      return (totalUsersCommunity - 1) * (e.price / totalUsersCommunity)
    } else if (e.community_expense.userId !== userLogged.id) {
      return (e.price / totalUsersCommunity) * -1
    }
  }

  const lentOrOwe = () => {
    if (calculateTotal().toFixed(2) > 0) {
      return 'Total lent'
    } else if (calculateTotal().toFixed(2) < 0) {
      return 'Total owe'
    } else {
      return 'No debts'
    }
  }

  const debtDivision = (e) => {
    if (e.community_expense.userId === userLogged.id) {
      return (
        <>
          <Typography variant="text">
            I paid {e.price} € and I owe{' '}
            {((e.price / totalUsersCommunity) * -1)
              .toFixed(2)
              .replace('.', ',')}{' '}
            €<br></br>
          </Typography>
          {usersCommunity.map((i) => {
            if (i.id !== userLogged.id) {
              return (
                <Typography key={i.id} variant="text">
                  {i.firstName} owes{' '}
                  {((e.price / totalUsersCommunity) * -1)
                    .toFixed(2)
                    .replace('.', ',')}{' '}
                  €<br></br>
                </Typography>
              )
            }
          })}
        </>
      )
    } else {
      return (
        <>
          {usersCommunity.map((i) => {
            if (i.id === userLogged.id) {
              return (
                <Typography key={i.id}>
                  I owe{' '}
                  {((e.price / totalUsersCommunity) * -1)
                    .toFixed(2)
                    .replace('.', ',')}{' '}
                  €<br></br>
                </Typography>
              )
            } else if (i.id === e.userId) {
              return (
                <Typography key={i.id}>
                  {i.firstName} paid {e.price} € and he/she owes{' '}
                  {((e.price / totalUsersCommunity) * -1)
                    .toFixed(2)
                    .replace('.', ',')}{' '}
                  €<br></br>
                </Typography>
              )
            } else {
              return (
                <Typography key={i.id}>
                  {i.firstName} owes{' '}
                  {((e.price / totalUsersCommunity) * -1)
                    .toFixed(2)
                    .replace('.', ',')}{' '}
                  €<br></br>
                </Typography>
              )
            }
          })}
        </>
      )
    }
  }

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
            <span className="bold-title">{community.name}</span>
            <br />
            {community.city}
          </Typography>
        </Toolbar>
        <Typography sx={{ padding: '10px 0 0 10px' }}>
          {lentOrOwe()}{' '}
          <span className="total-lent">
            {calculateTotal().toFixed(2).replace('.', ',')} €
          </span>
        </Typography>
      </AppBar>
      <div>
        <div>
          {expenses?.length > 0 &&
            expenses.map((e) => (
              <Accordion key={e.id}>
                <AccordionSummary>
                  <Card sx={{ width: '400px' }}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {e.name}
                      </Typography>
                      <Typography variant="body">
                        {calculateExpense(e).toFixed(2)} €
                      </Typography>
                      <Button
                        variant="contained"
                        onClick={() => deleteExpenseFunc(e.id)}
                      >
                        DELETE
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => expensePaidFunc(e.id)}
                      >
                        PAID
                      </Button>
                    </CardContent>
                  </Card>
                </AccordionSummary>
                <AccordionDetails>{debtDivision(e)}</AccordionDetails>
              </Accordion>
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
