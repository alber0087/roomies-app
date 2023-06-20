import { api } from './api'

export const getTasks = async () => {
  const { data } = await api.get('/tasks')
  return data
}