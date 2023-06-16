import { Box, Button, TextField } from '@mui/material'
import EuroIcon from '@mui/icons-material/Euro'
import './AddExpensePage.css'

function AddExpensePage() {
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
        />
      </Box>
      <Box>
        <div className="square-euro"></div>
        <EuroIcon sx={{ position: 'absolute', left: '68px', top: '281px' }} />
        <TextField
          variant="filled"
          label="0,00"
          sx={{
            position: 'absolute',
            width: '220px',
            left: '124px',
            top: '263px',
          }}
        />
      </Box>
      <Button
        variant="contained"
        sx={{
          position: 'absolute',
          left: '22px',
          top: '400px',
          width: '322px',
          height: '48px',
          backgroundColor: 'var(--secondary-color)',
        }}
      >
        Add Expense
      </Button>
    </Box>
  )
}

export default AddExpensePage
