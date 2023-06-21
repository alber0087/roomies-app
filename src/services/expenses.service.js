/* eslint-disable no-unused-vars */
import { api } from './api'

export const addExpense = async (expense, price) => {
  try {
    const { data } = await api.post(
      '/expenses/profile',
      { name: expense, price },
      {
        headers: {
          token: localStorage.getItem('token'),
        },
      }
    )    
  } catch (error) {
    console.error('Errado', error)
  }
}

export const getExpenses = async () => {
  try {
    const { data } = await api.get('/expenses/profile/expenses', {
      headers: {
        token: localStorage.getItem('token'),
      },
    })    
    return data.expenses
  } catch (error) {
    console.error('Errado', error)
  }
}

export const deleteExpense = async (id) => {
  try {
    await api.delete(`/expenses/${id}`, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
  } catch (error) {
    console.error('Errado', error)
  }
}

export const expensePaid = async (id) => { 
  try {
    await api.put(`/expenses/profile/${id}`, {}, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
  } catch (error) {
    console.error('Errado', error)
  }
}
