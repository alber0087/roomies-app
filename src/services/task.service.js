import { api } from './api'

export const getTasks = async () => {
  const { data } = await api.get('/tasks/profile/tasks', {
      headers: {
        token: localStorage.getItem('token'),
      }})
  return data.tasks
}