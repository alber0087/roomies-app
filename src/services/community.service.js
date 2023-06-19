import { api } from './api'

export const joinCommunity = async (id) => {
  await api.post(
    `/communities/profile/${id}`,
    {},
    {
      headers: {
        token: localStorage.getItem('token'),
      },
    }
  )
}

export const createCommunity = async (name, address, rooms) => {
  try {
    const { data } = await api.post(
      '/communities/profile',
      { name, address, rooms },
      {
        headers: {
          token: localStorage.getItem('token'),
        },
      }
    )
    localStorage.setItem('token', data.token)
  } catch (error) {
    console.error('Cannot Create Community', error)
  }
}

export const getCommunityId = async () => {
  try {
    const { data } = await api.get('/communities/profile', {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    console.error('Cannot Get Community', error)
  }
}
