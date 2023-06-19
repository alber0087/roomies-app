import { api } from './api'

export const getUsersByCommunityId = async () => {
  try {
    const { data } = await api.get('/communities/profile/users', {
      headers: {
        token: localStorage.getItem('token'),
      }
    })
    return data.users.users
  } catch (err) {
    console.error('Cannot get Community Users', err)
  }
}
