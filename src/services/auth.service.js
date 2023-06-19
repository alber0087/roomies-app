import { api } from './api'

export const login = async (email, password) => {
  try {
    const { data } = await api.post('/auth/login', { email, password })
    localStorage.setItem('token', data.token)
  } catch (error) {
    console.error('Cannot Log in', error)
  }
}

export const signup = async (name, email, password) => {
  try {
    const { data } = await api.post('/auth/signup', { firstName: name, email, password })
    localStorage.setItem('token', data.token)
  } catch (error) {
    console.error('Something goes wrong', error)
  }
}
