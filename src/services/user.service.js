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

export const getUsersByCommunity = async () => {
  try {
    const { data } = await api.get('/communities/profile/users', {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (err) {
    console.error('Cannot get Community Users', err)
  }
}

export const getUserLogged = async () => {
  try {
    const { data } = await api.get('/users/profile', {
      headers: {
        token: localStorage.getItem('token'),
      }
    })
    return data
  } catch (err) {
    console.error('Cannot get user logged', err)
  }
}

export const updateUserService = async (id, name, lastName, resultSmoker, description, resultGender, resultBirthday) => {
  await api.put(
    `/users/profile/${id}`,
    {firstName: name, lastName, smoker: resultSmoker, description, gender: resultGender, birth_date: resultBirthday },
    {
      headers: {
        token: localStorage.getItem('token'),
      },
    }
  )
}

