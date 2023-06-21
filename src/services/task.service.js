/* eslint-disable no-unused-vars */
import { api } from './api'

export const getTasks = async () => {
  const { data } = await api.get('/tasks/profile/tasks', {
    headers: {
      token: localStorage.getItem('token'),
    },
  })
  return data.tasks
}

export const addTaskService = async (name, description, date) => {
  const { data } = await api.post(
    '/tasks/profile',
    {
      name: name,
      description: description,
      date: date,
    },
    {
      headers: {
        token: localStorage.getItem('token'),
      },
    }
  )
}

export const deleteTaskService = async (id) => {
  const { data } = await api.delete(`/tasks/profile/${id}`, {
    headers: {
      token: localStorage.getItem('token'),
    },
  })
}

export const updateTaskStatusService = async (id) => {
  const { data } = await api.put(
    `/tasks/profile/${id}`,
    {
      status: 'Completed',
    },
    {
      headers: {
        token: localStorage.getItem('token'),
      },
    }
  )
}