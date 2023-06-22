/* eslint-disable no-unused-vars */
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

export const createCommunity = async (name, selectedCity, address, rooms,image) => {
  try {
    await api.post(
      '/communities/profile',
      { name, city: selectedCity, address, rooms, image },
      {
        headers: {
          token: localStorage.getItem('token'),
        },
      }
    )
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
    return data.community
  } catch (error) {
    console.error('Cannot Get Community', error)
  }
}


