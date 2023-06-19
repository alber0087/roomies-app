import { api } from "./api";


export const createCommunity = async (name, address, rooms) => {
  try {
    const { data } = await api.post('/communities/profile', {name, address, rooms}, 
    {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    localStorage.setItem('token', data.token)
  } catch (error) {
    console.error('Cannot Create Community', error)
  }
}

export const getCommunityId = async () => {
  try {
    const { data } = await api.get('/communities/profile', {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return data.community
  } catch (error) {
    console.error('Cannot Get Community', error)
  }
}