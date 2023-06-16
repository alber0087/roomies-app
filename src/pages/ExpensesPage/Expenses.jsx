import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Expenses.css'

function Expenses() {
  return (
    <Box>
      <AppBar className="header-expenses">
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
      <Button variant='contained' className='add-expense-button'>Add Expense</Button>
    </Box>
  )
}

export default Expenses
