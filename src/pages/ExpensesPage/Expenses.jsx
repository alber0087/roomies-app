import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserLogged, getUsersByCommunity } from '../../services/user.service'
import { getCommunityId } from '../../services/community.service'

import {
  deleteExpense,
  expensePaid,
  getExpenses,
} from '../../services/expenses.service'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import './Expenses.css'
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn'
import Spinner from '../../components/Spinner/Spinner'

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
    setExpenses(res)
  }

  const deleteExpenseFunc = async (id) => {
    await deleteExpense(id)
  }

  const expensePaidFunc = async (id) => {
    await expensePaid(id)
    listExpenses()
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
    setTotalUsersCommunity(res.users.users.length)
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
          {usersCommunity.users.length > 0 && 
          usersCommunity.users.map((i) => {
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
          {usersCommunity.users.length > 0 && usersCommunity.users.map((i) => {
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
    <div className="container">
      <Box>
        <div className="wrapper expenses-wrapper">
          <div className='expenses-header'>
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
            <div className='right right-expense'>
              <Typography sx={{ padding: '10px 0 0 10px' }}>
                {lentOrOwe()}{' '}
                <span className="total-lent">
                  {calculateTotal().toFixed(2).replace('.', ',')} €
                </span>
              </Typography> 
            </div>
          </div>
          {expenses?.length > 0 ?
            expenses.map((e) => (
              <Accordion key={e.id}>
                <AccordionSummary>
                    <div className='card-content'>
                      <div>{e.name}</div>
                      <div className='price'>
                        <div className={e.community_expense.status === 'Paid' ? 'paid' : ''}>{calculateExpense(e).toFixed(2).replace('.', ',')} €</div>
                        {/*                         <Button
                            variant="contained"
                            onClick={() => deleteExpenseFunc(e.id)}
                          >
                            DELETE
                          </Button> */}
                        <Button
                          onClick={() => expensePaidFunc(e.id)}
                        >
                          PAID
                        </Button>
                      </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>{debtDivision(e)}</AccordionDetails>
              </Accordion>
            )) : <Spinner />}
        </div>
      </Box>
        <Link to="/expenses/addexpense">
          <PrimaryBtn value="Add Expense" />
        </Link>
    </div>
  )
}

export default Expenses
